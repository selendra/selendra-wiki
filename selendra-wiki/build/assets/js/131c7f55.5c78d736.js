"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9323],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=n,m=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return t?r.createElement(m,i(i({ref:a},h),{},{components:t})):r.createElement(m,i({ref:a},h))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3928:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(7462),n=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture",description:"Learn about the key components to Polkadot's Architecture.",keywords:["polkadot","components","architecture"],slug:"../learn-architecture"},l=void 0,c={unversionedId:"learn/learn-architecture",id:"learn/learn-architecture",title:"Architecture",description:"Learn about the key components to Polkadot's Architecture.",source:"@site/../docs/learn/learn-architecture.md",sourceDirName:"learn",slug:"/learn-architecture",permalink:"/docs/learn-architecture",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/learn/learn-architecture.md",tags:[],version:"current",frontMatter:{id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture",description:"Learn about the key components to Polkadot's Architecture.",keywords:["polkadot","components","architecture"],slug:"../learn-architecture"},sidebar:"docs",previous:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"},next:{title:"Collator",permalink:"/docs/learn-collator"}},h={},d=[{value:"Relay Chain",id:"relay-chain",level:2},{value:"Parachain and Parathread Slots",id:"parachain-and-parathread-slots",level:2},{value:"Shared Security",id:"shared-security",level:3},{value:"Interoperability",id:"interoperability",level:2},{value:"XCM",id:"xcm",level:3},{value:"Bridges",id:"bridges",level:3},{value:"Validators",id:"validators",level:2},{value:"Nominators",id:"nominators",level:2},{value:"Collators",id:"collators",level:2},{value:"Whiteboard Series",id:"whiteboard-series",level:2}],p={toc:d};function u(e){var a=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot is a heterogeneous multichain with shared security and interoperability."),(0,o.kt)("h1",{id:"components"},"Components"),(0,o.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,o.kt)("p",null,"The Relay Chain is the central chain of Polkadot. All validators of Polkadot are staked on the Relay\nChain in SEL and validate for the Relay Chain. The Relay Chain is composed of a relatively small\nnumber of transaction types that include ways to interact with the governance mechanism, parachain\nauctions, and participating in NPoS. The Relay Chain has deliberately minimal functionality - for\ninstance, smart contracts are not supported. The main responsibility is to coordinate the system as\na whole, including parachains. Other specific work is delegated to the parachains, which have\ndifferent implementations and features."),(0,o.kt)("h2",{id:"parachain-and-parathread-slots"},(0,o.kt)("a",{parentName:"h2",href:"/docs/learn-parachains"},"Parachain")," and ",(0,o.kt)("a",{parentName:"h2",href:"/docs/learn-parathreads"},"Parathread")," Slots"),(0,o.kt)("p",null,"Polkadot can support a number of execution slots. These slots are like cores on a computer's\nprocessor (a modern laptop's processor may have eight cores, for example). Each one of these cores\ncan run one process at a time. Polkadot allows these slots using two subscription models: parachains\nand parathreads. Parachains have a dedicated slot (core) for their chain and are like a process that\nruns constantly. Parathreads share slots amongst a group, and are thus more like processes that need\nto be woken up and run less frequently."),(0,o.kt)("p",null,"Most of the computation that happens across the Polkadot network as a whole will be delegated to\nspecific parachain or parathread implementations that handle various use cases. Polkadot places no\nconstraints over what parachains can do besides that they must be able to generate a proof that can\nbe validated by the validators assigned to the parachain. This proof verifies the state transition\nof the parachain. Some parachains may be specific to a particular application, others may focus on\nspecific features like smart contracts, privacy, or scalability ","\u2014"," still, others might be\nexperimental architectures that are not necessarily blockchain in nature."),(0,o.kt)("p",null,"Polkadot provides many ways to secure a slot for a parachain for a particular length of time.\nParathreads are part of a pool that shares slots and must-win auctions for individual blocks.\nParathreads and parachains have the same API; their difference is economic. Parachains will have to\nreserve SEL for the duration of their slot lease; parathreads will pay on a per-block basis.\nParathreads can become parachains, and vice-versa."),(0,o.kt)("h3",{id:"shared-security"},(0,o.kt)("a",{parentName:"h3",href:"/docs/learn-security"},"Shared Security")),(0,o.kt)("p",null,"Parachains connected to the Selendra Relay Chain all share in the security of the Relay Chain.\nPolkadot has a shared state between the Relay Chain and all of the connected parachains. If the\nRelay Chain must revert for any reason, then all of the parachains would also revert. This is to\nensure that the validity of the entire system can persist and no individual part is corruptible."),(0,o.kt)("p",null,"The shared state ensures that the trust assumptions when using Polkadot parachains are only those of\nthe Relay Chain validator set and no other. Since the validator set on the Relay Chain is expected\nto be secure with a large amount of stake put up to back it, parachains should benefit from this\nsecurity."),(0,o.kt)("h2",{id:"interoperability"},"Interoperability"),(0,o.kt)("h3",{id:"xcm"},(0,o.kt)("a",{parentName:"h3",href:"learn-xcm"},"XCM")),(0,o.kt)("p",null,"XCM, short for cross-consensus message, is a format and not a protocol. The format does not assume\nanything about the receiver or senders consensus mechanism, it only cares about the format in which\nthe messages must be structured in. The XCM format is how parachains will be able to communicate\nwith one another. Different from XCMP, which is short for cross-chain messaging protocol, XCM is\nwhat gets delivered, and XCMP is the delivery mechanism. The best way to learn more about XCM is by\nreading the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"specification"),"."),(0,o.kt)("h3",{id:"bridges"},(0,o.kt)("a",{parentName:"h3",href:"/docs/learn-bridges"},"Bridges")),(0,o.kt)("p",null,"A blockchain ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#bridge"},"bridge")," is a connection that allows for arbitrary data\nto transfer from one network to another. These chains are interoperable through the bridge but can\nexist as standalone chains with different protocols, rules, and governance models. In Polkadot,\nbridges connect to the Relay Chain and are secured through the Polkadot consensus mechanism,\nmaintained by ",(0,o.kt)("a",{parentName:"p",href:"#collators"},"collators"),"."),(0,o.kt)("p",null,"Polkadot uses bridges to bridge the future of Web 3.0, as bridges are fundamental to Polkadot's\ninteroperable architecture by acting as a ","[secure and robust]"," communication channel for chains in\nisolation."),(0,o.kt)("h1",{id:"main-actors"},"Main Actors"),(0,o.kt)("h2",{id:"validators"},"Validators"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#validator"},"Validators"),", if elected to the validator set, produce blocks on\nthe Relay Chain. They also accept proofs of valid state transition from collators. In return, they\nwill receive staking rewards."),(0,o.kt)("h2",{id:"nominators"},"Nominators"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#nominator"},"Nominators")," bond their stake to particular validators in order to\nhelp them get into the active validator set and thus produce blocks for the chain. In return,\nnominators are generally rewarded with a portion of the staking rewards from that validator."),(0,o.kt)("h2",{id:"collators"},"Collators"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#collator"},"Collators")," are full nodes on both a parachain and the Relay Chain.\nThey collect parachain transactions and produce state transition proofs for the validators on the\nRelay Chain. They can also send and receive messages from other parachains using XCMP."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"whiteboard-series"},"Whiteboard Series"),(0,o.kt)("p",null,"For a video overview of the architecture of Polkadot watch the video below for the whiteboard\ninterview with W3F researcher Alistair Stewart:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xBfC6uTjvbM",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}u.isMDXComponent=!0}}]);