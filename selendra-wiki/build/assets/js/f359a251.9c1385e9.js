"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",keywords:["endpoints","network","connect"],slug:"../maintain-endpoints"},l=void 0,p={unversionedId:"maintain/maintain-endpoints",id:"maintain/maintain-endpoints",title:"Node Endpoints",description:"List of node endpoints and examples of use.",source:"@site/../docs/maintain/maintain-endpoints.md",sourceDirName:"maintain",slug:"/maintain-endpoints",permalink:"/docs/maintain-endpoints",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/maintain/maintain-endpoints.md",tags:[],version:"current",frontMatter:{id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",keywords:["endpoints","network","connect"],slug:"../maintain-endpoints"},sidebar:"docs",previous:{title:"Parameters",permalink:"/docs/maintain-selendra-parameters"},next:{title:"Set up a Full Node",permalink:"/docs/maintain-sync"}},d={},c=[{value:"Network Endpoints",id:"network-endpoints",level:3},{value:"Main Networks",id:"main-networks",level:4},{value:"Test Networks",id:"test-networks",level:4},{value:"Example usage with Selendra-JS API",id:"example-usage-with-selendra-js-api",level:4},{value:"Substrate Connect",id:"substrate-connect",level:4}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Ideally, one may run their own node when interacting with the\n",(0,i.kt)("a",{parentName:"p",href:"https://selendra.org/"},"Selendra network")," via ",(0,i.kt)("a",{parentName:"p",href:"https://portal.selendra.org/"},"Selendra-Portal"),"\nor other UIs and programmatic methods. Another option would be to connect to one of the several\npublic endpoints provided by infrastructure and API service providers. For development convenience,\n",(0,i.kt)("a",{parentName:"p",href:"https://selendra.org/"},"Selendra")," maintains archive nodes for Selendra, and their test\nnetworks with public endpoints. These endpoints can be used with\n",(0,i.kt)("a",{parentName:"p",href:"https://js.selendra.org/docs/api"},"Selndra-JS API")," to interact with their respective chains. The\ntables below list these endpoints."),(0,i.kt)("h3",{id:"network-endpoints"},"Network Endpoints"),(0,i.kt)("h4",{id:"main-networks"},"Main Networks"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Network"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Selendra"),(0,i.kt)("td",{parentName:"tr",align:null},"wss://rpc.selendra.org")))),(0,i.kt)("h4",{id:"test-networks"},"Test Networks"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Network"),(0,i.kt)("th",{parentName:"tr",align:null},"URL"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Selendra Testnet"),(0,i.kt)("td",{parentName:"tr",align:null},"wss://rpc-testnet.selendra.org")))),(0,i.kt)("h4",{id:"example-usage-with-selendra-js-api"},"Example usage with Selendra-JS API"),(0,i.kt)("p",null,"To connect to the Selendra node, use the endpoint in your JavaScript apps like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{5}","{5}":!0},"// Using the Selendra Mainnet Endpoint\nconst { ApiPromise, WsProvider } = require('@selendra/api');\nasync () => {\n  // Construct a provider with the endpoint URL\n  const provider = new WsProvider('wss://rpc.selendra.org/');\n  // Create an API instance for Selendra\n  const api = await ApiPromise.create({ provider });\n  // ...\n")),(0,i.kt)("h4",{id:"substrate-connect"},"Substrate Connect"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://substrate.io/developers/substrate-connect/"},"Substrate connect")," builds on Selendra JS so\nbuilding an app is the same experience as with using a traditional RPC server node. It is a fast,\nsecure, and decentralized way to interact with Selendra, and their parachains right in the\nbrowser."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Substrate Connect is still under\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-connect"},"active development"),".")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The list of third party RPC endpoints above for Selendra is directly fetched from\n",(0,i.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/explorer"},"Selendra-Portal"))))}m.isMDXComponent=!0}}]);