(self.webpackChunk=self.webpackChunk||[]).push([[1506],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var s=n(4165),r=n(5861),o=n(7294),a=n(3444),i=n(7974),l=n(7425);function c(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,s.Z)().mark((function e(t,n,r){var o,l,c,p,u;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="selendra"===e.t0?5:7;break;case 5:return o="wss://rpc.selendra.org",e.abrupt("break",8);case 7:console.log("Unknown socket url provided, no connection made.");case 8:if(void 0!==o){e.next=12;break}return e.abrupt("return");case 12:return c=new a.U(o),e.next=15,i.G.create({provider:c});case 15:p=e.sent,(u=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?21:"query"===e.t1?23:28;break;case 21:return l=p.toString(),e.abrupt("break",29);case 23:return e.next=25,p();case 25:return l=(l=e.sent).toString(),e.abrupt("break",29);case 28:console.log("Unknown path prefix ("+u[0]+") in "+n);case 29:return e.abrupt("return",l);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,s){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,s);break;case"blocksToDays":(0,l.BlocksToDays)(e,s);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,n=e.path,a=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,o.useState)(""),d=p[0],h=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(a.toString(),l,t,h):h(a.toString());var e=void 0;if("selendra"===t)e="wss://rpc.selendra.org";else console.log("Unknown network provided, "+t);if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,h);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(r,l,t,h):h(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),d}},7425:e=>{var t={selendra:{precision:1e10,symbol:"SEL"}};e.exports={HumanReadable:function(e,n,s){var r=void 0;"selendra"===n?(r=3,e=parseFloat(e),s((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(r)+" "+t[n].symbol).toString())):console.log("Unknown network type found when attempting to apply 'Human Readable' filter")},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},8948:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var s=n(7462),r=n(3366),o=(n(7294),n(3905)),a=(n(7940),["components"]),i={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},l=void 0,c={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/learn/learn-teleport.md",tags:[],version:"current",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"NFTs",permalink:"/docs/learn-nft"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},p={},u=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3},{value:"Teleporting Tokens using the Selendra-Portal UI",id:"teleporting-tokens-using-the-selendra-portal-ui",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function h(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," and ","[SPREE\nmodules][]",", which together ensure that assets are not lost or duplicated across multiple chain."),(0,o.kt)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"teleport",src:n(4499).Z,width:"1397",height:"611"})),(0,o.kt)("p",null,"As you can see from the diagram above, there are only 2 actors within this model: the source and the\ndestination. The way in which we transfer assets between the source and the destination are briefly\nsummarized in the numbered labels on the diagram, and are explained in more detail below:"),(0,o.kt)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,o.kt)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,o.kt)("strong",{parentName:"p"},"takes them out")," from\nthe circulating supply, taking note of the total amount of assets that was taken out."),(0,o.kt)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,o.kt)("p",null,"The source then creates an ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," instruction called ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," containing as\nparameters a) the receiving account and b) the amount of assets taken out from circulation. It then\nsends this instruction over to the destination, where it gets processed and new assets are ",(0,o.kt)("strong",{parentName:"p"},"put\nback into")," the circulating supply."),(0,o.kt)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,o.kt)("p",null,"The destination deposits the assets to the receiving account. The actions of ",(0,o.kt)("strong",{parentName:"p"},"taking out")," from the\ncirculating supply and ",(0,o.kt)("strong",{parentName:"p"},"putting back")," into the circulating supply show the great flexibility that\nan ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," executor has in regulating the flow of an asset without changing its circulating supply.\nAssets are transferred to an inaccessible account in order to take them out from circulation.\nLikewise, for putting assets back into circulation, assets are released from a pre-filled and\ninaccessible treasury, or perform a mint of the assets. This process requires mutual trust between\nthe source and destination. The destination must trust the source of having appropriately removed\nthe sent assets from the circulating supply, and the source must trust the destination of having put\nthe received assets back into circulation. The result of an asset teleportation should result in the\nsame circulating supply of the asset, and failing to uphold this condition will result in a change\nin the asset's total issuance (in the case of fungible tokens) or a complete loss/duplication of an\nNFT."),(0,o.kt)("h2",{id:"teleporting-tokens-using-the-selendra-portal-ui"},"Teleporting Tokens using the Selendra-Portal UI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/PGyDpH2kad8"},"Video tutorial on Teleporting")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181119-how-to-teleport-dot-or-ksm-between-Cardamom-or-statemine"},"Additional support article"))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,o.kt)("a",{parentName:"p",href:"https://portal.selendra.org/"},"Selendra-Portal UI"),", the source chain that you have selected\ndoes not support teleportation yet."))}h.isMDXComponent=!0},4499:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s=n.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},3971:()=>{},6601:()=>{}}]);