(self.webpackChunk=self.webpackChunk||[]).push([[7368],{7940:(a,t,e)=>{"use strict";e.d(t,{Z:()=>p});var n=e(4165),o=e(5861),r=e(7294),i=e(3444),s=e(7974),l=e(7425);function d(a,t,e){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,n.Z)().mark((function a(t,e,o){var r,l,d,c,u;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=void 0,l=void 0,a.t0=t,a.next="selendra"===a.t0?5:7;break;case 5:return r="wss://rpc.selendra.org",a.abrupt("break",8);case 7:console.log("Unknown socket url provided, no connection made.");case 8:if(void 0!==r){a.next=12;break}return a.abrupt("return");case 12:return d=new i.U(r),a.next=15,s.G.create({provider:d});case 15:c=a.sent,(u=e.split(".")).forEach((function(a){a in c&&(c=c[a])})),a.t1=u[0],a.next="consts"===a.t1?21:"query"===a.t1?23:28;break;case 21:return l=c.toString(),a.abrupt("break",29);case 23:return a.next=25,c();case 25:return l=(l=a.sent).toString(),a.abrupt("break",29);case 28:console.log("Unknown path prefix ("+u[0]+") in "+e);case 29:return a.abrupt("return",l);case 30:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function u(a,t,e,n){switch(t){case"humanReadable":(0,l.HumanReadable)(a,e,n);break;case"blocksToDays":(0,l.BlocksToDays)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(a){var t=a.network,e=a.path,i=a.defaultValue,s=a.filter,l=void 0===s?void 0:s,c=(0,r.useState)(""),p=c[0],h=c[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?u(i.toString(),l,t,h):h(i.toString());var a=void 0;if("selendra"===t)a="wss://rpc.selendra.org";else console.log("Unknown network provided, "+t);if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(t,e,h);case 2:if(void 0!==(o=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),p}},7425:a=>{var t={selendra:{precision:1e10,symbol:"SEL"}};a.exports={HumanReadable:function(a,e,n){var o=void 0;"selendra"===e?(o=3,a=parseFloat(a),n((a=Number.isInteger(a/t[e].precision)?a/t[e].precision+" "+t[e].symbol:(a/t[e].precision).toFixed(o)+" "+t[e].symbol).toString())):console.log("Unknown network type found when attempting to apply 'Human Readable' filter")},BlocksToDays:function(a,t){t((a=6*a/86400).toString())}}},9175:(a,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=e(7462),o=e(3366),r=(e(7294),e(3905)),i=e(7940),s=["components"],l={id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},d=void 0,c={unversionedId:"learn/learn-validator",id:"learn/learn-validator",title:"Validator",description:"An introduction about validators.",source:"@site/../docs/learn/learn-validator.md",sourceDirName:"learn",slug:"/learn-validator",permalink:"/docs/learn-validator",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/learn/learn-validator.md",tags:[],version:"current",lastUpdatedBy:"hangsiahong",lastUpdatedAt:1668523426,formattedLastUpdatedAt:"Nov 15, 2022",frontMatter:{id:"learn-validator",title:"Validator",sidebar_label:"Validator",description:"An introduction about validators.",keywords:["validate","validator","maintain","NPoS","stake"],slug:"../learn-validator"},sidebar:"docs",previous:{title:"Treasury",permalink:"/docs/learn-treasury"},next:{title:"Introduction to Staking",permalink:"/docs/learn-staking"}},u={},p=[{value:"Guides",id:"guides",level:2},{value:"Monitoring Tools",id:"monitoring-tools",level:2},{value:"Validator Stats",id:"validator-stats",level:2}],h={toc:p};function v(a){var t=a.components,e=(0,o.Z)(a,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Validators secure the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-architecture#relay-chain"},"Relay Chain")," by staking SEL, validating\nproofs from collators and participating in consensus with other validators."),(0,r.kt)("p",null,"These participants play a crucial role in adding new blocks to the Relay Chain and, by extension, to\nall parachains. This allows parties to complete cross-chain transactions via the Relay Chain.\nParachain validators participate in some form of off-chain consensus, and submit candidate receipts\nto the tx pool for a block producer to include on-chain. The Relay Chain validators guarantee that\neach parachain follows its unique rules and can pass messages between shards in a trust-free\nenvironment."),(0,r.kt)("p",null,"With parachains now on the network, para-validators are selected every epoch to validate parachain\nblocks for all parachains connected to the Relay Chain. Para-validators work in groups to validate\nparachain blocks."),(0,r.kt)("p",null,"The selected para-validators are one of\n",(0,r.kt)(i.Z,{network:"selendra",path:"query.staking.validatorCount",defaultValue:297,mdxType:"RPC"})," :polkadot }}\nvalidators randomly selected (per epoch) to participate in the validation, creating a validator pool\nof 200 para-validators."),(0,r.kt)("p",null,"Validators perform two functions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Verifying")," that the information contained in an assigned set of parachain blocks is valid\n(such as the identities of the transacting parties and the subject matter of the contract)."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Participating")," in the consensus mechanism to produce the Relay Chain blocks based on validity\nstatements from other validators. Any instances of non-compliance with the consensus algorithms\nresult in punishment by removal of some or all of the validator\u2019s staked SEL, thereby\ndiscouraging bad actors. Good performance, however, will be rewarded, with validators receiving\nblock rewards (including transaction fees) in the form of SEL in exchange for their activities.")),(0,r.kt)("h2",{id:"guides"},"Guides"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-selendra"},"How to Validate on Polkadot")," - Guide on\nhow to set up a validator on the Polkadot live network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain-guides-validator-payout"},"Validator Payout Overview")," - A short overview on\nhow the validator payout mechanism works."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-systemd"},"How to run your validator as a systemd process")," -\nGuide on running your validator as a ",(0,r.kt)("inlineCode",{parentName:"li"},"systemd")," process so that it will run in the background and\nstart automatically on reboots."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../maintain/maintain-guides-how-to-upgrade.md"},"How to Upgrade your Validator")," - Guide for\nsecurely upgrading your validator when you want to switch to a different machine or begin running\nthe latest version of client code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../maintain/maintain-guidesmaintain-polkadot-parameters.md-how-to-use-selendra-validator-setup.md"},"How to Use Validator Setup")," -\nGuide on how to use Polkadot / Kusama validator setup.")),(0,r.kt)("h2",{id:"monitoring-tools"},"Monitoring Tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic_polkadot"},"PANIC for Selendra")," - A monitoring and alerting\nsolution for Selendra node"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://telemetry.selendra.org/#list/Selendra%20CC3"},"Selendra Telemetry Service")," - Network\ninformation, including what nodes are running on a given chain, what software versions they are\nrunning, and sync status.")),(0,r.kt)("h2",{id:"validator-stats"},"Validator Stats"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://explorer.selendra.org/validator"},"Subscan Validators Page")," - Displays information on the\ncurrent validators - not as tailored for validators as the other sites.")))}v.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);