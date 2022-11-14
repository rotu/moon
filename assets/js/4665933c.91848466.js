"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5924],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,u=m["".concat(s,".").concat(d)]||m[d]||h[d]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8109:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7378);function i(e){let{src:t,width:n="90%",alt:i="",title:r,align:o="center",padding:l="1rem"}=e;return a.createElement("div",{style:{paddingBottom:l,paddingTop:l,textAlign:o}},a.createElement("img",{src:t.default,width:n,alt:i,title:r}))}},1664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(5773),i=(n(7378),n(5318));n(8109);const r={slug:"v0.19",title:"v0.19 - Remote caching beta, affected files, and graph optimization",authors:["milesj"],tags:["affected","remote-cache","dep-graph"],image:"./img/v0.19.png"},o=void 0,l={permalink:"/blog/v0.19",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2022-11-14_v0.19.mdx",source:"@site/blog/2022-11-14_v0.19.mdx",title:"v0.19 - Remote caching beta, affected files, and graph optimization",description:"With this release, we've focused heavily on our remote caching architecture. Since this is a massive",date:"2022-11-14T00:00:00.000Z",formattedDate:"November 14, 2022",tags:[{label:"affected",permalink:"/blog/tags/affected"},{label:"remote-cache",permalink:"/blog/tags/remote-cache"},{label:"dep-graph",permalink:"/blog/tags/dep-graph"}],readingTime:2.895,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"v0.19",title:"v0.19 - Remote caching beta, affected files, and graph optimization",authors:["milesj"],tags:["affected","remote-cache","dep-graph"],image:"./img/v0.19.png"},nextItem:{title:"v0.18 - Improved configuration and initialization flow",permalink:"/blog/v0.18"}},s={image:n(6620).Z,authorsImageUrls:[void 0]},c=[{value:"Remote caching beta",id:"remote-caching-beta",level:2},{value:"Affected files filtering",id:"affected-files-filtering",level:2},{value:"Dependency graph optimizations",id:"dependency-graph-optimizations",level:2},{value:"Other changes",id:"other-changes",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"With this release, we've focused heavily on our remote caching architecture. Since this is a massive\ntask that requires much work behind the scenes, this overall release is rather light."),(0,i.kt)("h2",{id:"remote-caching-beta"},"Remote caching beta"),(0,i.kt)("p",null,"A major request for moon is to support remote caching. This is a critical feature that allows\nartifacts to be shared across machines and environments, by storing them in a cloud storage\nprovider, like AWS S3."),(0,i.kt)("p",null,"We've been working on this feature for months, primarily behind the scenes building the necessary\nservices and tools, and we've finally reached a point where we could integrate it with moon\ndirectly! However, since this feature is very complex, it's not yet available to the public, but\nwhile you wait, you can sign up for beta access! Jump over to the\n",(0,i.kt)("a",{parentName:"p",href:"../docs/guides/remote-cache"},"official remote caching documentation for more information"),"!"),(0,i.kt)("p",null,"We'll be working on remote caching through every release, continually polishing the implementation,\nsupporting new features, enabling new regions, calculating pricing, so on and so forth. So stay\ntuned!"),(0,i.kt)("h2",{id:"affected-files-filtering"},"Affected files filtering"),(0,i.kt)("p",null,"We've spent a good portion of this release working on affected detection for projects and tasks,\nprimarily through ",(0,i.kt)("inlineCode",{parentName:"p"},"--affected"),', and have uncovered and fixed a handful of edge cases. With that\nbeing said, we asked ourselves, "How could we improve the developer experience even more"? What\nabout passing the affected files list to the running task?'),(0,i.kt)("p",null,"And that's exactly what we've done through the new task option\n",(0,i.kt)("a",{parentName:"p",href:"../docs/config/project#affectedfiles"},(0,i.kt)("inlineCode",{parentName:"a"},"affectedFiles")),"! This option works in unison with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"--affected")," option, enabling some awesome functionality. Given the following config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="moon.yml" {6}',title:'"moon.yml"',"{6}":!0},"tasks:\n  lint:\n    command: 'eslint'\n    options:\n      affectedFiles: true\n")),(0,i.kt)("p",null,"When we run this task ",(0,i.kt)("em",{parentName:"p"},"without")," ",(0,i.kt)("inlineCode",{parentName:"p"},"--affected"),", it will append an argument for the current directory\n(",(0,i.kt)("inlineCode",{parentName:"p"},"."),"). This will lint the entire project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# moon run project:lint\neslint .\n")),(0,i.kt)("p",null,"However, when we run this task ",(0,i.kt)("em",{parentName:"p"},"with")," ",(0,i.kt)("inlineCode",{parentName:"p"},"--affected"),", and have have touched files in the working tree,\nit will now append an argument for each file that matches the task's ",(0,i.kt)("inlineCode",{parentName:"p"},"inputs"),". This will now only\nlint the provided files, ",(0,i.kt)("em",{parentName:"p"},"instead")," of the entire project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# moon run project:lint --affected\neslint ./file.ts ./another/file.ts\n")),(0,i.kt)("p",null,"This functionality is ",(0,i.kt)("em",{parentName:"p"},"perfect")," pre-commit hooks, and as such, we've added a\n",(0,i.kt)("a",{parentName:"p",href:"../docs/guides/git-hooks"},"guide for utilizing this pattern with git hooks"),"!"),(0,i.kt)("h2",{id:"dependency-graph-optimizations"},"Dependency graph optimizations"),(0,i.kt)("p",null,"Our dependency graph determines which targets to run, what tools to install, projects to sync, and\nin which order. It's a very complex directed acyclic graph, and has only gotten more complicated\nover the year, especially with the introduction of project-level tool overrides."),(0,i.kt)("p",null,"We decided to rewrite the dependency graph from the ground up to mitigate many of these issues,\noptimize nodes and edges, reduce the number of data cloning, and to increase the overall\nperformance. Everything will still work exactly the same (all of our existing tests passed with no\nissue)!"),(0,i.kt)("p",null,"On top of this, we've also migrated the internals of moon to a new hashing algorithm that should see\na 5-10% increase in performance!"),(0,i.kt)("h2",{id:"other-changes"},"Other changes"),(0,i.kt)("p",null,"View the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/releases/tag/%40moonrepo%2Fcli%400.19.0"},"official release")," for a\nfull list of changes."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Package managers in the toolchain are now installed in isolation, instead of through Node.js."),(0,i.kt)("li",{parentName:"ul"},"JSON files will now respect the closest ",(0,i.kt)("inlineCode",{parentName:"li"},".editorconfig")," file."),(0,i.kt)("li",{parentName:"ul"},"Webhook payloads now include information about the running CI/CD environment."),(0,i.kt)("li",{parentName:"ul"},"Generator can now merge JSON/YAML template files.")),(0,i.kt)("h2",{id:"whats-next"},"What's next?"),(0,i.kt)("p",null,"Expect the following in the v0.20 release!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continuation of remote caching work!"),(0,i.kt)("li",{parentName:"ul"},"Performance improvements for output hydration."),(0,i.kt)("li",{parentName:"ul"},"Toolchain improvements.")))}h.isMDXComponent=!0},6620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/v0.19-78b0dde00a078efefe909e6acefe73a7.png"}}]);