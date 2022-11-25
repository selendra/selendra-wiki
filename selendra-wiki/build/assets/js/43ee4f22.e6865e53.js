"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4672],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=r,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"build-guide",title:"Builders Starter's Guide",sidebar_label:"Builders Starter's Guide",description:"Start building with Selendra.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-build-with-selendra"},s=void 0,c={unversionedId:"build/build-guide",id:"build/build-guide",title:"Builders Starter's Guide",description:"Start building with Selendra.",source:"@site/../docs/build/build-guide.md",sourceDirName:"build",slug:"/build-build-with-selendra",permalink:"/docs/build-build-with-selendra",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/build/build-guide.md",tags:[],version:"current",frontMatter:{id:"build-guide",title:"Builders Starter's Guide",sidebar_label:"Builders Starter's Guide",description:"Start building with Selendra.",keywords:["build","how to build","develop","parachain","smart contract"],slug:"../build-build-with-selendra"},sidebar:"docs",previous:{title:"Builder's Guides",permalink:"/docs/build-index"},next:{title:"Parachain Development",permalink:"/docs/build-pdk"}},d={},u=[{value:"Selendra Ecosystem Networks",id:"selendra-ecosystem-networks",level:3},{value:"What is the difference between building a parachain, a parathread, or a smart contract?",id:"what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract",level:2},{value:"Parachains &amp; Parathreads",id:"parachains--parathreads",level:3},{value:"Smart Contracts",id:"smart-contracts",level:3},{value:"Building a parachain or parathread",id:"building-a-parachain-or-parathread",level:3},{value:"Building a smart contract",id:"building-a-smart-contract",level:3}],h={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Selendra is a blockchain protocol with two goals: providing ",(0,i.kt)("strong",{parentName:"p"},"shared security")," among all connected\nparachains and allowing all connected chains to ",(0,i.kt)("strong",{parentName:"p"},"interoperate")," by using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM"),". With the advent of\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk##parachain-development-kit-(pdk)%3E"},"PDKs")," like Parity Substrate and Cumulus,\nthe time it takes to develop and launch a new chain has dropped significantly. While before it would\ntake years to launch a new chain, now it may only take weeks or even days."),(0,i.kt)("p",null,"This guide will walk you through the steps you can take today to get started building your vision\nwith Selendra. It will explain the difference\nbetween a parachain and a smart contract (and why one may be better suited for your application over\nthe other)."),(0,i.kt)("h3",{id:"selendra-ecosystem-networks"},"Selendra Ecosystem Networks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mainnet: ",(0,i.kt)("strong",{parentName:"li"},"Selendra")),(0,i.kt)("li",{parentName:"ul"},"Official testnets:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Selendra Testnet")," - Functionality equal to the current Selendra mainnet, with possible next-generation\ntesting of features from time to time that will eventually migrate onto Selendra. Perma-testnet\n(is not reset back to genesis block).")))),(0,i.kt)("p",null,"Selendra mainnet has been running since May 2020 and has ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-implementations"},"implementations in various programming languages"),"\nranging from Rust to JavaScript. Currently, the leading implementation is built in Rust and built using\nthe Substrate framework."),(0,i.kt)("p",null,"Tooling is rapidly evolving to interact with the network; there are so many ways to get started!"),(0,i.kt)("p",null,"But before you jump head-first into the code, you should consider the ",(0,i.kt)("em",{parentName:"p"},"kind")," of decentralized\napplication you want to make and understand the different paradigms available to developers who want\nto build on Selendra."),(0,i.kt)("h2",{id:"what-is-the-difference-between-building-a-parachain-a-parathread-or-a-smart-contract"},"What is the difference between building a parachain, a parathread, or a smart contract?"),(0,i.kt)("p",null,"Selendra provides several ways for you to\ndeploy your application: as a smart contract on an existing parachain, as your own parachain, or as\na parathread. There are trade-offs when working with each of these and reading this section will\nhelp you understand them."),(0,i.kt)("h3",{id:"parachains--parathreads"},"Parachains & Parathreads"),(0,i.kt)("p",null,"Parachains are ",(0,i.kt)("em",{parentName:"p"},"parallel")," chains containing their own runtime logic and benefit from the shared\nsecurity and the cross-chain messaging provided by the Selendra Relay Chain. Parachains permit a high degree of flexibility and customization but require\nmore effort to create and maintain over time."),(0,i.kt)("p",null,"Parathreads are like parachains and enable the developer to have lower-level control of the logic of\ntheir application. The main difference between the two is economic since parathreads will be much\nless expensive to secure than a parachain. The lower costs of parathreads are due to the fact that\nparathreads will only produce a block when they need to, unlike parachains, which have secured a\nslot to produce a block at every block of the Relay Chain. When building a parathread, you will use\nthe same tools (like PDKs) and you get all of the benefits of building a parachain, without the\ndrawback of the cost."),(0,i.kt)("p",null,"Parachains grant the creators more space to build the monetary system and other aspects of the chain\nfrom the ground up. They will allow for more succinct and efficient execution of complex logic than\ncould ever be offered by a smart contract platform. Parachains also offer more flexibility in the\nform of governance and can perform complete upgrades in a less controversial way than the current\nprocess of hard-forks."),(0,i.kt)("p",null,"Some examples of features you can have on a parachain or parathread:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Custom fee structure (for example, pay a flat fee for transactions or pay per byte)."),(0,i.kt)("li",{parentName:"ul"},"Custom monetary policy for the native token and local economy."),(0,i.kt)("li",{parentName:"ul"},"Treasury to be funded through transitions in your state function."),(0,i.kt)("li",{parentName:"ul"},"A governance mechanism that could manage a DAO that is responsible for allocating your on-chain\ntreasury.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"build 1",src:a(6727).Z,width:"1296",height:"907"})),(0,i.kt)("p",null,"Parachains open possibilities to construct complex runtime logic that would be too expensive to\nexecute with smart contracts. However, unlike smart contracts, parachains lack a mandatory gas\nmetering system entirely and could potentially be vulnerable to bugs that cause infinite loops\n(something that is prevented by design in smart contracts). This vulnerability is mitigated by the\nweight system that is implemented in Substrate -- although it places more of a burden on the\ndeveloper of the parachain to properly perform benchmarks."),(0,i.kt)("p",null,"You may also decide to harness a combination of parachain, parathread, and smart contract. If you\nhave certain logic that requires loops and it cannot be removed, use the native parachain runtime to\nhandle all complex logic and the smart contract to call iteration. If you require off-chain data\nfrom an oracle, you may want to use a parathread as an oracle feed that only triggers once every 24\nhours (this makes the most sense if the data is useful to other players in the\nSelendra ecosystem too)."),(0,i.kt)("p",null,"Most likely you\u2019ve already realized that your application is better suited to be one or the other\n(or a hybrid of them both), but if you need a quick recap to digest the information, you can use\nthis comparison chart as a cheat sheet:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"build 2",src:a(8342).Z,width:"1600",height:"796"})),(0,i.kt)("admonition",{title:"The image above does not include parathreads",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As we mentioned before, all the benefits of parachains apply just as well to parathreads.\nParathreads, however, ",(0,i.kt)("em",{parentName:"p"},"are"),' cheaper to deploy and maintain. So if they had a column on the table\nabove, it would look like the parachain column with "Ease of deployment" and "Maintenance overhead"\nchanged to ',(0,i.kt)("inlineCode",{parentName:"p"},"+"),".")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,i.kt)("p",null,"A smart contract is simply some code that exists at an address on a chain and is callable by\nexternal actors. The key part is that you actually have to put the code on chain before anyone can\nstart executing it!"),(0,i.kt)("p",null,"Deploying your smart contract on chain will vary slightly for whichever specific parachain you will\nuse, but generally you will send a special transaction that will create the smart contract on the\nledger. You will likely need to pay an associated fee for the initialization logic and any storage\nthat your contract consumes."),(0,i.kt)("p",null,"On Selendra, there will be parachains that act\nas smart contract platforms. Smart contracts are executable programs that exist on only a single\nchain and are limited in complexity. Because they exist on a single chain, they can have smooth\ninteroperability with other smart contracts on the same chain. However, they will always be\nconstrained and limited by the inherent characteristics of their host chain."),(0,i.kt)("p",null,"If there is a need to have a large amount of control over the design and features of your\napplication, a parachain is a better choice. Keep in mind, smart contracts can be used as a testing\nground before later being turned into full-fledged parachains. Smart contract platforms will usually\nhave convenient tooling like IDEs to facilitate quick iterations. A smart contract MVP could be\ncreated to gauge user interest before putting in the work to build out a parachain."),(0,i.kt)("p",null,"Each platform will have a different way of paying for and maintaining the state of your smart\ncontract. The different patterns you may see for paying for your smart contract include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A transaction fee associated with deploying each transaction."),(0,i.kt)("li",{parentName:"ul"},"A subscription model in which you pay some chain entity routinely for the usage of the platform."),(0,i.kt)("li",{parentName:"ul"},"An access token model for which you need to hold a threshold of native tokens to use the platform\n(EOS has something similar). Storage rent."),(0,i.kt)("li",{parentName:"ul"},"Free trial or developer promotion."),(0,i.kt)("li",{parentName:"ul"},"Most smart contract platforms use some form of gas to limit the number of operations a user can\nperform. Users will be required to pay for the gas upfront and will be refunded for what they\ndon\u2019t use.")),(0,i.kt)("p",null,"You will need to consider the storage and complexity of your smart contract to ensure that gas usage\nstays within reasonable bounds. Storage will likely be expensive for whichever smart contract\nplatform you use, so it is necessary to keep as much data off-chain as possible. You may consider\nusing the listed options on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-storage"},"decentralized storage")," page to keep the data and\nsubmitting only the content address on chain."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"building-a-parachain-or-parathread"},"Building a parachain or parathread"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-pdk"},"parachain development guide")," for how to get started on building\na parachain or parathread."),(0,i.kt)("h3",{id:"building-a-smart-contract"},"Building a smart contract"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contracts guide")," for how to get started on building\na smart contract."))}p.isMDXComponent=!0},6727:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-1-d7798061da46f4543232af5e64d9dc5a.png"},8342:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-2-0b8f4288c205d78acc331e706d3462b4.png"}}]);