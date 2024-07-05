(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["969"],{4165:function(e,t,n){"use strict";n.r(t);var s=n("5893"),r=n("65");function i(e){let t=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",ul:"ul",li:"li",code:"code"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.h1,{id:"faq",children:["FAQ",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#faq",children:"#"})]}),"\n",(0,s.jsxs)(t.h2,{id:"can-i-test-the-native-features-of-react-native-apps",children:["Can I test the native features of React Native apps?",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#can-i-test-the-native-features-of-react-native-apps",children:"#"})]}),"\n",(0,s.jsx)(t.p,{children:"Short answer: no."}),"\n",(0,s.jsx)(t.p,{children:"React Native Testing Library does not provide an entire React Native runtime since that would require running on a physical device\nor iOS simulator/Android emulator to provision the underlying OS and platform APIs."}),"\n",(0,s.jsxs)(t.p,{children:["Instead of using React Native renderer, it simulates only the JavaScript part of its runtime\nusing ",(0,s.jsx)(t.a,{href:"https://reactjs.org/docs/test-renderer.html",target:"_blank",rel:"noopener noreferrer",children:"React Test Renderer"})," while providing queries\nand event APIs (",(0,s.jsx)(t.a,{href:"/docs/api/events/user-event",children:"User Event"}),", ",(0,s.jsx)(t.a,{href:"/docs/api/events/fire-event",children:"Fire Event"}),") that mimicking certain behaviors from the actual runtime."]}),"\n",(0,s.jsxs)(t.p,{children:["You can learn more about our testing environment ",(0,s.jsx)(t.a,{href:"/docs/advanced/testing-env",children:"here"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"This approach has specific benefits and shortfalls. On the positive side:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"it allows testing most of the logic of regular React Native apps"}),"\n",(0,s.jsx)(t.li,{children:"it allows running tests on any OS supported by Jest or other test runners, e.g., on CI"}),"\n",(0,s.jsx)(t.li,{children:"it uses much less resources than full runtime simulation"}),"\n",(0,s.jsx)(t.li,{children:"you can use Jest fake timers"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"On the negative side:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"you cannot test native features"}),"\n",(0,s.jsx)(t.li,{children:"it might not perfectly simulate certain JavaScript features, but we are working on it"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/api/events/user-event",children:"User Event interactions"})," solve some of the simulation issues, as they offer more realistic event handling than the basic ",(0,s.jsx)(t.a,{href:"/docs/api/events/fire-event",children:"Fire Event API"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"should-i-usemigrate-to-screen-queries",children:["Should I use/migrate to ",(0,s.jsx)(t.code,{children:"screen"})," queries?",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#should-i-usemigrate-to-screen-queries",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["There is no need to migrate existing test code to use ",(0,s.jsx)(t.code,{children:"screen"}),"-bases queries. You can still use\nqueries and other functions returned by ",(0,s.jsx)(t.code,{children:"render"}),". The ",(0,s.jsx)(t.code,{children:"screen"})," object captures the latest ",(0,s.jsx)(t.code,{children:"render"})," result."]}),"\n",(0,s.jsxs)(t.p,{children:["For new code, you are encouraged to use ",(0,s.jsx)(t.code,{children:"screen"})," as there are some good reasons for that, which are described in ",(0,s.jsx)(t.a,{href:"https://kentcdodds.com/blog/common-mistakes-with-react-testing-library#not-using-screen",target:"_blank",rel:"noopener noreferrer",children:"this article"})," by Kent C. Dodds."]}),"\n",(0,s.jsxs)(t.h2,{id:"should-i-usemigrate-to-user-event-interactions",children:["Should I use/migrate to User Event interactions?",(0,s.jsx)(t.a,{className:"header-anchor","aria-hidden":"true",href:"#should-i-usemigrate-to-user-event-interactions",children:"#"})]}),"\n",(0,s.jsxs)(t.p,{children:["We encourage you to migrate existing tests to use the ",(0,s.jsx)(t.a,{href:"/docs/api/events/user-event",children:"User Event interactions"}),", which offer more realistic event handling than the basic ",(0,s.jsx)(t.a,{href:"/docs/api/events/fire-event",children:"Fire Event API"}),". Hence, it will provide more confidence in the quality of your code."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}t.default=a,a.__RSPRESS_PAGE_META={},a.__RSPRESS_PAGE_META["12.x%2Fdocs%2Fguides%2Ffaq.mdx"]={toc:[{text:"Can I test the native features of React Native apps?",id:"can-i-test-the-native-features-of-react-native-apps",depth:2},{text:"Should I use/migrate to `screen` queries?",id:"should-i-usemigrate-to-screen-queries",depth:2},{text:"Should I use/migrate to User Event interactions?",id:"should-i-usemigrate-to-user-event-interactions",depth:2}],title:"FAQ",frontmatter:{}}}}]);