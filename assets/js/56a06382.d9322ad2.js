"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5091],{9798:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),l=n(8944);const r="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},3337:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(5773),l=n(7378),r=n(8944),i=n(6457),o=n(784),s=n(9947),p=n(3457);const u="tabList_J5MA",c="tabItem_l0OV";function d(e){var t;const{lazy:n,block:i,defaultValue:d,values:m,groupId:g,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:j}=(0,s.U)(),[N,y]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=g){const e=x[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&y(e)}const Z=e=>{const t=e.currentTarget,n=w.indexOf(t),a=b[n].value;a!==N&&(E(t),y(a),null!=g&&j(g,String(a)))},T=e=>{var t;let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},h)},b.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:T,onClick:Z},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,i.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},6642:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7378),l=n(4267),r=n(9798),i=n(3337);function o(e,t,n){let a=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?a+="--dev ":e.peer&&(a+="--peer "),n&&t&&!e.package&&(a+="-W "),a+=e.dep,a}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function p(e){let t=o(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=o(e,!0,!0),n+=s(e,!0)),a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(l.Z,{language:"shell"},o(e,!1,!1))),a.createElement(r.Z,{value:"yarn1"},a.createElement(l.Z,{language:"shell"},t)),a.createElement(r.Z,{value:"npm"},a.createElement(l.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),a.createElement(r.Z,{value:"pnpm"},a.createElement(l.Z,{language:"shell"},n)))}},7457:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7378),l=n(4267),r=n(9798),i=n(3337);function o(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function s(e){let{dep:t,args:n=[]}=e;return a.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},a.createElement(r.Z,{value:"yarn"},a.createElement(l.Z,{language:"shell"},o("yarn",t,n))),a.createElement(r.Z,{value:"yarn1"},a.createElement(l.Z,{language:"shell"},o("yarn",t,n))),a.createElement(r.Z,{value:"npm"},a.createElement(l.Z,{language:"shell"},o("npm",t,n))),a.createElement(r.Z,{value:"pnpm"},a.createElement(l.Z,{language:"shell"},o("pnpm",t,n))))}},2189:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378),l=n(3469),r=n(1792);function i(e){let{to:t}=e;return a.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},a.createElement(r.Z,{icon:l.dT$}))}},5210:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var a=n(5773),l=(n(7378),n(5318)),r=n(6642),i=(n(7457),n(3337)),o=n(9798),s=n(2189);const p={title:"Next.js example",sidebar_label:"Next.js"},u=void 0,c={unversionedId:"guides/examples/next",id:"guides/examples/next",title:"Next.js example",description:"In this guide, you'll learn how to integrate Next.js into moon.",source:"@site/docs/guides/examples/next.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/next",permalink:"/docs/guides/examples/next",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/next.mdx",tags:[],version:"current",frontMatter:{title:"Next.js example",sidebar_label:"Next.js"},sidebar:"guides",previous:{title:"Jest",permalink:"/docs/guides/examples/jest"},next:{title:"Nuxt",permalink:"/docs/guides/examples/nuxt"}},d={},m=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],g={toc:m};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(s.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/nextjs-app",mdxType:"HeadingApiLink"}),(0,l.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org"},"Next.js")," into moon."),(0,l.kt)("p",null,"Begin by creating a new Next.js project at a specified folder path (this should not be created in\nthe workspace root, unless a polyrepo)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd apps && npx create-next-app <project> --typescript\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"View the ",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/learn/basics/create-nextjs-app/setup"},"official Next.js docs")," for a\nmore in-depth guide to getting started!")),(0,l.kt)("h2",{id:"setup"},"Setup"),(0,l.kt)("p",null,"Since Next.js is per-project, the associated moon tasks should be defined in each project's\n",(0,l.kt)("a",{parentName:"p",href:"../../config/project"},(0,l.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n    next:\n        - 'pages/**/*'\n        - 'public/**/*'\n        - 'src/**/*'\n        - 'next-env.d.ts'\n        - 'next.config.*'\n\ntasks:\n    # Development server\n    dev:\n        command: 'next dev'\n        local: true\n\n    # Production build (SSR)\n    build:\n        command: 'next build'\n        inputs:\n            - '@group(next)'\n\n    # Production build (SSG)\n    export:\n        command: 'next export -o ./build'\n        deps:\n            - '~:build'\n        inputs:\n            - '@group(next)'\n        outputs:\n            - 'build'\n\n    # Serve the build\n    start:\n        command: 'next start'\n        local: true\n")),(0,l.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,l.kt)("p",null,"Next.js has ",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/eslint"},"built-in support for ESLint"),", which is\ngreat, but complicates things a bit. Because of this, you have two options for moving forward:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use a ",(0,l.kt)("a",{parentName:"li",href:"./eslint"},"global ",(0,l.kt)("inlineCode",{parentName:"a"},"lint")," task")," and bypass Next.js's solution (preferred)."),(0,l.kt)("li",{parentName:"ul"},"Use Next.js's solution only.")),(0,l.kt)("p",null,"Regardless of which option is chosen, the following changes are applicable to all options and should\nbe made. Begin be installing the\n",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/eslint#eslint-config"},(0,l.kt)("inlineCode",{parentName:"a"},"eslint-config-next"))," dependency in\nthe application's ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,l.kt)(r.Z,{dep:"eslint-config-next",package:"<project>",dev:!0,mdxType:"AddDepsTabs"}),(0,l.kt)("p",null,"Since the Next.js app is located within a subfolder, we'll need to tell the ESLint plugin where to\nlocate it. This can be achieved with a project-level ",(0,l.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  extends: 'next', // or 'next/core-web-vitals'\n  settings: {\n    next: {\n      rootDir: __dirname,\n    },\n  },\n};\n")),(0,l.kt)("p",null,"With the basics now setup, choose the option that works best for you."),(0,l.kt)(i.Z,{groupId:"lint-type",defaultValue:"global",values:[{label:"Global lint",value:"global"},{label:"Next.js lint",value:"nextjs"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"global",mdxType:"TabItem"},(0,l.kt)("p",null,"We encourage using the global ",(0,l.kt)("inlineCode",{parentName:"p"},"lint")," task for consistency across all projects within the repository.\nWith this approach, the ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," command itself will be ran and the ",(0,l.kt)("inlineCode",{parentName:"p"},"next lint")," command will be\nignored, but the ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint-config-next")," rules will still be used."),(0,l.kt)("p",null,"Additionally, we suggest disabling the linter during the build process, but is not a requirement. As\na potential alternative, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"lint")," task as a dependency for the ",(0,l.kt)("inlineCode",{parentName:"p"},"build")," task."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  eslint: {\n    ignoreDuringBuilds: true,\n  },\n};\n"))),(0,l.kt)(o.Z,{value:"nextjs",mdxType:"TabItem"},(0,l.kt)("p",null,"If you'd prefer to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"next lint")," command, add it as a task to the project's\n",(0,l.kt)("a",{parentName:"p",href:"../../config/project"},(0,l.kt)("inlineCode",{parentName:"a"},"moon.yml")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"tasks:\n    lint:\n        command: 'next lint'\n        inputs:\n            - '@group(next)'\n")),(0,l.kt)("p",null,"Furthermore, if a global ",(0,l.kt)("inlineCode",{parentName:"p"},"lint")," task exists, be sure to exclude it from being inherited."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"workspace:\n  inheritedTasks:\n    exclude: ['lint']\n")))),(0,l.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,l.kt)("p",null,"Next.js also has\n",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/typescript"},"built-in support for TypeScript"),", but has\nsimilar caveats to the ",(0,l.kt)("a",{parentName:"p",href:"#eslint-integration"},"ESLint integration"),". TypeScript itself is a bit\ninvolved, so we suggest reading the official Next.js documentation before continuing."),(0,l.kt)("p",null,"At this point we'll assume that a ",(0,l.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," has been created in the application, and\ntype-checking works. From here we suggest utilizing a ",(0,l.kt)("a",{parentName:"p",href:"./typescript"},"global ",(0,l.kt)("inlineCode",{parentName:"a"},"typecheck")," task")," for\nconsistency across all projects within the repository."),(0,l.kt)("p",null,"Additionally, we suggest disabling the type-checker during the build process, but is not a\nrequirement. As a potential alternative, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"typecheck")," task as a dependency for the ",(0,l.kt)("inlineCode",{parentName:"p"},"build"),"\ntask."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  typescript: {\n    ignoreBuildErrors: true,\n  },\n};\n")),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("h3",{id:"root-level"},"Root-level"),(0,l.kt)("p",null,"We suggest ",(0,l.kt)("em",{parentName:"p"},"against")," root-level configuration, as Next.js should be installed per-project, and the\n",(0,l.kt)("inlineCode",{parentName:"p"},"next")," command expects the configuration to live relative to the project root."),(0,l.kt)("h3",{id:"project-level"},"Project-level"),(0,l.kt)("p",null,"When creating a new Next.js project, a\n",(0,l.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-reference/next.config.js/introduction"},(0,l.kt)("inlineCode",{parentName:"a"},"next.config.<js|mjs>"))," is\ncreated, and ",(0,l.kt)("em",{parentName:"p"},"must")," exist in the project root. This allows each project to configure Next.js for\ntheir needs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/next.config.js"',title:'"<project>/next.config.js"'},"module.exports = {\n  compress: true,\n};\n")))}h.isMDXComponent=!0}}]);