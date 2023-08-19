"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[1660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>h});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},f=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(s,".").concat(u)]||d[u]||w[u]||a;return r?i.createElement(h,n(n({ref:t},f),{},{components:r})):i.createElement(h,n({ref:t},f))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var c=2;c<a;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(7462),o=(r(7294),r(3905));const a={slug:"introducing-child-workflows-in-laravel-workflow",title:"Introducing Child Workflows in Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["child-workflows","nesting"]},n=void 0,l={permalink:"/blog/introducing-child-workflows-in-laravel-workflow",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2023-04-05-introducing-child-workflows-in-laravel-workflow.md",source:"@site/blog/2023-04-05-introducing-child-workflows-in-laravel-workflow.md",title:"Introducing Child Workflows in Laravel Workflow",description:"Laravel Workflow has introduced an exciting new feature called \u201cChild Workflows.\u201d This addition aims to enhance the organization and maintainability of complex processes by allowing developers to encapsulate sub-processes within a parent workflow. This article will discuss the benefits of using child workflows, their similarities with running a workflow as an activity, and their compatibility with retry and resume features.",date:"2023-04-05T00:00:00.000Z",formattedDate:"April 5, 2023",tags:[{label:"child-workflows",permalink:"/blog/tags/child-workflows"},{label:"nesting",permalink:"/blog/tags/nesting"}],readingTime:2.35,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"introducing-child-workflows-in-laravel-workflow",title:"Introducing Child Workflows in Laravel Workflow",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["child-workflows","nesting"]},nextItem:{title:"New Laravel Workflow Feature: Side Effects",permalink:"/blog/new-laravel-workflow-feature-side-effects"}},s={authorsImageUrls:[void 0]},c=[],f={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Laravel Workflow has introduced an exciting new feature called \u201cChild Workflows.\u201d This addition aims to enhance the organization and maintainability of complex processes by allowing developers to encapsulate sub-processes within a parent workflow. This article will discuss the benefits of using child workflows, their similarities with running a workflow as an activity, and their compatibility with retry and resume features."),(0,o.kt)("h1",{id:"what-are-child-workflows"},"What are Child Workflows?"),(0,o.kt)("p",null,"In Laravel Workflow, child workflows are a way to manage complex processes by breaking them down into smaller, more manageable units. They enable developers to create hierarchical and modular structures for their workflows, making them more organized and easier to maintain. A child workflow is essentially a separate workflow that is invoked within a parent workflow using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ChildWorkflowStub::make()")," method."),(0,o.kt)("h1",{id:"benefits-of-using-child-workflows"},"Benefits of Using Child Workflows"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modularity: Child workflows promote modularity by allowing developers to encapsulate specific functionality within separate, reusable units. This enables better code organization and easier management of complex processes."),(0,o.kt)("li",{parentName:"ol"},"Reusability: Child workflows can be invoked within multiple parent workflows, which encourages reusability and reduces code duplication."),(0,o.kt)("li",{parentName:"ol"},"Maintainability: By breaking down complex processes into smaller units, developers can better understand, debug, and maintain their workflows.")),(0,o.kt)("h1",{id:"workflows-as-activities"},"Workflows as Activities"),(0,o.kt)("p",null,"Child workflows are similar to running a workflow as an activity in that they both encapsulate specific functionality within a parent workflow. However, child workflows offer more flexibility and reusability than activities."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*pv55DNLlsn7wuNZSL8bXrg.webp",alt:"chart"})),(0,o.kt)("p",null,"Activities are single-purpose units that perform a specific action within a workflow, such as sending an email or updating a database record. On the other hand, child workflows are complete workflows in themselves, which can be composed of multiple activities and even other child workflows. This allows developers to create complex, nested structures to manage intricate processes more efficiently."),(0,o.kt)("h1",{id:"retries-and-resumes-in-child-workflows"},"Retries and Resumes in Child Workflows"),(0,o.kt)("p",null,"Child workflows inherit the same retry and resume features as their parent workflows, enabling developers to manage error handling and recovery more effectively. When a child workflow fails, Laravel Workflow will automatically attempt to retry the failed operation, following the configured retry policy. If the child workflow still fails after all retries have been exhausted, the parent workflow can also be configured to handle the failure accordingly."),(0,o.kt)("p",null,"In addition, child workflows can be resumed if they are interrupted due to a system failure or crash. This ensures that the entire process can continue from the point of interruption without losing progress or requiring manual intervention."),(0,o.kt)("h1",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Laravel Workflow\u2019s Child Workflows feature offers developers an effective way to manage complex processes by breaking them down into smaller, more manageable units. This enhances organization, maintainability, and reusability, making it easier for developers to build and maintain intricate workflows. With the added benefits of retry and resume features, child workflows provide a robust and efficient solution for managing complex processes in Laravel applications."))}d.isMDXComponent=!0}}]);