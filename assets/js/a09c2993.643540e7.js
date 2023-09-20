"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[4128],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>w});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,w=d["".concat(s,".").concat(f)]||d[f]||p[f]||n;return r?a.createElement(w,i(i({ref:t},u),{},{components:r})):a.createElement(w,i({ref:t},u))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8495:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(7462),o=(r(7294),r(3905));const n={sidebar_position:1},i="Introduction",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"What is Laravel Workflow?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/installation"}},s={},c=[{value:"What is Laravel Workflow?",id:"what-is-laravel-workflow",level:2},{value:"Why use Laravel Workflow?",id:"why-use-laravel-workflow",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"what-is-laravel-workflow"},"What is Laravel Workflow?"),(0,o.kt)("p",null,"Laravel Workflow is a durable workflow engine that allows developers to write long running persistent distributed workflows (orchestrations) in PHP powered by Laravel Queues. It provides a simple and intuitive way to define complex asynchronous processes, such as data pipelines and microservices, as a sequence of activities that run in parallel or in series."),(0,o.kt)("p",null,"Laravel Workflow is built on top of Laravel, the popular PHP web framework, and uses its queue system and database layer to store and manage workflow data and state. It is designed to be scalable, reliable, and easy to use, with a focus on simplicity and maintainability."),(0,o.kt)("h2",{id:"why-use-laravel-workflow"},"Why use Laravel Workflow?"),(0,o.kt)("p",null,"There are several reasons why developers might choose to use Laravel Workflow for their workflow management needs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow has access to all the features and capabilities of Laravel, such as Eloquent ORM, events, service container and more. This makes it a natural fit for Laravel developers and allows them to leverage their existing Laravel knowledge and skills.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is designed to be simple and intuitive to use, with a clean and straightforward API and conventions. This makes it easy for developers to get started and quickly build complex workflows without having to spend a lot of time learning a new framework or domain-specific language.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is highly scalable and reliable, thanks to its use of Laravel queues and the ability to run workflows on multiple workers. This means it can scale horizontally and handle large workloads without sacrificing performance or stability.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Laravel Workflow is open source and actively maintained, with a growing community of contributors and users. This means that developers can easily get help and support, share their experiences and knowledge, and contribute to the development of the framework."))),(0,o.kt)("p",null,"Compared to the built-in queues, Laravel Workflow allows for more complex and dynamic control over the execution of jobs, such as branching and looping, and provides a way to monitor the progress and status of the workflow as a whole. Unlike job chaining and batching, which are designed to execute a fixed set of jobs in a predetermined sequence, Laravel Workflow also allows for more flexible and adaptable execution."))}d.isMDXComponent=!0}}]);