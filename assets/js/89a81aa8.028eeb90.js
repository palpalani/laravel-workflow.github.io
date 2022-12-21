"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[3154],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9732:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:4},o="Constraints Summary",l={unversionedId:"constraints/constraints-summary",id:"constraints/constraints-summary",title:"Constraints Summary",description:"| Workflows | Activities |",source:"@site/docs/constraints/constraints-summary.md",sourceDirName:"constraints",slug:"/constraints/constraints-summary",permalink:"/docs/constraints/constraints-summary",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/constraints/constraints-summary.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Activity Constraints",permalink:"/docs/constraints/activity-constraints"},next:{title:"Failures and Recovery",permalink:"/docs/failures-and-recovery"}},s={},c=[],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"constraints-summary"},"Constraints Summary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Workflows"),(0,a.kt)("th",{parentName:"tr",align:null},"Activities"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c IO"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f IO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c mutable global variables"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f mutable global variables")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c non-deterministic functions"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f non-deterministic functions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,a.kt)("inlineCode",{parentName:"td"},"Carbon::now()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f ",(0,a.kt)("inlineCode",{parentName:"td"},"Carbon::now()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c ",(0,a.kt)("inlineCode",{parentName:"td"},"sleep()")),(0,a.kt)("td",{parentName:"tr",align:null},"\u2714\ufe0f ",(0,a.kt)("inlineCode",{parentName:"td"},"sleep()"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u274c non-idempotent"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c non-idempotent")))),(0,a.kt)("p",null,"Workflows should be deterministic because the workflow engine relies on being able to recreate the state of the workflow from its past activities in order to continue execution. If it is not deterministic, it will be impossible for the workflow engine to accurately recreate the state of the workflow and continue execution. This could lead to unexpected behavior or errors."),(0,a.kt)("p",null,"Activities should be idempotent because activities may be retried multiple times in the event of a failure. If an activity is not idempotent, it may produce unintended side effects or produce different results each time it is run, which could cause issues with the workflow. Making the activity idempotent ensures that it can be safely retried without any issues."))}p.isMDXComponent=!0}}]);