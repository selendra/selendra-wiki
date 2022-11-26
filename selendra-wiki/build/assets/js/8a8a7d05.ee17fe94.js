"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3262],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>u});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return t?n.createElement(m,i(i({ref:a},h),{},{components:t})):n.createElement(m,i({ref:a},h))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4204:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},s=void 0,c={unversionedId:"build/build-parachains",id:"build/build-parachains",title:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",source:"@site/../docs/build/build-parachains.md",sourceDirName:"build",slug:"/build-pdk",permalink:"/docs/build-pdk",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/build/build-parachains.md",tags:[],version:"current",frontMatter:{id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},sidebar:"docs",previous:{title:"Builders Starter's Guide",permalink:"/docs/build-build-with-selendra"},next:{title:"Decentralized Storage",permalink:"/docs/build-storage"}},h={},p=[{value:"Your Go-To Overview for Developing a Parachain",id:"your-go-to-overview-for-developing-a-parachain",level:3},{value:"Why Create a Parachain?",id:"why-create-a-parachain",level:3},{value:"What are the Benefits of Deploying a Parachain?",id:"what-are-the-benefits-of-deploying-a-parachain",level:3},{value:"Shared Security (Pooled Security)",id:"shared-security-pooled-security",level:4},{value:"On-Chain Governance (Thought-through Governance)",id:"on-chain-governance-thought-through-governance",level:4},{value:"Scalability",id:"scalability",level:4},{value:"Interoperability",id:"interoperability",level:4},{value:"Things to Consider",id:"things-to-consider",level:2},{value:"Para-nomics",id:"para-nomics",level:3},{value:"Digital Nation States",id:"digital-nation-states",level:4},{value:"Connecting Digital Economies",id:"connecting-digital-economies",level:4},{value:"Para-objects",id:"para-objects",level:3},{value:"Migration",id:"migration",level:3},{value:"Implement a Parachain",id:"implement-a-parachain",level:2},{value:"Parachain Development Kit (PDK)",id:"parachain-development-kit-pdk",level:3},{value:"Key Components",id:"key-components",level:4}],d={toc:p};function u(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"your-go-to-overview-for-developing-a-parachain"},"Your Go-To Overview for Developing a Parachain"),(0,r.kt)("p",null,"This guide will cover the motivation to build a parachain or parathread, the tools available to\nfacilitate this, the steps to test, and finally, how to launch your network on\nSelendra ."),(0,r.kt)("h3",{id:"why-create-a-parachain"},"Why Create a Parachain?"),(0,r.kt)("p",null,"Parachains are connected to and secured by the Relay Chain. They benefit from the ",(0,r.kt)("em",{parentName:"p"},"pooled security"),",\n",(0,r.kt)("em",{parentName:"p"},"thought-through governance"),", and overall ",(0,r.kt)("em",{parentName:"p"},"scalability")," of the heterogeneous sharding approach of\nthe network. Creating a parachain can be seen as creating a ",(0,r.kt)("strong",{parentName:"p"},"Layer-1 blockchain"),", which has its\nown logic and runs in parallel within the\nSelendra ecosystem."),(0,r.kt)("p",null,"Developers can focus on creating state-of-the-art chains that take advantage of\nSelendra's next-generation approach. Some\nexamples of what a parachain could be are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DeFi (Decentralized Finance) Applications"),(0,r.kt)("li",{parentName:"ul"},"Digital Wallets"),(0,r.kt)("li",{parentName:"ul"},"IoT (Internet of Things) Applications"),(0,r.kt)("li",{parentName:"ul"},"Gaming"),(0,r.kt)("li",{parentName:"ul"},"Web 3.0 Infrastructure")),(0,r.kt)("p",null,"and more."),(0,r.kt)("p",null,"Selendra aims to be a bet against blockchain maximalism, where the success of Selendra's\nheterogeneous multi-chain approach will play a key part in the overall advancement of Web 3.0 and\ndecentralized systems. As a result, Selendra\u2019s parachain model was designed with the belief that the\ninternet of the future will have many different types of blockchains working together."),(0,r.kt)("h3",{id:"what-are-the-benefits-of-deploying-a-parachain"},"What are the Benefits of Deploying a Parachain?"),(0,r.kt)("p",null,"The parachain model attempts to alleviate five key ",(0,r.kt)("em",{parentName:"p"},"build")," failures of present technology stacks, as\ndescribed in the ",(0,r.kt)("a",{parentName:"p",href:"https://selendra.org/SelendraPaper.pdf"},"Selendra Whitepaper"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Scalability"),": How much is spent on resources and will the network be subject to bottlenecks?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Isolatability"),": Are the needs of many accounted for under the same framework?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Developability"),": Is the system tooling, system support, and overall system integrity\ndependable?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Governance"),": Can the network remain flexible to evolve and adapt over time? Can decisions be\nmade with sufficient inclusivity, legitimacy, and transparency to provide effective leadership of\na decentralised system?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Applicability"),": Does the technology address a burning need on its own? Is other \u201cmiddleware\u201d\nrequired to bridge the gap to actual applications?")),(0,r.kt)("h4",{id:"shared-security-pooled-security"},(0,r.kt)("a",{parentName:"h4",href:"/docs/learn-security"},"Shared Security")," (Pooled Security)"),(0,r.kt)("p",null,"Parachains can lease the security of the\nSelendra network by bonding\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-SEL"},"SEL")," for a parachain\nslot. This means that the social costs of building a community around your project and convincing\nvalidators to participate in your network security are reduced.\nSelendra has strong security, and\ndecentralised application projects wishing to benefit from this security would want to become a\nparachain to share in that pooled security."),(0,r.kt)("h4",{id:"on-chain-governance-thought-through-governance"},(0,r.kt)("a",{parentName:"h4",href:"/docs/learn-governance"},"On-Chain Governance")," (Thought-through Governance)"),(0,r.kt)("p",null,"Most governance systems in blockchains use an off-chain governance mechanism. Selendra's on-chain\ngovernance encourages maximum participation of token holders and is frictionless and transparent. It\nalso enables ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"forkless upgrades"),"."),(0,r.kt)("h4",{id:"scalability"},"Scalability"),(0,r.kt)("p",null,"The sharded multichain network approach allows for what is essentially parallel computation\n(processing power) that can process several transactions in parallel. Isolated blockchains are often\nfaced with the network constraint of processing transactions in sequence, causing bottlenecks."),(0,r.kt)("h4",{id:"interoperability"},"Interoperability"),(0,r.kt)("p",null,"Any decentralised application or chain that wants to enable trustless messaging to other parachains\nalready connected to Selendra would want to\nbecome a parachain. Interoperability between sovereign chains involves certain constraints and\ncomplex protocols to enable across a wide breadth of chains."),(0,r.kt)("p",null,"With Selendra, you will get this feature out\nof the box if you build your application as a parachain. The ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM format"),"\nallows any parachains to communicate by passing messages between them. Furthermore, as bridges to\nother chains are connected (such as those to Bitcoin or Ethereum)\nSelendra's parachains will be able to\ncommunicate with these as well."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Despite the benefits of becoming a parachain, developers should be conscious of the challenges in\nbecoming a parachain, and whether building a blockchain with an end goal of becoming a parachain is\na viable one for their project.")),(0,r.kt)("p",null,"On Selendra, you are able to put your\nblockchain\u2019s latest block head onto the relay chain. As a parachain, the blocks you submit are\nverified by validators with a Wasm runtime, which can be stored on the relay chain. You also get the\nability to communicate with other parachains using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," format: an\nabstract message passing system. Message passing is tracked on the relay chain - as such, you can\nprove the delivery of messages and facilitate trustless interactions."),(0,r.kt)("p",null,"As you can place your blockchain\u2019s latest block head, you can achieve deterministic finalization for\nyour chain. The hard part of reaching finalization for blockchains tends to be the consensus, where,\nin the parachain model, a blockchain can offload consensus to the overall shared network, and focus\non block production. Since the validators have the Wasm runtime for all the parachains, your\nparachain shares the security of the validator pool with everyone on the relay chain."),(0,r.kt)("p",null,"Any validator in the validator pool can help validate your blockchain."),(0,r.kt)("h2",{id:"things-to-consider"},"Things to Consider"),(0,r.kt)("h3",{id:"para-nomics"},(0,r.kt)("a",{parentName:"h3",href:"/docs/learn-parachains#parachain-economies"},"Para-nomics")),(0,r.kt)("h4",{id:"digital-nation-states"},"Digital Nation States"),(0,r.kt)("p",null,"Parachains can be seen as autonomous agents; networks that act as decentralised digital nation\nstates. Parachains have their own communities, rules, economies, governance, treasuries, and\nrelationships with external chains. As a result, the economic policies within parachain ecosystems\nare subject to the developers and overall community of that parachain ecosystem; there isn't\nnecessarily a go-to economic model a parachain should follow."),(0,r.kt)("p",null,"Moreover, ",(0,r.kt)("em",{parentName:"p"},"becoming a parachain")," has an opportunity cost associated. Ideally, you can increase the\nvalue of the network by participating in the parachain selection process, and this should serve as a\ngood return on investment."),(0,r.kt)("h4",{id:"connecting-digital-economies"},"Connecting Digital Economies"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," act as network maintainers and maintain a full node of a\nparachain. They can be incentivized with a native token payout from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transaction fees collected"),(0,r.kt)("li",{parentName:"ul"},"Parathread token sponsorship",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Blocks are naturally produced when a parathread bid is less than the native token payout.")))),(0,r.kt)("h3",{id:"para-objects"},"Para-objects"),(0,r.kt)("admonition",{title:"The Relay Chain can host arbitrary state machines, not just blockchains.",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Selendra network will encourage the\nconnection and interoperability between different ",(0,r.kt)("em",{parentName:"p"},"para-objects"),"."),(0,r.kt)("p",{parentName:"admonition"},"Here, para-objects are referring to objects on the network that operate in parallel, generally,\nparallelizable objects.")),(0,r.kt)("p",null,"These could be in the form of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"System level chains (permanent chains): ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-auction"},"leased slots"),",\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-parathreads"},"parathread pool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/learn-bridges"},"Bridge")," Hubs"),(0,r.kt)("li",{parentName:"ul"},"Nested Relay Chains: ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-launch##selendra2.0"},"Selendra 2.0"))),(0,r.kt)("h3",{id:"migration"},"Migration"),(0,r.kt)("p",null,'Projects that are already functioning as "solochains" or in isolated environments may be interested\nin migrating onto Selendra as a para-object.\nWhile the parachain model has its benefits, it may not be the go-to strategy for some projects.'),(0,r.kt)("p",null,"As a path for migration onto Selendra, it may\nbe more viable to migrate to one of the chains in one of the reserved slots."),(0,r.kt)("p",null,"For instance, there are currently options for ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contract deployment"),"\non Selendra through the networks that have secured a slot in the latest slot auctions."),(0,r.kt)("h2",{id:"implement-a-parachain"},"Implement a Parachain"),(0,r.kt)("p",null,"The Parachain Implementer's Guide is a significant work in progress and maintained by Selendra.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/selendra/selendra/"},"Selendra repository"),"."),(0,r.kt)("h3",{id:"parachain-development-kit-pdk"},"Parachain Development Kit (PDK)"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"PDK")," is a set of tools that allows developers to easily create a parachain. In practice, the\nPDK will consist of the following key components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"State transition function")," : a way for your application to move from one state to another state."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Collator node")," : a type of peer-to-peer node in the Selendra")),(0,r.kt)("h4",{id:"key-components"},"Key Components"),(0,r.kt)("p",null,"The state transition function (STF) can be an abstract way for an application to go from one state\nto another state. The only constraint that Selendra places on this STF is that it must be easily verifiable -- usually\nthrough what we call a ",(0,r.kt)("em",{parentName:"p"},"witness")," or ",(0,r.kt)("em",{parentName:"p"},"proof"),". It must be so because the Relay Chain validators will\nneed to check that each state it receives from the collator node is correct without actually running\nthrough the entire computation. Some examples of these proofs include the Proof-of-Validity blocks\nor zk-SNARKs, which require less computational resources to verify than they do to generate. The\nverification asymmetry in the proof generation of the STF is one of the integral insights that\nallows Selendra to scale while keeping\nhigh-security guarantees."),(0,r.kt)("p",null,"A collator node is one of the types of network maintainers in the protocol. They are responsible for\n",(0,r.kt)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned from the\niteration of the state transition function. They must remain online to keep track of the state and\nalso of the XCMP messages that it will route between itself and other parachains. Collator nodes are\nresponsible for passing the succinct proofs to the relay chain's validators and tracking the latest\nblocks from the relay chain. In essence, a collator node also acts as a light client for the relay\nchain. For more on collator nodes, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collator page"),"."))}u.isMDXComponent=!0}}]);