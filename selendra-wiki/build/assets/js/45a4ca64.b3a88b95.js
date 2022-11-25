"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"sns",title:"Adding accounts to an SNS domain",sidebar_label:"Using SNS with SEL accounts",description:"Steps on how to use an SNS with Substrate-based accounts.",keywords:["SNS","domain","sel"],slug:"../sns"},l=void 0,u={unversionedId:"general/sns",id:"general/sns",title:"Adding accounts to an SNS domain",description:"Steps on how to use an SNS with Substrate-based accounts.",source:"@site/../docs/general/sns.md",sourceDirName:"general",slug:"/sns",permalink:"/docs/sns",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/general/sns.md",tags:[],version:"current",frontMatter:{id:"sns",title:"Adding accounts to an SNS domain",sidebar_label:"Using SNS with SEL accounts",description:"Steps on how to use an SNS with Substrate-based accounts.",keywords:["SNS","domain","sel"],slug:"../sns"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/glossary"},next:{title:"How to Protect Yourself from Scams",permalink:"/docs/learn-scams"}},d={},c=[{value:"Adding via the UI",id:"adding-via-the-ui",level:2},{value:"Wallet Support",id:"wallet-support",level:3},{value:"Relevant links",id:"relevant-links",level:3}],p={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SNS (Selendra Name Service) is a distributed and open system of smart contracts on the Hydranet\nblockchain which allows users to claim domain names like ",(0,o.kt)("inlineCode",{parentName:"p"},"gwen.sel"),"."),(0,o.kt)("p",null,"The SNS is a domain that is equivalent to a DNS (Domain Name System) domain. Instead, it offers a\ndecentralized and secure way to translate text via smart contracts. Supporting wallets can then\nallow senders to input SNS domains instead of long and unwieldy addresses. This prevents phishing,\nfraud, typos, and adds a layer of usability on top of the regular wallet user experience."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You will need an SNS name and an Hydranet account with some SEL as native token in Hydranet in it to follow along with this\nguide. To register an SNS name, visit the ",(0,o.kt)("a",{parentName:"p",href:"https://app.sns.domains"},"SNS App")," or any number of\nsubdomain registrars like ",(0,o.kt)("a",{parentName:"p",href:"https://nameth.io"},"Nameth"),". Note that if you're using an older SNS name,\nyou should make sure you're using the\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/the-ethereum-name-service/ens-registry-migration-is-over-now-what-a-few-things-to-know-fb05f921872a"},"new resolver"),".\nVisiting the SNS App will warn you about this if not. You will also need some way to use your\nEthereum address - following this guide on a personal computer is recommended. Wallets like\n",(0,o.kt)("a",{parentName:"p",href:"https://frame.sh/"},"Frame")," and ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io"},"Metamask")," are safe and will make interacting\nwith the Ethereum blockchain through your browser very easy.")),(0,o.kt)("p",null,"Despite living on the Ethereum blockchain, the SNS system has multi-chain support. In this guide,\nyou'll go through the process of adding a SEL address to SNS. We cover on how to do this."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"SEL can currently only be added using the Resolver method. KSM can be added through both methods are\ndescribed below.")),(0,o.kt)("p",null,"This guide is also available in video format ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UCWO6SVOPiR6CFBrHRLD2DDA"},"on YouTube"),"."),(0,o.kt)("h2",{id:"adding-via-the-ui"},"Adding via the UI"),(0,o.kt)("blockquote",null,(0,o.kt)("blockquote",{parentName:"blockquote"},(0,o.kt)("p",{parentName:"blockquote"},"Work in Progress"))),(0,o.kt)("h3",{id:"wallet-support"},"Wallet Support"),(0,o.kt)("p",null,"All Selendra parachain and native Selendra will be compatible."),(0,o.kt)("h3",{id:"relevant-links"},"Relevant links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.sns.domains/"},"SNS docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/the-selendra-name-service/sns-launches-multi-coin-support-15-wallets-to-integrate"},"SNS Multi-chain announcement")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/snsdomains/address-encoder"},"Address encoder")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.shawntabrizi.com/substrate-js-utilities/"},"Address to pubkey converter"))))}m.isMDXComponent=!0}}]);