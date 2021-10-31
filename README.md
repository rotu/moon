# Monolith

Monolith is a Rust program for managing JavaScript based monorepo's.

> Inspired heavily from Bazel.

## Features

- **Hermetic environments** - Ensure the same environment and expectations across every machine.
- **Concurrent tasks** - Run tasks in parallel using a worker farm.
- **Other cool stuff...**

## Concepts

### Workspace

A workspace is a VCS repository that contains one or many [projects](#project). Although monolith
has been designed for monorepos, it can be used for polyrepos.

The root of a workspace is defined by a `.monolith` folder. A repository may contain multiple
workspaces as long as they are configured in separate and distinct folder trees.

### Toolchain

All technologies, languages, libraries, etc that are required for running [tasks](#task) within a
[workspace](#workspace). The toolchain _must_ be unaffected by external sources and _must_ be
deterministic between machines.

### Project

A project is a library, application, package, binary, etc, that contains source files, test files,
assets, resources, and more. A project is denoted with a [`project.yml`](#projectyml) file, and must
exist within a [workspace](#workspace).

#### PID

A PID, or project identifier, is a unique resource for locating and referencing a project. The PID
is explicitly derived from the workspace file system structure, and is composed by the folder path
from the workspace root to the project root. Let's demonstrate this with the an example structure.

```
.monolith/
apps/
  client/
    project.yml
  server/
    project.yml
packages/
  design/
    system/
      project.yml
  data/
    project.yml
```

In the example above, the following would be valid PIDs: `/apps/client`, `/apps/server`,
`/packages/design/system`, `/packages/data`. The leading forward slash (`/`) is used as a
designation for "starting from the workspace root".

Because of this, PIDs _may be relative_ from the current working folder. For example, if you're in
the `packages/design` folder, you may run a task with `bazel test system:lint` instead of the
fully-qualified `bazel test /packages/design/system:lint`.

### Task

An action that can be ran within the context of a [project](#project), and are configured through a
[`tasks.ts`](#tasksts) file. Tasks are separated into the following types:

- **Build** - Generates an output from an input. Example: babel, rollup, webpack.
- **Test** - Validates criteria on a set of inputs. Example: jest, eslint, typescript.
- **Run** - Runs a one-off or long-lived process. Example: (watch mode), prettier, ts-node.

Underneath the hood, a task is simply a node module binary or a JavaScript/TypeScript script, that
is ran as a child-process. Tasks communicate between the Monolith Rust client and server through a
JSON-like message system, with this message structure supporting the following fields:

- `script` (`string`) - Either a node module binary name, npm package name, or JavaScript file path
  to execute.
- `args` (`string[]`) - List of command like arguments that will be passed to `script`.
- `inputs` (`(FileGroupToken | ProjectFile | WorkspaceFile)[]`) - List of file groups (via tokens),
  relative files/folders/globs from project root, and relative files/folders/globs from workspace
  root.
  - Inputs are used as the delta to determine if the task should rebuild, based on the state of the
    previous build.
  - Inputs can be referenced in arguments using the `@in` token.
- `outputs` (`ProjectFile[]`) - List of relative files/folders/globs from project root, that will be
  created from this task.
  - Outputs can be piped into other tasks to create a dependency chain.
  - Outputs can be referenced in arguments using the `@out` token.
- `deps` (`Target[]`) - List of external tasks, using a target label, that will be executed before
  this task.
  - The output of these targets can be referenced in arguments using the `@dep` token.
- `options` (`TaskOptions`) - Object of options to customize the task process.
  - `retryCount` (`number`) - Number of times to retry the task before ultimately failing.

#### Tokens

- File groups
  - `@glob` - Returns the file group as a glob (typically as-is).
  - `@root` - Returns the file group, reduced down to the lowest possible directory.
  - `@dirs` - Returns the file group, reduced down to all possible directories.
  - `@files` - Returns the file group as a list of all possible files.
- Inputs & outputs
  - `@in` - Points to an index within a task's `inputs` list. This will be expanded to the
    underyling file path(s).
  - `@out` - Points to an index within a task's `outputs` list. This will be expanded to the
    underyling file path(s).
  - `@dep` - Points to an index within a task's `deps` list. This will be expanded to the underyling
    file path(s) of the task's output.
- Other
  - `@cache` - Returns an absolute file path to a location within the cache folder.
  - `@pid` - Returns the running project's ID as a fully-qualified ID from the workspace root.

### Target

A target is a label composed of a [project ID](#pid) and task name, separated by a colon (`:`).
Targets are used by terminal commands and task configurations for declaring cross-project or
cross-task dependencies.

For example, if project `/apps/client` contained a task named `lint`, then the target would be
`/apps/client:lint`.

## Configuration

All Monolith configuration files are written in YAML or TypeScript, depending on the type of file.

- **Why YAML instead of JSON?** JSON is a data format by design, not a configuration format. Because
  of this, and its lack of comments, YAML is a better option.
- **Why TypeScript?** Since Monolith is designed for JavaScript based projects and tooling, it makes
  sense to also configure in a JavaScript-like language. This choice has the added benefit of these
  files also being linted, type checked, and statically analyzed like the rest of the workspace.

### `.monolith/workspace.yml`

Located at the workspace root, this file configures the developer and runtime environment for the
toolchain. This includes the Node.js version, a chosen package manager, and the package manager
version, project locations, and more.

```yaml
# The Node.js version to install and configure within the toolchain.
node:
  version: '14.18.1'
  packageManager: 'yarn'
  shasums:
    windows: '86737cd4544c4f8cda2abd8e60709a87dbf46119062c5f1d4ec297f71a9e204b'
    macos: '78731152378577decf681167f4c6be6c31134dfef07403c1cebfbd3289d3886f'
    linux: '3fcd1c6c008c2dfddea60ede3c735696982fb038288e45c2d35ef6b2098c8220'

# Yarn version to install and configure within the toolchain.
# Only used when `packageManager` is yarn. Other fields `npm` and `pnpm` also exist.
yarn:
  version: '3.1.0' # or source

# File system patterns to locate `project.yml` files.
# These patterns help to enforce a specific file system structure.
projects:
  - 'apps/*/project.yml'
  - 'packages/*/project.yml'
```

### `.monolith/fileGroups.yml`

Located at the workspace root, this file configures file groups that are inherited by _all_
projects, enabling reuse and enforcing patterns. However, these settings can be overriden at the
project-level with their [`<pid>/project.yml`](#projectyml) file.

View the [`project.yml`](#projectyml) section for an example on usage.

### `.monolith/projectTasks.ts`

Located at the workspace root, this file configures tasks that are available to _all_ projects.
Workspace tasks can be overridden at the project-level with a [`<pid>/tasks.ts`](#tasksts) file.

View the [`tasks.ts`](#tasksts) section for an example on usage.

### `project.yml`

This files denotes a project, and must be located at the root of a project as defined by the
[`projects` setting](#monolithworkspaceyml).

```yaml
# Unique name of the project.
name: 'Example'

# Description of the project.
description: 'A description of what the example project does.'

# The team or organization that owns and maintains the project.
# Can be a title, LDAP name, GitHub team, etc.
owner: 'infra'

# The Slack/Teams/Discord/etc channel to discuss the project.
channel: '#infra'

# Other projects in the workspace that this project depends upon.
dependsOn:
  - '/some/other/project'
  - '/another/project'

# File system patterns relative to the project root for grouping
# files based on their use case. These groups are then used by
# tasks to calculate functionality like cache hit/miss, affected
# files since last change, hot reloading, deterministic builds, etc.
fileGroups:
  # List of non-test JS/TS source files.
  # This may include runtime, published, or distributable files.
  sources:
    - 'src/**/*.{ts,tsx}'

  # List of non-source JS/TS test files.
  # This may include unit tests, E2E tests, stories, etc.
  tests:
    - 'tests/**/*.test.{ts,tsx}'
    - '**/__tests__/**/*'

  # Static assets within the project.
  # This may include styles, images, videos, etc.
  assets:
    - 'assets/**/*'
    - 'src/**/*.css'
    - '**/*.md'

  # Runtime required resources, that are not JS/TS.
  # This may include i18n translations, binaries, etc.
  resources:
    - 'messages/**/*.json'
```

### `tasks.ts`

Tasks are declared by importing and executing a function, and then exporting the result. The name of
the export becomes the label in which to run the task on the command line.

```ts
import babel from '@monolith/babel';
import eslint from '@monolith/eslint';
import jest from '@monolith/jest';
import typescript from '@monolith/typescript';

const extensions = ['.ts', '.tsx'];

// Run task with `mono build <pid>:build`
// Will transpile `sources` file group to output directory
export const build = babel.build(
	{},
	{
		copyFiles: true,
		extensions,
		outputDir: 'lib',
	},
);

// Run task with `mono test <pid>:lint`
// Will lint `sources` and `tests` file groups
export const lint = eslint.test(
	{
		// Requires `typeCheck` task to be ran first
		dependsOn: [':typeCheck'],
	},
	{ extensions },
);

// Run task with `mono test <pid>:test`
// Will map `tests` file group to `--testMatch`
export const test = jest.test();

// Run task with `mono build <pid>:typeCheck`
// Will lint `sources` and `tests` file groups to include/exclude
export const typeCheck = typescript.build();
```

## Commands

### `mono build`

### `mono test`

### `mono run`

### `mono watch`

### `mono debug`
