"use strict";(self.webpackChunklaravel_workflow=self.webpackChunklaravel_workflow||[]).push([[2418],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(s,".").concat(h)]||u[h]||f[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={slug:"job-chaining-vs-fan-out-fan-in",title:"Laravel Workflow: Job Chaining vs. Fan-out/Fan-in",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png"},tags:["chaining","fan-out","fan-in","batching"]},o=void 0,l={permalink:"/blog/job-chaining-vs-fan-out-fan-in",editUrl:"https://github.com/laravel-workflow/laravel-workflow.github.io/edit/main/blog/2022-12-06-job-chaining-vs-fan-out-fan-in.md",source:"@site/blog/2022-12-06-job-chaining-vs-fan-out-fan-in.md",title:"Laravel Workflow: Job Chaining vs. Fan-out/Fan-in",description:"Chaining is a workflow design pattern that involves the sequential execution of a series of activities, with the output of one activity potentially serving as the input to the next activity in the chain. This pattern is often used to create a linear, step-by-step process for completing a task.",date:"2022-12-06T00:00:00.000Z",formattedDate:"December 6, 2022",tags:[{label:"chaining",permalink:"/blog/tags/chaining"},{label:"fan-out",permalink:"/blog/tags/fan-out"},{label:"fan-in",permalink:"/blog/tags/fan-in"},{label:"batching",permalink:"/blog/tags/batching"}],readingTime:2.485,hasTruncateMarker:!1,authors:[{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"}],frontMatter:{slug:"job-chaining-vs-fan-out-fan-in",title:"Laravel Workflow: Job Chaining vs. Fan-out/Fan-in",authors:{name:"Richard",title:"Core Team",url:"https://github.com/rmcdaniel",image_url:"https://github.com/rmcdaniel.png",imageURL:"https://github.com/rmcdaniel.png"},tags:["chaining","fan-out","fan-in","batching"]},nextItem:{title:"Waterline: Elegant UI for Laravel Workflows",permalink:"/blog/waterline-ui"}},s={authorsImageUrls:[void 0]},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/9.x/queues#job-chaining"},"Chaining")," is a workflow design pattern that involves the sequential execution of a series of activities, with the output of one activity potentially serving as the input to the next activity in the chain. This pattern is often used to create a linear, step-by-step process for completing a task."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*DOzdRnmC8Sq2w509yK1meg.webp",alt:"chaining"})),(0,i.kt)("p",null,"In contrast, the fan-out/fan-in pattern involves dividing a task into smaller sub-tasks and then combining the results of those sub-tasks to produce the final result. This pattern is often used to parallelize a task and improve its performance by leveraging the power of multiple queue workers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1154/1*g-0m-NWockKX_xbWXEjC1A.webp",alt:"fan-out/fan-in"})),(0,i.kt)("p",null,"There are two phases: fan-out and fan-in."),(0,i.kt)("p",null,"In the fan-out phase, the workflow divides the main task into smaller sub-tasks and assigns each of those sub-tasks to a different activity. In the fan-in phase, the workflow collects the results of the activities and combines them to produce the final result."),(0,i.kt)("p",null,"The below workflow represents a simple example of a fan-out/fan-in pattern in which multiple activities are executed in parallel and their results are then merged together."),(0,i.kt)("p",null,"The workflow divides the task of creating a PDF into activities, with each activity responsible for rendering a single page of the document. Once the individual pages have been rendered, the fan-in phase of the workflow combines the rendered pages into a single PDF document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\BuildPDF;\n\nuse Workflow\\ActivityStub;\nuse Workflow\\Workflow;\n\nclass BuildPDFWorkflow extends Workflow\n{\n    public function execute()\n    {\n        $page1 = ActivityStub::make(ConvertURLActivity::class, 'https://example.com/');\n        $page2 = ActivityStub::make(ConvertURLActivity::class, 'https://example.com/');\n\n        $pages = yield ActivityStub::all([$page1, $page2]);\n\n        $result = yield ActivityStub::make(MergePDFActivity::class, $pages);\n\n        return $result;\n    }\n}\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ConvertURLActivity")," is passed a URL as an argument, and it converts the contents of that URL into a PDF document. Because two separate activities are created, this results in the execution of two instances of ",(0,i.kt)("inlineCode",{parentName:"p"},"ConvertURLActivity")," in parallel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\BuildPDF;\n\nuse Illuminate\\Support\\Facades\\Http;\nuse Workflow\\Activity;\n\nclass ConvertURLActivity extends Activity\n{\n    public function execute($url)\n    {\n        $fileName = uniqid() . '.pdf';\n\n        Http::withHeaders([\n            'Apikey' => 'YOUR-API-KEY-GOES-HERE',\n        ])\n        ->withOptions([\n            'sink' => storage_path($fileName),\n        ])\n        ->post('https://api.cloudmersive.com/convert/web/url/to/pdf', [\n            'Url' => $url,\n        ]);\n\n        return $fileName;\n    }\n}\n")),(0,i.kt)("p",null,"Next, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildPDFWorkflow")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"ActivityStub::all")," to wait for both ",(0,i.kt)("inlineCode",{parentName:"p"},"ConvertURLActivity")," instances to complete. This is an example of the fan-in part of the fan-out/fan-in pattern, as it collects the results of the parallel activities and combines them into a single array of PDF files."),(0,i.kt)("p",null,"Finally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"BuildPDFWorkflow")," executes the",(0,i.kt)("inlineCode",{parentName:"p"},"MergePDFActivity"),", which is passed the array of PDFs that were generated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConvertURLActivity")," instances, and merges them into a single PDF document."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Workflows\\BuildPDF;\n\nuse setasign\\Fpdi\\Fpdi;\nuse Workflow\\Activity;\n\nclass MergePDFActivity extends Activity\n{\n    public function execute($pages)\n    {\n        $fileName = uniqid() . '.pdf';\n\n        $pdf = new Fpdi();\n\n        foreach ($pages as $page) {\n            $pdf->AddPage();\n            $pdf->setSourceFile(storage_path($page));\n            $pdf->useTemplate($pdf->importPage(1));\n        }\n\n        $pdf->Output('F', storage_path($fileName));\n\n        foreach ($pages as $page) {\n            unlink(storage_path($page));\n        }\n\n        return $fileName;\n    }\n}\n")),(0,i.kt)("p",null,"This is what the final PDF looks like\u2026"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/1*A3PKGEk8JptFIxB9IqCh6w.webp",alt:"merged PDF"})),(0,i.kt)("p",null,"Overall, using the fan-out/fan-in pattern in this way can significantly reduce the time it takes to create a PDF document, making the process more efficient and scalable."),(0,i.kt)("p",null,"Thanks for reading!"))}u.isMDXComponent=!0}}]);