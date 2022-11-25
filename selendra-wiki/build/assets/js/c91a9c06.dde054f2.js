(self.webpackChunk=self.webpackChunk||[]).push([[8355],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(4165),i=n(5861),r=n(7294),o=n(3444),s=n(7974),l=n(7425);function d(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,a.Z)().mark((function e(t,n,i){var r,l,d,u,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="selendra"===e.t0?5:7;break;case 5:return r="wss://rpc.selendra.org",e.abrupt("break",8);case 7:console.log("Unknown socket url provided, no connection made.");case 8:if(void 0!==r){e.next=12;break}return e.abrupt("return");case 12:return d=new o.U(r),e.next=15,s.G.create({provider:d});case 15:u=e.sent,(c=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=c[0],e.next="consts"===e.t1?21:"query"===e.t1?23:28;break;case 21:return l=u.toString(),e.abrupt("break",29);case 23:return e.next=25,u();case 25:return l=(l=e.sent).toString(),e.abrupt("break",29);case 28:console.log("Unknown path prefix ("+c[0]+") in "+n);case 29:return e.abrupt("return",l);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,n=e.path,o=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,u=(0,r.useState)(""),p=u[0],h=u[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?c(o.toString(),l,t,h):h(o.toString());var e=void 0;if("selendra"===t)e="wss://rpc.selendra.org";else console.log("Unknown network provided, "+t);if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,n,h);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(i,l,t,h):h(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),p}},7425:e=>{var t={selendra:{precision:1e10,symbol:"SEL"}};e.exports={HumanReadable:function(e,n,a){var i=void 0;"selendra"===n?(i=3,e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(i)+" "+t[n].symbol).toString())):console.log("Unknown network type found when attempting to apply 'Human Readable' filter")},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},8693:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=n(7940),s=["components"],l={id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},d=void 0,u={unversionedId:"learn/learn-identity",id:"learn/learn-identity",title:"Identity",description:"Learn about on-chain identity, judgements and registrars.",source:"@site/../docs/learn/learn-identity.md",sourceDirName:"learn",slug:"/learn-identity",permalink:"/docs/learn-identity",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/learn/learn-identity.md",tags:[],version:"current",frontMatter:{id:"learn-identity",title:"Identity",sidebar_label:"Identity",description:"Learn about on-chain identity, judgements and registrars.",keywords:["identity","registrars","judgements"],slug:"../learn-identity"},sidebar:"docs",previous:{title:"Governance",permalink:"/docs/learn-governance"},next:{title:"Network Security",permalink:"/docs/learn-security"}},c={},p=[{value:"Setting an Identity",id:"setting-an-identity",level:2},{value:"Format Caveat",id:"format-caveat",level:3},{value:"Judgements",id:"judgements",level:2},{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3},{value:"Current Registrars",id:"current-registrars",level:3},{value:"Sub Accounts",id:"sub-accounts",level:2},{value:"Clearing and Killing an Identity",id:"clearing-and-killing-an-identity",level:2}],h={toc:p};function m(e){var t=e.components,l=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Selendra provides a naming system that allows\nparticipants to add personal information to their on-chain account and subsequently ask for\nverification of this information by ",(0,r.kt)("a",{parentName:"p",href:"#registrars"},"registrars"),"."),(0,r.kt)("h2",{id:"setting-an-identity"},"Setting an Identity"),(0,r.kt)("p",null,"Users can set an identity by registering through default fields such as legal name, display name,\nwebsite, Twitter handle, Riot handle, etc. along with some extra, custom fields for which they would\nlike attestations (see ",(0,r.kt)("a",{parentName:"p",href:"#judgements"},"Judgements"),")."),(0,r.kt)("p",null,"Users must reserve funds in a bond to store their information on chain:\n",(0,r.kt)(o.Z,{network:"selendra",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),"\nand\n{{ selendra: ",(0,r.kt)(o.Z,{network:"selendra",path:"consts.identity.fieldDeposit",defaultValue:66e7,filter:"humanReadable",mdxType:"RPC"})," :selendra }}\nper each field beyond the legal name. These funds are ",(0,r.kt)("em",{parentName:"p"},"locked"),", not spent - they are returned when\nthe identity is cleared."),(0,r.kt)("p",null,"These amounts can also be extracted by querying constants through the\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/chainstate/constants"},"Chain state constants")," tab on Selendra-Portal\nApps."),(0,r.kt)("admonition",{title:"Instructions for setting and clearing Identities",type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Explain how to clear Indentities")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Ledger app doesn't support the extrinsic for setting identity yet. As a workaround, create a\nprimary identity with an on-chain account and then using that primary identity, assign a\n",(0,r.kt)("a",{parentName:"p",href:"#sub-accounts"},"sub-identity")," to the Ledger stash.")),(0,r.kt)("h3",{id:"format-caveat"},"Format Caveat"),(0,r.kt)("p",null,"Please note the following caveat: because the fields support different formats, from raw bytes to\nvarious hashes, a UI has no way of telling how to encode a given field it encounters. The\nSelendra-Portal UI currently encodes the raw bytes it encounters as UTF8 strings, which makes these\nvalues readable on-screen. However, given that there are no restrictions on the values that can be\nplaced into these fields, a different UI may interpret them as, for example, IPFS hashes or encoded\nbitmaps. This means any field stored as raw bytes will become unreadable by that specific UI. As\nfield standards crystallize, things will become easier to use but for now, every custom\nimplementation of displaying user information will likely have to make a conscious decision on the\napproach to take, or support multiple formats and then attempt multiple encodings until the output\nmakes sense."),(0,r.kt)("h2",{id:"judgements"},"Judgements"),(0,r.kt)("p",null,"After a user injects their information on chain, they can request judgement from a registrar. Users\ndeclare a maximum fee that they are willing to pay for judgement, and registrars whose fee is below\nthat amount can provide a judgement."),(0,r.kt)("p",null,"When a registrar provides judgement, they can select up to six levels of confidence in their\nattestation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Unknown: The default value, no judgement made yet."),(0,r.kt)("li",{parentName:"ul"},"Reasonable: The data appears reasonable, but no in-depth checks (e.g. formal KYC process) were\nperformed (all the currently verified identities on-chain)."),(0,r.kt)("li",{parentName:"ul"},"Known Good: The registrar has certified that the information is correct (this step involves\nverification of state issued identity documents, and at the moment no account has known good\nidentity, with the exception of registrars)."),(0,r.kt)("li",{parentName:"ul"},"Out of Date: The information used to be good, but is now out of date."),(0,r.kt)("li",{parentName:"ul"},"Low Quality: The information is low quality or imprecise, but can be fixed with an update."),(0,r.kt)("li",{parentName:"ul"},"Erroneous: The information is erroneous and may indicate malicious intent.")),(0,r.kt)("p",null,'A seventh state, "fee paid", is for when a user has requested judgement and it is in progress.\nInformation that is in this state or "erroneous" is "sticky" and cannot be modified; it can only be\nremoved by the complete removal of the identity.'),(0,r.kt)("p",null,"Registrars gain trust by performing proper due diligence and would presumably be replaced for\nissuing faulty judgements."),(0,r.kt)("p",null,"To be judged after submitting your identity information, go to the\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/extrinsics"},"Extrinsics tab in the Selendra-Portal UI")," and select the\n",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," pallet, then ",(0,r.kt)("inlineCode",{parentName:"p"},"requestJudgement"),". For the ",(0,r.kt)("inlineCode",{parentName:"p"},"reg_index")," put the index of the registrar you\nwant to be judged by, and for the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_fee")," put the maximum you're willing to pay for these\nconfirmations."),(0,r.kt)("p",null,"If you don't know which registrar to pick, first check the available registrars by going to\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/chainstate"},"Chain State tab in the Selendra-Portal UI")," and selecting\n",(0,r.kt)("inlineCode",{parentName:"p"},"identity.registrars()")," to get the full list."),(0,r.kt)("admonition",{title:"Instructions for requesting and cancelling Identity judgements",type:"info"},(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Info about requesting and canceling Identity judgements")))),(0,r.kt)("h2",{id:"registrars"},"Registrars"),(0,r.kt)("p",null,"Registrars can set a fee for their services and limit their attestation to certain fields. For\nexample, a registrar could charge 1 SEL to\nverify one's legal name, email, and GPG key. When a user requests judgement, they will pay this fee\nto the registrar who provides the judgement on those claims. Users set a maximum fee they are\nwilling to pay and only registrars below this amount would provide judgement."),(0,r.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,r.kt)("p",null,"To become a registrar, submit a pre-image and proposal into\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),", then wait for people to vote on it. For best\nresults, write a post about your identity and intentions beforehand, and once the proposal is in the\nqueue ask people to endorse it so that it gets ahead in the referendum queue."),(0,r.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,r.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,r.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting a registrar",src:n(6273).Z,width:"841",height:"417"})),(0,r.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,r.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,r.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,r.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least\n",(0,r.kt)(o.Z,{network:"selendra",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"}),".\nYou can find out the minimum by querying the chain state under\n",(0,r.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/chainstate"},"Chain State")," -> Constants -> democracy ->\nminimumDeposit."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Submitting a proposal",src:n(7382).Z,width:"852",height:"337"})),(0,r.kt)("p",null,"At this point, SEL holders can endorse the motion. With enough endorsements, the motion will become\na referendum, which is then voted on. If it passes, users will be able to request judgement from\nthis registrar."),(0,r.kt)("h3",{id:"current-registrars"},"Current Registrars"),(0,r.kt)("p",null,"There are multiple registrars on Selendra.\nUnless no additional information is available here, you must reach out to specific registrars\nindividually if you want to be judged by those."),(0,r.kt)("p",null,"Registrar 0: ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("a",{parentName:"p",href:"https://registrar.selendra.org/"},"https://registrar.selendra.org/")," ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",{parentName:"p"},"Account"),":\nH4XieK3r3dq3VEvRtqZR7wN7a1UEkXxf14orRsEfdFjmgkF,  ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Fee"),": 0.04 SEL"),(0,r.kt)("blockquote",null,(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"WORK IN PROGRESS"))),(0,r.kt)("h2",{id:"sub-accounts"},"Sub Accounts"),(0,r.kt)("p",null,'Users can also link accounts by setting "sub accounts", each with its own identity, under a primary\naccount. The system reserves a bond for each sub account. An example of how you might use this would\nbe a validation company running multiple validators. A single entity, "My Staking Company", could\nregister multiple sub accounts that represent the ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn-keys"},"Stash accounts")," of each of their\nvalidators."),(0,r.kt)("p",null,"An account can have a maximum of 100 sub-accounts. Note that a deposit of\n",(0,r.kt)(o.Z,{network:"selendra",path:"consts.identity.subAccountDeposit",defaultValue:20053e7,filter:"humanReadable",mdxType:"RPC"}),"\nis required for every sub-account."),(0,r.kt)("admonition",{title:"Explainer article and video on setting sub-identities",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Here is the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181991-how-to-set-identities-for-sub-accounts"},"how to set sub-identities"),"\narticle and a ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0Yh1JYg3ZKU"},"video tutorial")," on setting\nsub-identities using Selendra-Portal UI")),(0,r.kt)("h2",{id:"clearing-and-killing-an-identity"},"Clearing and Killing an Identity"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Clearing:")," Users can clear their identity information and have their deposit returned. Clearing\nan identity also clears all sub accounts and returns their deposits."),(0,r.kt)("admonition",{title:'Visit the section "Clear an Identity" on',type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981"},"this support article")," for\nguidelines about clearing identities.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Killing:")," The Council can kill an identity that it deems erroneous. This results in a slash of\nthe deposit."))}m.isMDXComponent=!0},6273:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},7382:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},3971:()=>{},6601:()=>{}}]);