"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(m,a(a({ref:t},f),{},{components:n})):r.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},a="Activities",c={unversionedId:"defining-workflows/activities",id:"defining-workflows/activities",title:"Activities",description:"An activity is a unit of work that performs a specific task or operation (e.g. making an API request, processing data, sending an email) and can be executed by a workflow. It is defined by extending the Activity class and implementing the execute() method.",source:"@site/docs/defining-workflows/activities.md",sourceDirName:"defining-workflows",slug:"/defining-workflows/activities",permalink:"/docs/defining-workflows/activities",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/defining-workflows/activities.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Workflows",permalink:"/docs/defining-workflows/workflows"},next:{title:"Starting Workflows",permalink:"/docs/defining-workflows/starting-workflows"}},s={},l=[],f={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activities"},"Activities"),(0,i.kt)("p",null,"An activity is a unit of work that performs a specific task or operation (e.g. making an API request, processing data, sending an email) and can be executed by a workflow. It is defined by extending the ",(0,i.kt)("inlineCode",{parentName:"p"},"Activity")," class and implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute()")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\Activity;\n\nclass MyActivity extends Activity\n{\n    public function execute()\n    {\n        // Perform some work...\n        return $result;\n    }\n}\n")))}p.isMDXComponent=!0}}]);