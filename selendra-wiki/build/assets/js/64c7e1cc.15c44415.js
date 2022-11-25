"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"build-integration",title:"Selendra Integration Guide",sidebar_label:"Integration Initiation",description:"Reference point for the Selendra integration guides.",keywords:["protocol","integration","structure"],slug:"../build-integration"},s=void 0,u={unversionedId:"build/build-integration",id:"build/build-integration",title:"Selendra Integration Guide",description:"Reference point for the Selendra integration guides.",source:"@site/../docs/build/build-integration.md",sourceDirName:"build",slug:"/build-integration",permalink:"/docs/build-integration",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/build/build-integration.md",tags:[],version:"current",frontMatter:{id:"build-integration",title:"Selendra Integration Guide",sidebar_label:"Integration Initiation",description:"Reference point for the Selendra integration guides.",keywords:["protocol","integration","structure"],slug:"../build-integration"},sidebar:"docs",previous:{title:"Opening HRMP Channels",permalink:"/docs/build-hrmp-channels"},next:{title:"Selendra Protocol",permalink:"/docs/build-protocol-info"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Recommendation",id:"recommendation",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the Selendra integration guide. This guide will provide all the information you need to\nget started on your integration. The target audiences for this guide are wallets and custodians, but\nit will be useful to any infrastructure provider such as validators or chain indexers."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"The guide focuses on Selendra, but the principles will apply to parachains and other\nSubstrate-based chains. The guide contains four sections:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-protocol-info"},"Protocol Info"),": The entry point to the guide. Please read it carefully\nas it provides information about Selendra that differentiates it from other blockchains. Use this\npage to check your assumptions."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-integrate-assets"},"Assets"),": The guide to integrating assets on Selendra into your\nsystems."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-node-management"},"Node Management"),": This page will guide you to starting and monitoring\na node."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-node-interaction"},"Node Interaction"),": This page will teach you to interact with your\nnode via multiple RPC tooling options."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/build-transaction-construction"},"Transaction Construction"),": A guide to transaction\nconstruction, signing, decoding, and serialization using several available tools.")),(0,i.kt)("h2",{id:"recommendation"},"Recommendation"),(0,i.kt)("p",null,"Each page in the guide, especially the Node Interaction and Transaction Construction pages, tries to\nlist several options to accomplish the same thing. We want you to know your options and choose the\nsolution that is best for you."),(0,i.kt)("p",null,"That said, the easiest path to integration is almost always to use\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," to interact with your\nnode and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/txwrapper-core/"},"TxWrapper Core")," to construct and sign\ntransactions. Parity and Web3 Foundation will be able to provide the best support if you use these\ntools."),(0,i.kt)("p",null,"If your team would like support, join some of our ",(0,i.kt)("a",{parentName:"p",href:"/docs/community"},"community channels")," or\ncontact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@selendra.network"},"support@selendra.network"),"."))}m.isMDXComponent=!0}}]);