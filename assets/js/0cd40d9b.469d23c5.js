"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1175],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39798:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),a=n(38944);const l="tabItem_wHwb";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},33337:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(25773),a=n(27378),l=n(38944),i=n(83457),o=n(35595),s=n(76457);const u="tabList_J5MA",c="tabItem_l0OV";function p(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),r=u[n].value;r!==o&&(m(t),s(r))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.Z)("tabs__item",c,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function m(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function d(e){const t=(0,o.Y)(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement(p,(0,r.Z)({},e,t)),a.createElement(m,(0,r.Z)({},e,t)))}function g(e){const t=(0,s.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},35595:(e,t,n)=>{n.d(t,{Y:()=>m});var r=n(27378),a=n(35331),l=n(30654),i=n(70784),o=n(71819);function s(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(i.location.search);t.set(o,e),i.replace({...i.location,search:t.toString()})}),[o,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[m,d]=p({queryString:n,groupId:a}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,o.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=m??g;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),f(e)}),[d,f,l]),tabValues:l}}},36642:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(27378),a=n(54267),l=n(39798),i=n(33337);function o(e,t,n){let r=e.package?`yarn workspace ${e.package} add `:"yarn add ";return e.dev?r+="--dev ":e.peer&&(r+="--peer "),n&&t&&!e.package&&(r+="-W "),r+=e.dep,r}function s(e,t){let n="pnpm add ";return e.dev?n+="--save-dev ":e.peer&&(n+="--save-peer "),e.package?n+=`--filter ${e.package} `:t&&(n+="-w "),n+=e.dep,n}function u(e){let t=o(e,!1,!0),n=s(e,!1);return e.package||(t+="\n\n# If using workspaces\n",n+="\n\n# If using workspaces\n",t+=o(e,!0,!0),n+=s(e,!0)),r.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},r.createElement(l.Z,{value:"yarn"},r.createElement(a.Z,{language:"shell"},o(e,!1,!1))),r.createElement(l.Z,{value:"yarn1"},r.createElement(a.Z,{language:"shell"},t)),r.createElement(l.Z,{value:"npm"},r.createElement(a.Z,{language:"shell"},function(e){let t="npm install ";return e.dev?t+="--save-dev ":e.peer&&(t+="--save-peer "),e.package&&(t+=`--workspace ${e.package} `),t+=e.dep,t}(e))),r.createElement(l.Z,{value:"pnpm"},r.createElement(a.Z,{language:"shell"},n)))}},27457:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(27378),a=n(54267),l=n(39798),i=n(33337);function o(e,t,n){return`${e} create ${t} ${n.join(" ")}`.trim()}function s(e){let{dep:t,args:n=[]}=e;return r.createElement(i.Z,{groupId:"package-manager",defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"Yarn (classic)",value:"yarn1"},{label:"npm",value:"npm"},{label:"pnpm",value:"pnpm"}]},r.createElement(l.Z,{value:"yarn"},r.createElement(a.Z,{language:"shell"},o("yarn",t,n))),r.createElement(l.Z,{value:"yarn1"},r.createElement(a.Z,{language:"shell"},o("yarn",t,n))),r.createElement(l.Z,{value:"npm"},r.createElement(a.Z,{language:"shell"},o("npm",t,n))),r.createElement(l.Z,{value:"pnpm"},r.createElement(a.Z,{language:"shell"},o("pnpm",t,n))))}},32189:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(27378),a=n(83469),l=n(31792);function i(e){let{to:t}=e;return r.createElement("a",{href:t,target:"_blank",className:"float-right inline-block",style:{marginTop:"-3em"}},r.createElement(l.Z,{icon:a.dT$}))}},53488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(25773),a=(n(27378),n(35318)),l=(n(36642),n(27457),n(32189));const i={title:"Remix example",sidebar_label:"Remix"},o=void 0,s={unversionedId:"guides/examples/remix",id:"guides/examples/remix",title:"Remix example",description:"In this guide, you'll learn how to integrate Remix into moon.",source:"@site/docs/guides/examples/remix.mdx",sourceDirName:"guides/examples",slug:"/guides/examples/remix",permalink:"/docs/guides/examples/remix",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/guides/examples/remix.mdx",tags:[],version:"current",frontMatter:{title:"Remix example",sidebar_label:"Remix"},sidebar:"guides",previous:{title:"React",permalink:"/docs/guides/examples/react"},next:{title:"Solid",permalink:"/docs/guides/examples/solid"}},u={},c=[{value:"Setup",id:"setup",level:2},{value:"ESLint integration",id:"eslint-integration",level:3},{value:"TypeScript integration",id:"typescript-integration",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Root-level",id:"root-level",level:3},{value:"Project-level",id:"project-level",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{to:"https://github.com/moonrepo/examples/tree/master/apps/remix-app",mdxType:"HeadingApiLink"}),(0,a.kt)("p",null,"In this guide, you'll learn how to integrate ",(0,a.kt)("a",{parentName:"p",href:"https://remix.run"},"Remix")," into moon."),(0,a.kt)("p",null,"Begin by creating a new Remix project at a specified folder path (this should not be created in the\nworkspace root, unless a polyrepo)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd apps && npx create-remix\n")),(0,a.kt)("p",null,'During this installation, Remix will ask a handful of questions, but be sure to answer "No" for the\n"Do you want me to run ',(0,a.kt)("inlineCode",{parentName:"p"},"npm install"),'?" question. We suggest installing dependencies at the workspace\nroot via package workspaces!'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"View the ",(0,a.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1"},"official Remix docs")," for a more in-depth guide to getting\nstarted!")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Since Remix is per-project, the associated moon tasks should be defined in each project's\n",(0,a.kt)("a",{parentName:"p",href:"../../config/project"},(0,a.kt)("inlineCode",{parentName:"a"},"moon.yml"))," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="<project>/moon.yml"',title:'"<project>/moon.yml"'},"fileGroups:\n    remix:\n        - 'app/**/*'\n        - 'public/**/*'\n        - 'remix.env.d.ts'\n        - 'remix.config.*'\n\ntasks:\n    # Development server\n    dev:\n        command: 'remix dev'\n        local: true\n\n    # Production build\n    build:\n        command: 'remix build'\n        inputs:\n            - '@group(remix)'\n        outputs:\n            - '.cache'\n            - 'build'\n\n    # Serve the build\n    start:\n        command: 'remix-serve ./build'\n        deps:\n            - '~:build'\n        local: true\n")),(0,a.kt)("h3",{id:"eslint-integration"},"ESLint integration"),(0,a.kt)("p",null,"Remix does not provide a built-in linting abstraction, and instead provides a simple ESLint\nconfiguration package,\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@remix-run/eslint-config"},(0,a.kt)("inlineCode",{parentName:"a"},"@remix-run/eslint-config")),". For the rest\nof this section, we're going to assume that a ",(0,a.kt)("a",{parentName:"p",href:"./eslint"},"global ",(0,a.kt)("inlineCode",{parentName:"a"},"lint")," task")," has been configured."),(0,a.kt)("p",null,"Begin be installing the ",(0,a.kt)("inlineCode",{parentName:"p"},"@remix-run/eslint-config")," dependency in the application's ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),".\nWe can then enable this configuration by creating an ",(0,a.kt)("inlineCode",{parentName:"p"},".eslintrc.js")," file in the project root. Be\nsure this file is listed in your ",(0,a.kt)("inlineCode",{parentName:"p"},"lint")," task's inputs!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/.eslintrc.js"',title:'"<project>/.eslintrc.js"'},"module.exports = {\n  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],\n\n  // If using TypeScript\n  parser: '@typescript-eslint/parser',\n  parserOptions: {\n    project: 'tsconfig.json',\n    tsconfigRootDir: __dirname,\n  },\n};\n")),(0,a.kt)("h3",{id:"typescript-integration"},"TypeScript integration"),(0,a.kt)("p",null,"Remix ships with TypeScript support (when enabled during installation), but the ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," it\ngenerates is ",(0,a.kt)("em",{parentName:"p"},"not")," setup for TypeScript project references, which we suggest using with a\n",(0,a.kt)("a",{parentName:"p",href:"./typescript"},"global ",(0,a.kt)("inlineCode",{parentName:"a"},"typecheck")," task"),"."),(0,a.kt)("p",null,"When using project references, we suggest the following ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),", which is a mix of Remix and\nmoon. Other compiler options, like ",(0,a.kt)("inlineCode",{parentName:"p"},"isolatedModules")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"esModuleInterop"),", should be declared in a\nshared configuration found in the workspace root (",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.projectOptions.json")," in the example)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="<project>/tsconfig.json"',title:'"<project>/tsconfig.json"'},'{\n  "extends": "../../tsconfig.projectOptions.json",\n  "compilerOptions": {\n    "baseUrl": ".",\n    "emitDeclarationOnly": false,\n    "jsx": "react-jsx",\n    "resolveJsonModule": true,\n    "moduleResolution": "node",\n    "noEmit": true,\n    "paths": {\n      "~/*": ["./app/*"]\n    }\n  },\n  "include": [".eslintrc.js", "remix.env.d.ts", "**/*"],\n  "exclude": [".cache", "build", "public"]\n}\n')),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"root-level"},"Root-level"),(0,a.kt)("p",null,"We suggest ",(0,a.kt)("em",{parentName:"p"},"against")," root-level configuration, as Remix should be installed per-project, and the\n",(0,a.kt)("inlineCode",{parentName:"p"},"remix")," command expects the configuration to live relative to the project root."),(0,a.kt)("h3",{id:"project-level"},"Project-level"),(0,a.kt)("p",null,"When creating a new Remix project, a\n",(0,a.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/v1/api/conventions"},(0,a.kt)("inlineCode",{parentName:"a"},"remix.config.js"))," is created, and ",(0,a.kt)("em",{parentName:"p"},"must")," exist in\nthe project root. This allows each project to configure Remix for their needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="<project>/remix.config.js"',title:'"<project>/remix.config.js"'},"module.exports = {\n  appDirectory: 'app',\n};\n")))}m.isMDXComponent=!0}}]);