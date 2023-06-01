"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[3957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,w=u["".concat(s,".").concat(d)]||u[d]||f[d]||a;return n?r.createElement(w,i(i({ref:t},p),{},{components:n})):r.createElement(w,i({ref:t},p))}));function w(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:6},i="Passing Data",l={unversionedId:"defining-workflows/passing-data",id:"defining-workflows/passing-data",title:"Passing Data",description:"You can pass data into a workflow via the start() method.",source:"@site/docs/defining-workflows/passing-data.md",sourceDirName:"defining-workflows",slug:"/defining-workflows/passing-data",permalink:"/docs/defining-workflows/passing-data",draft:!1,editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/docs/defining-workflows/passing-data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Workflow ID",permalink:"/docs/defining-workflows/workflow-id"},next:{title:"Features",permalink:"/docs/category/features"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"passing-data"},"Passing Data"),(0,o.kt)("p",null,"You can pass data into a workflow via the ",(0,o.kt)("inlineCode",{parentName:"p"},"start()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\WorkflowStub;\n\n$workflow = WorkflowStub::make(MyWorkflow::class);\n$workflow->start('world');\nwhile ($workflow->running());\n$workflow->output();\n=> 'Hello, world!'\n")),(0,o.kt)("p",null,"It will be passed as arguments to the workflow's ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method."),(0,o.kt)("p",null,"Similarly, you can pass data into an activity via the ",(0,o.kt)("inlineCode",{parentName:"p"},"ActivityStub::make()")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass MyWorkflow extends Workflow\n{\n    public function execute($name)\n    {\n        $result = yield ActivityStub::make(MyActivity::class, $name);\n        return $result;\n    }\n}\n")),(0,o.kt)("p",null,"It will be passed as arguments to the activity's ",(0,o.kt)("inlineCode",{parentName:"p"},"execute()")," method"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use Workflow\\Activity;\n\nclass MyActivity extends Activity\n{\n    public function execute($name)\n    {\n        return "Hello, {$name}!";\n    }\n}\n')))}u.isMDXComponent=!0}}]);