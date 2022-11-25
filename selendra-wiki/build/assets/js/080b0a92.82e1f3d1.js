"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),b=o,g=d["".concat(u,".").concat(b)]||d[b]||c[b]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bug bounty","report"],slug:"../../maintain-bug-bounty"},u=void 0,l={unversionedId:"maintain/maintain-bug-bounty",id:"maintain/maintain-bug-bounty",title:"Bug Bounty",description:"An overview of how you can help catch bugs.",source:"@site/../docs/maintain/maintain-bug-bounty.md",sourceDirName:"maintain",slug:"/maintain-bug-bounty",permalink:"/docs/maintain-bug-bounty",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/maintain/maintain-bug-bounty.md",tags:[],version:"current",lastUpdatedBy:"hangsiahong",lastUpdatedAt:1668654411,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"maintain-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bug bounty","report"],slug:"../../maintain-bug-bounty"},sidebar:"docs",previous:{title:"Grants",permalink:"/docs/grants"},next:{title:"Substrate Builders Program",permalink:"/docs/builders-program"}},p={},c=[{value:"Eligibility",id:"eligibility",level:2},{value:"How to report a bug",id:"how-to-report-a-bug",level:2}],d={toc:c};function b(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,a.kt)("a",{parentName:"p",href:"https://selendra.com/security-report"},"instructions on Selendra Security Report webiste"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,a.kt)("admonition",{title:"Bug bounty program scope",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The bug bounty program does ",(0,a.kt)("em",{parentName:"p"},"not")," cover bugs on code bases that are external to or, written on top\nof Selendra, or that use Selendra. To be eligible for the bug bounty program the bug has to be a\npart of the Selendra codebase, this includes protocols that Selendra uses such as AnV, XCM, GRANDPA,\netc."),(0,a.kt)("p",{parentName:"admonition"},"We call on our community and all bug bounty hunters to help identify bugs in Selendra.")),(0,a.kt)("h2",{id:"eligibility"},"Eligibility"),(0,a.kt)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security,\nas well as security of cryptographic primitives, could be eligible for a reward. Please note that\nit's entirely our discretion to decide whether a bug is significant enough to qualify for a reward."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The submission quality will be a significant factor in the level of considered compensation. A\nhigh-quality submission includes explaining how the bug can be reproduced, how it was discovered,\nand otherwise critical details. Please disclose responsibly; disclosure to any third parties\ndisqualifies bug bounty eligibility."),(0,a.kt)("p",{parentName:"admonition"},"Examples:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"An attack that could disrupt the entire network and harm the validity to the network would be\nconsidered a critical threat."),(0,a.kt)("li",{parentName:"ul"},"An attack that would disrupt service to others would be regarded as a high threat."))),(0,a.kt)("admonition",{title:"Responsible investigation and reporting",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Responsible investigation and reporting include, but isn't limited to, the following:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,a.kt)("li",{parentName:"ul"},"Don't defraud or harm Selendra network or its users during your research; you should make a good\nfaith effort not to interrupt or degrade our services."),(0,a.kt)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,a.kt)("li",{parentName:"ul"},"Initially, report the bug only to us and not to anyone else."),(0,a.kt)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,a.kt)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to our users or us. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful."))),(0,a.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,a.kt)("p",null,"Please follow the instructions at\n",(0,a.kt)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}b.isMDXComponent=!0}}]);