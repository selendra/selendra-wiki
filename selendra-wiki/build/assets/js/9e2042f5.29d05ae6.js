"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5651],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>p});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=o,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||r;return t?n.createElement(m,l(l({ref:a},d),{},{components:t})):n.createElement(m,l({ref:a},d))}));function p(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9476:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),l=["components"],i={id:"learn-collator",title:"Collator",sidebar_label:"Collator",description:"Learn about how collators maintain the network.",keywords:["collator","maintain","full node","block candidate"],slug:"../learn-collator"},s=void 0,c={unversionedId:"learn/learn-collator",id:"learn/learn-collator",title:"Collator",description:"Learn about how collators maintain the network.",source:"@site/../docs/learn/learn-collator.md",sourceDirName:"learn",slug:"/learn-collator",permalink:"/docs/learn-collator",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/learn/learn-collator.md",tags:[],version:"current",frontMatter:{id:"learn-collator",title:"Collator",sidebar_label:"Collator",description:"Learn about how collators maintain the network.",keywords:["collator","maintain","full node","block candidate"],slug:"../learn-collator"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/learn-architecture"},next:{title:"Consensus",permalink:"/docs/learn-consensus"}},d={},h=[{value:"XCM",id:"xcm",level:2},{value:"Taking the Case for One Parachain",id:"taking-the-case-for-one-parachain",level:2},{value:"Collators in the Wild",id:"collators-in-the-wild",level:2},{value:"Guides and Tools",id:"guides-and-tools",level:2}],u={toc:h};function p(e){var a=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collators maintain parachains by collecting parachain transactions from users and producing state\ntransition proofs for Relay Chain validators. In other words, collators maintain parachains by\naggregating parachain transactions into parachain block candidates and producing state transition\nproofs for validators based on those blocks."),(0,r.kt)("p",null,"Collators maintain a full node for the Relay Chain and a full node for their particular parachain;\nmeaning they retain all necessary information to be able to author new blocks and execute\ntransactions in much the same way as miners do on current PoW blockchains. Under normal\ncircumstances, they will collate and execute transactions to create an unsealed block and provide\nit, together with a proof of state transition, to one or more validators responsible for proposing a\nparachain block."),(0,r.kt)("p",null,"Unlike validators, collator nodes do not secure the network. If a parachain block is invalid, it\nwill get rejected by validators. Therefore the assumption that having more collators is better or\nmore secure is not correct. On the contrary, too many collators may slow down the network. The only\nnefarious power collators have is transaction censorship. To prevent censorship, a parachain only\nneeds to ensure that there exist some neutral collators - but not necessarily a majority.\nTheoretically, the censorship problem is solved with having just one honest collator."),(0,r.kt)("h2",{id:"xcm"},"XCM"),(0,r.kt)("p",null,"Collators are a key element of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM (Cross-Consensus Message Passing Format)"),". By\nbeing full nodes of the Relay Chain, they are all aware of each other as peers. This makes it\npossible for them to send messages from parachain A to parachain B."),(0,r.kt)("h2",{id:"taking-the-case-for-one-parachain"},"Taking the Case for One Parachain"),(0,r.kt)("p",null,"A start of a new block candidate is initiated with a block creation time. The collator aggregates\nall new transactions at the end of the process. When doing so, the collator signs the ",(0,r.kt)("em",{parentName:"p"},"parachain\nblock candidate")," and produces state transition proofs, which are a summary of the final account\nbalances caused by the transactions in the candidate block. The collator relays the candidate block\nand state transition proofs to the validators on-chain. The validators verify the transactions\nwithin the parachain block candidate. Upon verification, and if all is well, the validator shares\nthe candidate block with the Relay Chain."),(0,r.kt)("p",null,"Parachain block candidates are collected together and a ",(0,r.kt)("em",{parentName:"p"},"Relay Chain block candidate")," is produced."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"parachain candidate block diagram",src:t(8409).Z,width:"413",height:"298"})),(0,r.kt)("p",null,"The validators on the network will try to reach a consensus on the Relay Chain block candidate. Upon\nreaching consensus, the now validated Relay Chain block candidate is shared with the validators and\ncollators, and the process repeats for new transactions. A collator cannot continue building blocks\non a parachain until the block candidate they proposed to the Relay Chain validators have been\nvalidated."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Relay Chain candidate block diagram",src:t(103).Z,width:"586",height:"584"})),(0,r.kt)("p",null,"A block is produced every 6 seconds."),(0,r.kt)("h2",{id:"collators-in-the-wild"},"Collators in the Wild"),(0,r.kt)("p",null,"Blockchains that are built using Substrate are unable to hook onto the Relay Chain on their own. The\nParity team built the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/"},"Cumulus library")," to address this.\nCollators are being used on the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo")," testnet, and you can\nlearn more about how they are used with Cumulus via the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/"},"Cumulus")," repository. More information can be found under\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk###cumulus"},"Cumulus section")," on the build parachain page."),(0,r.kt)("h2",{id:"guides-and-tools"},"Guides and Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.substrate.io/tutorials/connect-other-chains/"},"Tutorial covering Cumulus and Collators")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/build-pdk##testing-a-parachains:-selendra-testnet"},"Selendra testnet guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/selendra/selendra-launch"},"selendra-launch")," - a tool to quickly spin up a\nlocal Selendra testnet based on some parameters like number of parachains, collator setup, etc.")))}p.isMDXComponent=!0},8409:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadot-consensus-example-1-b4a05f2e5a4b991594612da57e1d6dfd.png"},103:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/polkadot-consensus-example-2-5b1fd5d5e6436b1f6c9c6d42ebd4e6f4.png"}}]);