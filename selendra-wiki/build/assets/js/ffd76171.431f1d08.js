"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,k=p["".concat(d,".").concat(m)]||p[m]||c[m]||i;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8559:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",description:"Reference point for network maintenance guides.",keywords:["index","reference","maintain"],slug:"../maintain-index"},d=void 0,u={unversionedId:"maintain/maintain-index",id:"maintain/maintain-index",title:"Network Maintainers",description:"Reference point for network maintenance guides.",source:"@site/../docs/maintain/maintain-index.md",sourceDirName:"maintain",slug:"/maintain-index",permalink:"/docs/maintain-index",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/maintain/maintain-index.md",tags:[],version:"current",frontMatter:{id:"maintain-index",title:"Network Maintainers",sidebar_label:"Network Maintainers",description:"Reference point for network maintenance guides.",keywords:["index","reference","maintain"],slug:"../maintain-index"},sidebar:"docs",previous:{title:"Hackathons",permalink:"/docs/build-hackathon"},next:{title:"Parameters",permalink:"/docs/maintain-selendra-parameters"}},s={},c=[{value:"Node",id:"node",level:2},{value:"Collator",id:"collator",level:2},{value:"Nominator",id:"nominator",level:2},{value:"Validator",id:"validator",level:2},{value:"Governance",id:"governance",level:2}],p={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the network maintainers section of the Selendra wiki. Here you will find information and\nguides to set up a node and run the network."),(0,i.kt)("h2",{id:"node"},"Node"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-networks"},"Networks Guide")," - A list of the available Selendra networks that you can\nconnect to with a node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-sync"},"Set up a Full Node")," - Get up and started by syncing a full node for the Selendra\nnetwork. The steps in the guide will broadly apply also to any Substrate-based network (like\nSelendra, Indranet, Kumandra)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-wss"},"Set up WSS using Nginx")," - Set up a Secure WebSockets server for your node's\nWebSockets connection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-load-balance"},"Set up a RPC load-balancing")," - Setup a RPC endpoint load-balance.")),(0,i.kt)("h2",{id:"collator"},"Collator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-collator"},"Learn about Collators")," - High level overview of collators and related\nlinks.")),(0,i.kt)("h2",{id:"nominator"},"Nominator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-nominator"},"Learn about Nominators")," - High level overview of nominators and\nrelated links."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-selendra"},"Nomination Guide (Selendra)")," - Walkthrough on how to\nnominate on the Selendra network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-unbond"},"How to stop being a Nominator")," - Guide on how to stop\nnominating.")),(0,i.kt)("h2",{id:"validator"},"Validator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn-validator"},"Learn about Validators")," - High level overview of validator and\nrelated links."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payouts")," - Overview on how validator rewards are\ncalculated and paid."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-selendra"},"Validation Guide (Selendra)")," - Walkthrough on how to\nvalidate on the Selendra network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"Using systemmd for the Validator Node")," - Configuring systemmd\nwith the Validator node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-secure-validator"},"Secure Validator")," - Best tips and practices for validating."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-use-selendra-validator-setup"},"How to use Selendra Validator Setup")," -\nWalkthrough on how to set up a validator securely."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"maintain-guides-how-to-upgrade.md"},"How to upgrade a Validator Node")," - Guide on upgrading your\nvalidator node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-chill"},"How to Chill")," - Walkthrough on how to chill as a validator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," - Proper way to stop\nvalidating.")),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-democracy"},"How to participate in Governance")," - Walkthrough on how to\nparticipate in governance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-join-council"},"How to join the Council")," - Step by step guide for running for the Council."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-vote-councillor"},"How to vote for a Councillor")," - Step by step guide for voting for your\nfavorite councillors.")))}m.isMDXComponent=!0}}]);