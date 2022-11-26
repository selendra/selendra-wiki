(self.webpackChunk=self.webpackChunk||[]).push([[7485],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(4165),r=n(5861),o=n(7294),s=n(3444),i=n(7974),l=n(7425);function u(e,t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var o,l,u,d,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="selendra"===e.t0?5:7;break;case 5:return o="wss://rpc.selendra.org",e.abrupt("break",8);case 7:console.log("Unknown socket url provided, no connection made.");case 8:if(void 0!==o){e.next=12;break}return e.abrupt("return");case 12:return u=new s.U(o),e.next=15,i.G.create({provider:u});case 15:d=e.sent,(p=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?21:"query"===e.t1?23:28;break;case 21:return l=d.toString(),e.abrupt("break",29);case 23:return e.next=25,d();case 25:return l=(l=e.sent).toString(),e.abrupt("break",29);case 28:console.log("Unknown path prefix ("+p[0]+") in "+n);case 29:return e.abrupt("return",l);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,n=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,d=(0,o.useState)(""),c=d[0],h=d[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?p(s.toString(),l,t,h):h(s.toString());var e=void 0;if("selendra"===t)e="wss://rpc.selendra.org";else console.log("Unknown network provided, "+t);if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,n,h);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?p(r,l,t,h):h(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),c}},7425:e=>{var t={selendra:{precision:1e10,symbol:"SEL"}};e.exports={HumanReadable:function(e,n,a){var r=void 0;"selendra"===n?(r=3,e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(r)+" "+t[n].symbol).toString())):console.log("Unknown network type found when attempting to apply 'Human Readable' filter")},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},7445:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=n(7940),i=["components"],l={id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Selendra's on-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-treasury"},u=void 0,d={unversionedId:"learn/learn-treasury",id:"learn/learn-treasury",title:"Treasury",description:"Details about Selendra's on-chain Treasury.",source:"@site/../docs/learn/learn-treasury.md",sourceDirName:"learn",slug:"/learn-treasury",permalink:"/docs/learn-treasury",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/learn/learn-treasury.md",tags:[],version:"current",frontMatter:{id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Selendra's on-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-treasury"},sidebar:"docs",previous:{title:"Transaction Fees",permalink:"/docs/learn-transaction-fees"},next:{title:"Validator",permalink:"/docs/learn-validator"}},p={},c=[{value:"Funding the Treasury",id:"funding-the-treasury",level:2},{value:"WORK IN PROGRESS",id:"work-in-progress",level:3}],h={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Treasury is a pot of funds collected through a portion of block production rewards, transaction\nfees, slashing, ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-staking#inflation"},"staking inefficiencies"),", etc."),(0,o.kt)("p",null,"The funds held in the Treasury can be spent by making a spending proposal that, if approved by the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"Council"),", will enter a waiting period before distribution. This\nwaiting period is known as the ",(0,o.kt)("em",{parentName:"p"},"spend period"),", and its duration is subject to\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance"),", with the current default set to\n",(0,o.kt)(s.Z,{network:"selendra",path:"consts.treasury.spendPeriod",defaultValue:345600,filter:"blocksToDays",mdxType:"RPC"}),"\ndays. The Treasury attempts to spend as many proposals in the queue as it can without running out of\nfunds."),(0,o.kt)("p",null,"Treasury payout is an automatic process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the Treasury funds run out with approved proposals left to fund, those proposals are kept in\nthe approved queue, and will receive funding in the following spend period."),(0,o.kt)("li",{parentName:"ul"},"If the Treasury ends a spend period without spending all of its funds, it suffers a burn of a\npercentage of its funds - thereby causing deflationary pressure. This encourages the spending of\nthe funds in the Treasury by Selendra's governance system.\n{{ selenedra: This percentage is currently at 1%\non selendra.\nWhen a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at\nleast 5% of the proposed spend (see below for variations). This deposit will be slashed if the\nproposal is rejected, and returned if it is accepted.")),(0,o.kt)("p",null,"Proposals may consist of (but are not limited to):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Infrastructure deployment and continued operation."),(0,o.kt)("li",{parentName:"ul"},"Network security operations (monitoring services, continuous auditing)."),(0,o.kt)("li",{parentName:"ul"},"Ecosystem provisions (collaborations with friendly chains)."),(0,o.kt)("li",{parentName:"ul"},"Marketing activities (advertising, paid features, collaborations)."),(0,o.kt)("li",{parentName:"ul"},"Community events and outreach (meetups, pizza parties, hackerspaces)."),(0,o.kt)("li",{parentName:"ul"},"Software development (wallets and wallet integration, clients and client upgrades).")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"learn-governance#council"},"Council")," governs the Treasury and how the funds are spent is up to\ntheir judgment."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Council does not approve or deny Treasury Proposals based on the available funds. Proposals are\nnot approved just because there are funds ready to spend but are subject to a burn.")),(0,o.kt)("h2",{id:"funding-the-treasury"},"Funding the Treasury"),(0,o.kt)("p",null,"The Treasury is funded from different sources:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury\nwith a reward going to the entity that reported the validator (another validator). The reward is\ntaken from the slash amount and varies per offence and number of reporters."),(0,o.kt)("li",{parentName:"ol"},"Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the\nremainder going to the block author."),(0,o.kt)("li",{parentName:"ol"},"Staking inefficiency: ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-staking#inflation"},"Inflation")," is designed to be 10% in the first\nyear, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in\nstaking. Any deviation from this ratio will cause a proportional amount of the inflation to go to\nthe Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to\nthe validators as reward. If the staking rate is greater than or less than 50%, then the\nvalidators will receive less, with the remainder going to the Treasury."),(0,o.kt)("li",{parentName:"ol"},"Parathreads: ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-parathreads"},"Parathreads")," participate in a per-block auction for block\ninclusion. Part of this bid goes to the validator that accepts the block and the remainder goes\nto the Treasury.")),(0,o.kt)("h3",{id:"work-in-progress"},"WORK IN PROGRESS"))}f.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);