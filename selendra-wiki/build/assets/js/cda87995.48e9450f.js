"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7023:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index",description:"Reference point for a list of tools to support your development.",keywords:["tools","clients","libraries","explorers","monitor","data","SCALE"],slug:"../build-tools-index"},s=void 0,u={unversionedId:"build/build-tools-index",id:"build/build-tools-index",title:"Tool Index",description:"Reference point for a list of tools to support your development.",source:"@site/../docs/build/build-tools-index.md",sourceDirName:"build",slug:"/build-tools-index",permalink:"/docs/build-tools-index",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/build/build-tools-index.md",tags:[],version:"current",frontMatter:{id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index",description:"Reference point for a list of tools to support your development.",keywords:["tools","clients","libraries","explorers","monitor","data","SCALE"],slug:"../build-tools-index"},sidebar:"docs",previous:{title:"Transaction Construction",permalink:"/docs/build-transaction-construction"},next:{title:"Open Source Stack",permalink:"/docs/build-open-source"}},p={},c=[{value:"Block Explorers",id:"block-explorers",level:2},{value:"Network Monitoring &amp; Reporting",id:"network-monitoring--reporting",level:2},{value:"Clients",id:"clients",level:2},{value:"Tools",id:"tools",level:2},{value:"UI",id:"ui",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Selendra-JS API",id:"selendra-js-api",level:3},{value:"CLI Tools",id:"cli-tools",level:3},{value:"WASM",id:"wasm",level:3},{value:"RPC and API Tools",id:"rpc-and-api-tools",level:3},{value:"SCALE Codec",id:"scale-codec",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here, we provide a list of tools available for your development needs. They are sorted by context.\nIf you're actively maintaining a tool that might be useful to other Selendra or Substrate\ndevelopers, feel free to ",(0,o.kt)("a",{parentName:"p",href:"/docs/contributing"},"add it in"),"."),(0,o.kt)("h2",{id:"block-explorers"},"Block Explorers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://portal.selendra.org/#/explorer"},"Selendra-JS Portal Explorer")," - Selendra dashboard block\nexplorer. Supports other networks, including Indranet, Kumandra, and other remote or local\nendpoints. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://explorer.selendra.org/"},"Selendra-block-explorer")," - Blockchain explorer for Selendra and other related\nchains. ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-explorer"},"Repo"),".")),(0,o.kt)("h2",{id:"network-monitoring--reporting"},"Network Monitoring & Reporting"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/#list/0xfe6cd5f021c70fe24e768c4c6352cd8f7c4453feea126ebeaf0ba9d316a1eeb0"},"Selendra Telemetry Service")," - Network information including what\nnodes are running the chain, what software versions they are running, sync status, and location.")),(0,o.kt)("h2",{id:"clients"},"Clients"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra/selendra"},"Selendra")," - The original Rust implementation of the\nSelendra.")),(0,o.kt)("h2",{id:"tools"},"Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate"},"Substrate")," - Blockchain development platform written in\nRust. The Rust version of the Selendra Host is being built with Substrate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.substrate.io/"},"Substrate Docs")," - Comprehensive documentation and tutorials for\nbuilding a blockchain using Substrate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/vscode-substrate"},"Substrate VSCode plugin"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-debug-kit"},"Substrate Debug Kit")," - A collection of debug\ntools and libraries around substrate chains. Includes tools to calculate NPoS elections offline,\ndisk usage monitoring, test templates against chain state and other pallet-specific helper."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://crates.io/crates/diener"},"Diener")," - A tool for easy changing of Selendra or Substrate\ndependency versions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra/selendra-launch"},"Selendra Launch")," - A tool to easily launch\ncustom local parachain-enabled Selendra versions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/halva-suite/halva"},"Halva")," - A Truffle-inspired local development environment\nfor Substrate."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/maxsam4/fork-off-substrate"},"Fork-off Substrate")," - Copies the state of an\nexisting chain into your local version and lets you further experiment on it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.chevdor.com/tags/srtool/"},"srtool")," - A tool for verifying runtime versions against\non-chain proposal hashes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nikvolf/sub-bench"},"sub-bench")," - A tool to spam your node with transactions for\nthe sake of benchmarking."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/danforbes/substrate-devhub-utils"},"substrate-devhub-utils")," - A set of\nJavaScript utilities making life with Substrate a little easier."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NikVolf/sub-flood"},"sub-flood")," - A tool to benchmark Substrate by flooding it\nwith requests.")),(0,o.kt)("h2",{id:"ui"},"UI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Swader/polkadash"},"Polkadash")," - VueJS-based starter kit for custom user\ninterfaces for Substrate chains."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra/selendra-portal"},"Selendra Portal UI")," - Repository of the\n",(0,o.kt)("a",{parentName:"li",href:"https://portal.selendra.org"},"selendra.js.org/portal")," UI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front-end Template")," -\nReactJS-based starter UI for custom user interfaces for Substrate chains."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-js/extension"},"Selendra JS Browser Extension")," - Key management in a\nChrome extension.")),(0,o.kt)("h2",{id:"libraries"},"Libraries"),(0,o.kt)("h3",{id:"selendra-js-api"},"Selendra-JS API"),(0,o.kt)("p",null,"The Selendra-JS API provides various utility functions that are used across all projects in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"@selendra")," namespace and is split into a number of internal utility packages. The documentation and\nusage instructions are provided at ",(0,o.kt)("a",{parentName:"p",href:"https://selendra.js.org/docs/"},"Selendra-JS API Documentation"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/keyring"},"@selendra/keyring")," This allows you to create and load\naccounts in JavaScript. It is helpful for creating wallets or any application that will require\nthe user to write to chain. ",(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/keyring/start/create"},"Examples"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/keyring/start/install#other-dependencies"},"@selendra/util")," Utility\nfunctions like checking if a string is hex-encoded."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/util-crypto/"},"@selendra/util-crypto")," Useful cryptographic utilities\nfor developing with Selendra.")),(0,o.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-js/tools/tree/master/packages/api-cli"},"@selendra/api-cli")," Command\nline interface for the selendra API. ",(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/api/start"},"Documentation"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-js/tools/tree/master/packages/monitor-rpc"},"@selendra/monitor-rpc")," An\nRPC monitor for Selendra. See the RPC tools below for additional information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-js/tools/tree/master/packages/signer-cli"},"@selendra/signer-cli")," A\nTool to construct, sign, and broadcast transactions. Signing can be done offline."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," - Command line utility\nfor generating and inspecting key pairs.")),(0,o.kt)("h3",{id:"wasm"},"WASM"),(0,o.kt)("p",null,"WebAssembly related tools and projects."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/"},"ink!")," - An eDSL to write WebAssembly based smart contracts\nusing the Rust programming language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-wasm"},"parity-wasm")," - Low-level WebAssembly format library."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasm-utils"},"wasm-utils")," - Collection of WebAssembly utilities used\nin pwasm-ethereum and substrate contract development."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasmi"},"wasmi")," - A WebAssembly interpreter conceived as a component\nof parity-ethereum (Ethereum-like contracts in Wasm) and Substrate.")),(0,o.kt)("h3",{id:"rpc-and-api-tools"},"RPC and API Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/selendra-js/api/tree/master/packages/rpc-provider"},"@selendra/api/rpc-provider"),"\nDemonstrates how the JS tools interact with the node over RPC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://selendra.js.org/docs/substrate/rpc"},"RPC documentation")," - Documentation of Substrate RPC\nmethods."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/itering/substrate-api-rpc"},"Go: Subscan API")," - Go API for Selendra.\nfor .NET."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/centrifuge/go-substrate-rpc-client/"},"GSRPC")," - Substrate RPC client in Go,\na.k.a. GSRPC."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," - An HTTP wrapper for\nSubstrate, abstracting some complex RPC calls into simple REST calls."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-subxt"},"Subxt")," - A Rust library to submit extrinsics to a\nSubstrate node via RPC.")),(0,o.kt)("h3",{id:"scale-codec"},"SCALE Codec"),(0,o.kt)("p",null,"The SCALE (Simple Concatenated Aggregate Little-Endian) Codec is a lightweight, efficient, binary\nserialization and deserialization codec."),(0,o.kt)("p",null,"It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained\nexecution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes\nthe decoding context has all type knowledge about the encoded data."),(0,o.kt)("p",null,"It is used in almost all communication to/from Substrate nodes, so implementations in different\nlanguages exist:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/awesome-substrate#scale-codec"},"Substrate Awesome"),"\nmaintains a list of SCALE codex implementations.")))}m.isMDXComponent=!0}}]);