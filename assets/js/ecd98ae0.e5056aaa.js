"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[1456],{5882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(4848),r=t(8453);const i={title:"\u26a1\ufe0f Quickstart",sidebar_position:2,slug:"/getting-started-quickstart"},l=void 0,o={id:"Getting-Started/getting-started-quickstart",title:"\u26a1\ufe0f Quickstart",description:"Prerequisites",source:"@site/docs/Getting-Started/getting-started-quickstart.md",sourceDirName:"Getting-Started",slug:"/getting-started-quickstart",permalink:"/getting-started-quickstart",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u26a1\ufe0f Quickstart",sidebar_position:2,slug:"/getting-started-quickstart"},sidebar:"defaultSidebar",previous:{title:"\ud83d\udce6\xa0Installation",permalink:"/getting-started-installation"},next:{title:"\u2757\ufe0f Common Installation Issues",permalink:"/getting-started-common-installation-issues"}},a={},c=[{value:"Prerequisites",id:"b5f154a3a1d242c7bdf57acf0a552732",level:2},{value:"Basic Prompting",id:"67e7cd59d0fa43e3926bdc75134f7472",level:2},{value:"Create the basic prompting project",id:"c029603ddb1f42f5b28df92e58426ab3",level:3},{value:"Run",id:"ef0e8283bfb646f99bbb825462d8cbab",level:3},{value:"Modify the prompt for a different result",id:"dcea9df0cd51434db76717c78b1e9a94",level:3},{value:"Next steps",id:"63b6db6cb571489c86b3ae89051f1a4f",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"b5f154a3a1d242c7bdf57acf0a552732",children:"Prerequisites"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-3100/",children:"Python >=3.10"}),"\xa0and\xa0",(0,s.jsx)(n.a,{href:"https://pypi.org/project/pip/",children:"pip"}),"\xa0or\xa0",(0,s.jsx)(n.a,{href:"https://pipx.pypa.io/stable/installation/",children:"pipx"})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://platform.openai.com/",children:"OpenAI API key"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/getting-started-installation",children:"Langflow installed and running"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"67e7cd59d0fa43e3926bdc75134f7472",children:"Basic Prompting"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"c029603ddb1f42f5b28df92e58426ab3",children:"Create the basic prompting project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["From the Langflow dashboard, click\xa0",(0,s.jsx)(n.strong,{children:"New Project"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8652).A+"",width:"3168",height:"1782"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Select\xa0",(0,s.jsx)(n.strong,{children:"Basic Prompting"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The\xa0",(0,s.jsx)(n.strong,{children:"Basic Prompting"}),"\xa0flow is created."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1529).A+"",width:"2496",height:"1404"})}),"\n",(0,s.jsxs)(n.p,{children:["This flow allows you to chat with the\xa0",(0,s.jsx)(n.strong,{children:"OpenAI"}),"\xa0component through the\xa0",(0,s.jsx)(n.strong,{children:"Prompt"}),"\xa0component."]}),"\n",(0,s.jsxs)(n.p,{children:["Examine the\xa0",(0,s.jsx)(n.strong,{children:"Prompt"}),"\xa0component. The\xa0",(0,s.jsx)(n.strong,{children:"Template"}),"\xa0field instructs the LLM to\xa0",(0,s.jsx)(n.code,{children:"Answer the user as if you were a pirate."}),"\xa0This should be interesting..."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(323).A+"",width:"3168",height:"1782"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To create an environment variable for the\xa0",(0,s.jsx)(n.strong,{children:"OpenAI"}),"\xa0component, in the\xa0",(0,s.jsx)(n.strong,{children:"OpenAI API Key"}),"\xa0field, click the\xa0",(0,s.jsx)(n.strong,{children:"Globe"}),"\xa0button, and then click\xa0",(0,s.jsx)(n.strong,{children:"Add New Variable"}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["In the\xa0",(0,s.jsx)(n.strong,{children:"Variable Name"}),"\xa0field, enter\xa0",(0,s.jsx)(n.code,{children:"openai_api_key"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["In the\xa0",(0,s.jsx)(n.strong,{children:"Value"}),"\xa0field, paste your OpenAI API Key (",(0,s.jsx)(n.code,{children:"sk-..."}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Click\xa0",(0,s.jsx)(n.strong,{children:"Save Variable"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6915).A+"",width:"1824",height:"1026"})}),"\n",(0,s.jsx)(n.h3,{id:"ef0e8283bfb646f99bbb825462d8cbab",children:"Run"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Click the\xa0",(0,s.jsx)(n.strong,{children:"Playground"}),"\xa0button on the control panel (bottom right side of the workspace). This is where you can interact with your AI."]}),"\n",(0,s.jsx)(n.li,{children:"Type a message and press Enter. The bot should respond in a markedly piratical manner!"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"dcea9df0cd51434db76717c78b1e9a94",children:"Modify the prompt for a different result"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["To modify your prompt results, in the\xa0",(0,s.jsx)(n.strong,{children:"Prompt"}),"\xa0template, click the\xa0",(0,s.jsx)(n.strong,{children:"Template"}),"\xa0field. The\xa0",(0,s.jsx)(n.strong,{children:"Edit Prompt"}),"\xa0window opens."]}),"\n",(0,s.jsxs)(n.li,{children:["Change\xa0",(0,s.jsx)(n.code,{children:"Answer the user as if you were a pirate"}),"\xa0to a different character, perhaps\xa0",(0,s.jsx)(n.code,{children:"Answer the user as if you were Hermione Granger."})]}),"\n",(0,s.jsx)(n.li,{children:"Run the workflow again. The response will be markedly different."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"63b6db6cb571489c86b3ae89051f1a4f",children:"Next steps"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Well done! You've built your first prompt in Langflow. \ud83c\udf89"}),"\n",(0,s.jsx)(n.p,{children:"By dragging Langflow components to your workspace, you can create all sorts of interesting behaviors. Here are a couple of examples:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/starter-projects-memory-chatbot",children:"Memory Chatbot"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/starter-projects-blog-writer",children:"Blog Writer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/starter-projects-document-qa",children:"Document QA"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6915:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1390293355-534d14d7781e4df72b01684c44fe3fc6.png"},8652:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/1835734464-6063a7983f539e49880006e4a13258ec.png"},1529:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/487525520-9a8bbf7999efc0aef8ed5d79d783b533.png"},323:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/690736575-30936134356368d20b8ccb974aa4c3ab.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);