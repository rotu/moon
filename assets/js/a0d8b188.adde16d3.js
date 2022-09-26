"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5547],{5318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7378);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||d[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9785:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7378),l=n(9619);function r(e){let{text:t="Required"}=e;return a.createElement(l.Z,{text:t,variant:"failure",className:"ml-2"})}},9022:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7378),l=n(9619);function r(e){let{header:t,updated:n,version:r}=e;return a.createElement(l.Z,{text:"v"+r,variant:n?"success":"info",className:t?"absolute right-0 top-1.5":"ml-2"})}},9619:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7378),l=n(8944),r=n(8896);const i={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function o(e){let{className:t,icon:n,text:o,variant:p}=e;return a.createElement("span",{className:(0,l.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",p?i[p]:"bg-gray-100 text-gray-800",t)},n&&a.createElement(r.Z,{icon:n,className:"mr-1"}),o)}},6927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>d});var a=n(5773),l=(n(7378),n(5318)),r=n(9785),i=n(9022);const o={title:"template.yml",toc_max_heading_level:6},p=void 0,m={unversionedId:"config/template",id:"config/template",title:"template.yml",description:"The template.yml file configures metadata and variables for a template,",source:"@site/docs/config/template.mdx",sourceDirName:"config",slug:"/config/template",permalink:"/docs/config/template",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/config/template.mdx",tags:[],version:"current",frontMatter:{title:"template.yml",toc_max_heading_level:6},sidebar:"docs",previous:{title:"moon.yml",permalink:"/docs/config/project"},next:{title:"Commands",permalink:"/docs/commands"}},s={},d=[{value:"<code>title</code><RequiredLabel />",id:"title",level:2},{value:"<code>description</code><RequiredLabel />",id:"description",level:2},{value:"<code>variables</code>",id:"variables",level:2},{value:"<code>default</code><RequiredLabel />",id:"default",level:3},{value:'<code>prompt</code><RequiredLabel text="Required for enums" />',id:"prompt",level:3},{value:"<code>type</code><RequiredLabel />",id:"type",level:3},{value:"Numbers &amp; strings",id:"numbers--strings",level:3},{value:"<code>required</code>",id:"required",level:3},{value:"Enums",id:"enums",level:3},{value:"<code>multiple</code>",id:"multiple",level:3},{value:"<code>values</code><RequiredLabel />",id:"values",level:3},{value:'Frontmatter<VersionLabel version="0.15" />',id:"frontmatter",level:2},{value:"<code>force</code>",id:"force",level:3},{value:"<code>to</code>",id:"to",level:3},{value:"<code>skip</code>",id:"skip",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.Z,{header:!0,version:"0.14",mdxType:"VersionLabel"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"template.yml")," file configures metadata and variables for a template,\n",(0,l.kt)("a",{parentName:"p",href:"../guides/codegen"},"used by the generator"),", and must exist at the root of a named template folder."),(0,l.kt)("h2",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h2"},"title"),(0,l.kt)(r.Z,{mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"string"))),(0,l.kt)("p",null,"A human readable title that will be displayed during the ",(0,l.kt)("a",{parentName:"p",href:"../commands/generate"},(0,l.kt)("inlineCode",{parentName:"a"},"moon generate")),"\nprocess."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"title: 'npm package'\n")),(0,l.kt)("h2",{id:"description"},(0,l.kt)("inlineCode",{parentName:"h2"},"description"),(0,l.kt)(r.Z,{mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"string"))),(0,l.kt)("p",null,"A description of why the template exists, what its purpose is, and any other relevant information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"description: |\n    Scaffolds the initial structure for an npm package,\n    including source and test folders, a package.json, and more.\n")),(0,l.kt)("h2",{id:"variables"},(0,l.kt)("inlineCode",{parentName:"h2"},"variables")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"Record<string, TemplateVariableConfig>"))),(0,l.kt)("p",null,"A mapping of variables that will be interpolated into all template files and file system paths when\n",(0,l.kt)("a",{parentName:"p",href:"https://tera.netlify.app/docs/#variables"},"rendering with Tera"),". The map key is the variable name\n(in camelCase or snake_case), while the value is a configuration object, as described with the\nsettings below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"variables:\n    name:\n        type: 'string'\n        default: ''\n        required: true\n        prompt: 'Package name?'\n")),(0,l.kt)("h3",{id:"default"},(0,l.kt)("inlineCode",{parentName:"h3"},"default"),(0,l.kt)(r.Z,{mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"T"))),(0,l.kt)("p",null,"The default value of the variable. When ",(0,l.kt)("inlineCode",{parentName:"p"},"--defaults")," is passed to\n",(0,l.kt)("a",{parentName:"p",href:"../commands/generate"},(0,l.kt)("inlineCode",{parentName:"a"},"moon generate"))," or ",(0,l.kt)("a",{parentName:"p",href:"#prompt"},(0,l.kt)("inlineCode",{parentName:"a"},"prompt"))," is not defined, the default value\nwill be used, otherwise the user will be prompted to enter a custom value."),(0,l.kt)("h3",{id:"prompt"},(0,l.kt)("inlineCode",{parentName:"h3"},"prompt"),(0,l.kt)(r.Z,{text:"Required for enums",mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"string"))),(0,l.kt)("p",null,"When defined, will prompt the user with a message in the terminal to input a custom value, otherwise\n",(0,l.kt)("a",{parentName:"p",href:"#default"},(0,l.kt)("inlineCode",{parentName:"a"},"default"))," will be used."),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},"type"),(0,l.kt)(r.Z,{mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean | enum | number | string"))),(0,l.kt)("p",null,"The type of value for the variable. Accepts ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"enum"),". Floats ",(0,l.kt)("em",{parentName:"p"},"are\nnot supported"),", use strings instead."),(0,l.kt)("h3",{id:"numbers--strings"},"Numbers & strings"),(0,l.kt)("p",null,"Your basic primitives."),(0,l.kt)("h3",{id:"required"},(0,l.kt)("inlineCode",{parentName:"h3"},"required")),(0,l.kt)("p",null,"Marks the variable as required during ",(0,l.kt)("em",{parentName:"p"},"prompting only"),". For strings, will error for empty values\n(",(0,l.kt)("inlineCode",{parentName:"p"},"''"),"). For numbers, will error for zero's (",(0,l.kt)("inlineCode",{parentName:"p"},"0"),")."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"variables:\n    age:\n        type: 'number'\n        default: 0\n        required: true\n        prompt: 'Age?'\n")),(0,l.kt)("h3",{id:"enums"},"Enums"),(0,l.kt)("p",null,"An enum is an explicit list of string values that a user can choose from."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="template.yml"',title:'"template.yml"'},"variables:\n    color:\n        type: 'enum'\n        values: ['red', 'green', 'blue', 'purple']\n        default: 'purple'\n        prompt: 'Favorite color?'\n")),(0,l.kt)("h3",{id:"multiple"},(0,l.kt)("inlineCode",{parentName:"h3"},"multiple")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,l.kt)("p",null,"Allows multiple values to be chosen during prompting. In the template, an array or strings will be\nrendered, otherwise when not-multiple, a single string will be."),(0,l.kt)("h3",{id:"values"},(0,l.kt)("inlineCode",{parentName:"h3"},"values"),(0,l.kt)(r.Z,{mdxType:"RequiredLabel"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"string[]"))),(0,l.kt)("p",null,"List of explicit values to choose from."),(0,l.kt)("h2",{id:"frontmatter"},"Frontmatter",(0,l.kt)(i.Z,{version:"0.15",mdxType:"VersionLabel"})),(0,l.kt)("p",null,"The following settings ",(0,l.kt)("em",{parentName:"p"},"are not")," available in ",(0,l.kt)("inlineCode",{parentName:"p"},"template.yml"),", but can be defined as frontmatter at\nthe top of a template file. View the ",(0,l.kt)("a",{parentName:"p",href:"../guides/codegen#frontmatter"},"code generation guide")," for more\ninformation."),(0,l.kt)("h3",{id:"force"},(0,l.kt)("inlineCode",{parentName:"h3"},"force")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,l.kt)("p",null,"When enabled, will always overwrite a file of the same name at the destination path, and will bypass\nany prompting in the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-twig"},"---\nforce: true\n---\n\nSome template content!\n")),(0,l.kt)("h3",{id:"to"},(0,l.kt)("inlineCode",{parentName:"h3"},"to")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"string"))),(0,l.kt)("p",null,"Defines a custom file path, relative from the destination root, in which to create the file. This\nwill override the file path within the template folder, and allow for conditional rendering and\nengine filters to be used."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-twig"},"{% set component_name = name | pascal_case %}\n\n---\nto: components/{{ component_name }}.tsx\n---\n\nexport function {{ component_name }}() {\n    return <div />;\n}\n")),(0,l.kt)("h3",{id:"skip"},(0,l.kt)("inlineCode",{parentName:"h3"},"skip")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,l.kt)("p",null,"When enabled, the template file will be skipped while writing to the destination path. This setting\ncan be used to conditionally render a file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-twig"},'---\nskip: {{ name == "someCondition" }}\n---\n\nSome template content!\n')))}c.isMDXComponent=!0}}]);