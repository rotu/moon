"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2293],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return n?o.createElement(b,a(a({ref:t},c),{},{components:n})):o.createElement(b,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(25773),r=(n(27378),n(35318));const l={title:"install-global"},a=void 0,i={unversionedId:"proto/commands/install-global",id:"proto/commands/install-global",title:"install-global",description:"The proto install-global   (or proto ig) command will install a global",source:"@site/docs/proto/commands/install-global.mdx",sourceDirName:"proto/commands",slug:"/proto/commands/install-global",permalink:"/docs/proto/commands/install-global",draft:!1,editUrl:"https://github.com/moonrepo/moon/tree/master/website/docs/proto/commands/install-global.mdx",tags:[],version:"current",frontMatter:{title:"install-global"},sidebar:"proto",previous:{title:"install",permalink:"/docs/proto/commands/install"},next:{title:"list",permalink:"/docs/proto/commands/list"}},p={},s=[{value:"Arguments",id:"arguments",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"proto install-global <tool> <dependency>")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"proto ig"),") command will install a global\npackage/module/dependency for the provided tool."),(0,r.kt)("p",null,"Where globals are installed and linked are dependent on the tool. For example, Deno installs to\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.deno/bin")," and Rust to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin"),". Refer to the ",(0,r.kt)("a",{parentName:"p",href:"../tools"},"supported tools")," section for all\ninstall locations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Install a global by name\n$ proto install-global rust cargo-release\n\n# Can also include an optional version (depending on the language)\n$ proto install-global node typescript@v5\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"proto installs globals but ",(0,r.kt)("em",{parentName:"p"},"does not")," make them available on ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH"),". You'll need to manually add all\nthe ",(0,r.kt)("a",{parentName:"p",href:"../tools"},"global binary locations")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," from your shell profile.")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<tool>")," - Type of tool."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<dependency>")," - Name of dependency and optional version.")))}m.isMDXComponent=!0}}]);