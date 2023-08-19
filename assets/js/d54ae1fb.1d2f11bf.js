"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[2355],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=c(r),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return r?n.createElement(m,i(i({ref:t},f),{},{components:r})):n.createElement(m,i({ref:t},f))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"new-laravel-workflow-feature-side-effects",title:"New Laravel Workflow Feature: Side Effects",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["side-effects","random","determinism"]},i=void 0,l={permalink:"/blog/new-laravel-workflow-feature-side-effects",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2022-12-22-new-laravel-workflow-feature-side-effects.md",source:"@site/blog/2022-12-22-new-laravel-workflow-feature-side-effects.md",title:"New Laravel Workflow Feature: Side Effects",description:"effects",date:"2022-12-22T00:00:00.000Z",formattedDate:"December 22, 2022",tags:[{label:"side-effects",permalink:"/blog/tags/side-effects"},{label:"random",permalink:"/blog/tags/random"},{label:"determinism",permalink:"/blog/tags/determinism"}],readingTime:2.75,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"new-laravel-workflow-feature-side-effects",title:"New Laravel Workflow Feature: Side Effects",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["side-effects","random","determinism"]},prevItem:{title:"Introducing Child Workflows in Laravel Workflow",permalink:"/blog/introducing-child-workflows-in-laravel-workflow"},nextItem:{title:"Laravel Workflow: Job Chaining vs. Fan-out/Fan-in",permalink:"/blog/job-chaining-vs-fan-out-fan-in"}},s={authorsImageUrls:[void 0]},c=[],f={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*2CEWzQKvYNtpviILF-I-0Q.webp",alt:"effects"})),(0,a.kt)("p",null,"Workflows provide a more organized and structured approach to managing distributed processes, making it easier for developers to understand and work with complex logic."),(0,a.kt)("p",null,"Laravel Workflow is a powerful package for the Laravel web framework that provides tools for defining and managing workflows."),(0,a.kt)("p",null,"One of the key features of any workflow engine is the ability to track the history of a workflow as it is executed which allows a workflow to be retried if it fails or encounters an error. However, this also means that your workflow code must be deterministic and any non-deterministic code has to be carefully managed."),(0,a.kt)("p",null,"Recently, Laravel Workflow added support for ",(0,a.kt)("a",{parentName:"p",href:"https://laravel-workflow.com/docs/features/side-effects"},"side effects"),", which are closures containing non-deterministic code that is only executed once and the result saved. Side effects are a useful way to introduce non-deterministic behavior into a workflow, such as generating a random number or UUID."),(0,a.kt)("p",null,"Here is an example workflow that demonstrates side effects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class SideEffectWorkflow extends Workflow  \n{  \n    public function execute()  \n    {  \n        $sideEffect = yield WorkflowStub::sideEffect(  \n          fn () => random\\_int(PHP\\_INT\\_MIN, PHP\\_INT\\_MAX)  \n        );  \n  \n        $badSideEffect = random\\_int(PHP\\_INT\\_MIN, PHP\\_INT\\_MAX);  \n  \n        $result1 = yield ActivityStub::make(SimpleActivity::class, $sideEffect);  \n  \n        $result2 = yield ActivityStub::make(SimpleActivity::class, $badSideEffect);  \n  \n        if ($sideEffect !== $result1) {  \n            throw new Exception(  \n                'These side effects should match because it was properly wrapped in WorkflowStub::sideEffect().'  \n            );  \n        }  \n  \n        if ($badSideEffect === $result2) {  \n            throw new Exception(  \n                'These side effects should not match because it was not wrapped in WorkflowStub::sideEffect().'  \n            );  \n        }  \n    }  \n}\n")),(0,a.kt)("p",null,"The activity doesn\u2019t actually do anything. It just takes the input and passes it back out unmodified, so that we can compare the result to what we generated inside of the workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"class SimpleActivity extends Activity  \n{  \n    public function execute($input)  \n    {  \n        return $input;  \n    }  \n}\n")),(0,a.kt)("p",null,"In this example, the workflow generates two random integers: one using a side effect and the other using a local variable. The values of these integers are then passed to two different activities."),(0,a.kt)("p",null,"The first activity receives the value of the side effect, which has been saved. As a result, the value of the side effect should remain constant throughout the execution of the workflow."),(0,a.kt)("p",null,"The second activity receives the value of the local variable, which is not saved and will be regenerated. This means that the value of the local variable will change between executions of the workflow."),(0,a.kt)("p",null,"As a result, it is not expected that the value of the local variable will match the value returned from the second activity. The odds of two random integers generated using ",(0,a.kt)("inlineCode",{parentName:"p"},"random_int(PHP_INT_MIN, PHP_INT_MAX)")," being equal are extremely low, since there are a very large number of possible integers in this range."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*ElelNBBf4pbE3-nueJcriQ.webp",alt:"dice"})),(0,a.kt)("p",null,"It\u2019s important to use side effects appropriately in your workflow to ensure that your workflow is reliable and can recover from failures. Only use side effects for short pieces of code that cannot fail, and make sure to use activities to perform long-running work that may fail and need to be retried, such as API requests or external processes."),(0,a.kt)("p",null,"Overall, side effects are a powerful tool for introducing non-deterministic behavior into your workflows. When used correctly, they can help you to add more flexibility and complexity to your application\u2019s logic."),(0,a.kt)("p",null,"Laravel Workflow is a powerful tool for managing workflows in your Laravel applications, and the addition of support for side effects makes it even more powerful!"))}u.isMDXComponent=!0}}]);