(self.webpackChunk=self.webpackChunk||[]).push([[4620],{7940:(e,a,t)=>{"use strict";t.d(a,{Z:()=>p});var n=t(4165),o=t(5861),r=t(7294),i=t(3444),s=t(7974),l=t(7425);function h(e,a,t){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,n.Z)().mark((function e(a,t,o){var r,l,h,c,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=a,e.next="selendra"===e.t0?5:7;break;case 5:return r="wss://rpc.selendra.org",e.abrupt("break",8);case 7:console.log("Unknown socket url provided, no connection made.");case 8:if(void 0!==r){e.next=12;break}return e.abrupt("return");case 12:return h=new i.U(r),e.next=15,s.G.create({provider:h});case 15:c=e.sent,(d=t.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=d[0],e.next="consts"===e.t1?21:"query"===e.t1?23:28;break;case 21:return l=c.toString(),e.abrupt("break",29);case 23:return e.next=25,c();case 25:return l=(l=e.sent).toString(),e.abrupt("break",29);case 28:console.log("Unknown path prefix ("+d[0]+") in "+t);case 29:return e.abrupt("return",l);case 30:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,a,t,n){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var a=e.network,t=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,c=(0,r.useState)(""),p=c[0],u=c[1];return a=a.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?d(i.toString(),l,a,u):u(i.toString());var e=void 0;if("selendra"===a)e="wss://rpc.selendra.org";else console.log("Unknown network provided, "+a);if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(a,t,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(o,l,a,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),p}},7425:e=>{var a={selendra:{precision:1e10,symbol:"SEL"}};e.exports={HumanReadable:function(e,t,n){var o=void 0;"selendra"===t?(o=3,e=parseFloat(e),n((e=Number.isInteger(e/a[t].precision)?e/a[t].precision+" "+a[t].symbol:(e/a[t].precision).toFixed(o)+" "+a[t].symbol).toString())):console.log("Unknown network type found when attempting to apply 'Human Readable' filter")},BlocksToDays:function(e,a){a((e=6*e/86400).toString())}}},7384:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>h,toc:()=>d});var n=t(7462),o=t(3366),r=(t(7294),t(3905)),i=(t(7940),["components"]),s={id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"Frequently Asked Questions (FAQs)",description:"Some FAQs to help you conquer your experience with Selendra.",keywords:["FAQ","questions"],slug:"../faq"},l=void 0,h={unversionedId:"general/faq",id:"general/faq",title:"Frequently Asked Questions (FAQs)",description:"Some FAQs to help you conquer your experience with Selendra.",source:"@site/../docs/general/faq.md",sourceDirName:"general",slug:"/faq",permalink:"/docs/faq",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/general/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"Frequently Asked Questions (FAQs)",description:"Some FAQs to help you conquer your experience with Selendra.",keywords:["FAQ","questions"],slug:"../faq"},sidebar:"docs",previous:{title:"How to Protect Yourself from Scams",permalink:"/docs/learn-scams"},next:{title:"Grants",permalink:"/docs/grants"}},c={},d=[{value:"Selendra Launch",id:"selendra-launch",level:2},{value:"Selendra Roadmap",id:"selendra-roadmap",level:2},{value:"Validators",id:"validators",level:2},{value:"How do I apply to be a validator?",id:"how-do-i-apply-to-be-a-validator",level:3},{value:"How are validators rewarded?",id:"how-are-validators-rewarded",level:3},{value:"What is the minimum stake necessary to be elected as an active validator?",id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator",level:3},{value:"Relay Chain",id:"relay-chain",level:2},{value:"What is the block time of the Relay Chain?",id:"what-is-the-block-time-of-the-relay-chain",level:3},{value:"Does Selendra have smart contracts?",id:"does-selendra-have-smart-contracts",level:3},{value:"What is the inflation rate of the SEL?",id:"what-is-the-inflation-rate-of-the-sel",level:3},{value:"Governance",id:"governance",level:2},{value:"What prevents Selendra governance from becoming plutocratic?",id:"what-prevents-selendra-governance-from-becoming-plutocratic",level:3},{value:"Parachains",id:"parachains",level:2},{value:"How do parachain economics work?",id:"how-do-parachain-economics-work",level:3},{value:"Are parachains ephemeral? What happens when a parachain loses the next auction?",id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction",level:3},{value:"Networking",id:"networking",level:2},{value:"What is libp2p?",id:"what-is-libp2p",level:3},{value:"Does Selendra use libp2p?",id:"does-selendra-use-libp2p",level:3},{value:"How does libp2p differ from IPFS?",id:"how-does-libp2p-differ-from-ipfs",level:3}],p={toc:d};function u(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This FAQ focuses on technical questions for users interested in developing applications for\nSelendra. If you have a more general question, you may wish to search for the answer on our support\n",(0,r.kt)("a",{parentName:"p",href:"https://support.selendra.org/support/home"},"Knowledge Base")," or the main\n",(0,r.kt)("a",{parentName:"p",href:"https://selendra.org/faq"},"Selendra network FAQ"),". If you have a question that is not answered,\nplease feel free to ask on the Selendra Watercooler\n",(0,r.kt)("a",{parentName:"p",href:"https://support.selendra.org"},"Selendra Support"),".")),(0,r.kt)("h2",{id:"selendra-launch"},"Selendra Launch"),(0,r.kt)("p",null,"The Genesis block of the Selendra network was launched on Month Date, 2020 at 00:00:00 UTC, as a Proof\nof Authority (PoA) network, with governance controlled by the single Sudo (super-user) account.\nDuring this time, validators started joining the network and signaling their intention to\nparticipate in consensus."),(0,r.kt)("p",null,"transitioning the governance of the chain into the hands of the token (SEL) holders. This is the\npoint where Selendra became decentralized."),(0,r.kt)("h2",{id:"selendra-roadmap"},"Selendra Roadmap"),(0,r.kt)("p",null,"For more information on the Selendra roadmap please visit the\n",(0,r.kt)("a",{parentName:"p",href:"https://selendra.org/technology/#roadmap"},"official Selendra website"),"."),(0,r.kt)("h2",{id:"validators"},"Validators"),(0,r.kt)("h3",{id:"how-do-i-apply-to-be-a-validator"},"How do I apply to be a validator?"),(0,r.kt)("p",null,"There is no central authority that decides on validators, so there is not per se an ",(0,r.kt)("em",{parentName:"p"},"application"),"\nthat you can fill out. Registering as a validator is permissionless; in order to become one you must\nonly set up a validator node and mark your intention to validate on chain. For detailed instruction\non how to do this you can consult the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-selendra"},"Selendra validator guide")," for validating\non Selendra."),(0,r.kt)("p",null,"However, once you've set up a validator and have registered your intention it does not mean that you\nwill be included in the ",(0,r.kt)("em",{parentName:"p"},"active set")," right away. The validators are elected to the active set based\non the results of an election algorithm known as ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".\nPhragm\xe9n's method tries to accomplish two goals: 1) select ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," members from a larger set based on\nstake-weighted votes and 2) equalize the stake backing each validator as much as possible."),(0,r.kt)("h3",{id:"how-are-validators-rewarded"},"How are validators rewarded?"),(0,r.kt)("p",null,"Validators are rewarded from the inflation of the Relay Chain, transaction fees, and tips. However,\nthey only take a percentage of the former two. More details can be read on the page for\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout"},"validator payouts"),"."),(0,r.kt)("h3",{id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"What is the minimum stake necessary to be elected as an active validator?"),(0,r.kt)("p",null,"The minimum stake that is necessary to be elected as an active validator is dynamic and can change\nover time. It depends not only on how much stake is being put behind each validator, but also the\nsize of the active set and how many validators are waiting in the pool."),(0,r.kt)("p",null,"There are a few ways to estimate the minimum stake."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election"},"Offline Election"),"\ncan provide exact results of running an election on the current set of validators using the same\nRust code that is ran in Selendra.")),(0,r.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,r.kt)("h3",{id:"what-is-the-block-time-of-the-relay-chain"},"What is the block time of the Relay Chain?"),(0,r.kt)("p",null,"Selendra networks are currently operating at a rate of one block every six seconds."),(0,r.kt)("p",null,"This may be changed in the future. It may go as low as two to three seconds after optimizations, or\npotentially increase in order to handle the capacity of the parachain networking in a live\nenvironment."),(0,r.kt)("h3",{id:"does-selendra-have-smart-contracts"},"Does Selendra have smart contracts?"),(0,r.kt)("p",null,"No - and yes. The Selendra Relay Chain does not implement smart contracts natively. The reason for\nnot having smart contracts on the Relay Chain is part of the design philosophy for Selendra that\ndictates that the Relay Chain should be the minimal logic required to accomplish its job."),(0,r.kt)("p",null,"However, Selendra will be a platform for other chains that ",(0,r.kt)("em",{parentName:"p"},"do")," implement smart contracts. It's\npossible for parachains to enable smart contract functionality and then benefit from the security\nand interoperability features of Selendra. Additionally, existing smart contract chains can connect\nto Selendra as a parachain, or via a bridge."),(0,r.kt)("p",null,"While the Selendra Relay Chain does not implement smart contracts directly, undoubtedly there will\nbe parachains that do. So it's better to say that the Selendra ",(0,r.kt)("em",{parentName:"p"},"ecosystem"),' has smart contracts\nversus "Selendra has smart contracts."'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/selendra/indranet"},"Indranet")," is a parachain that focus on smart contract for Selendra."),(0,r.kt)("h3",{id:"what-is-the-inflation-rate-of-the-sel"},"What is the inflation rate of the SEL?"),(0,r.kt)("p",null,"The inflation rate is approximately 10% per year."),(0,r.kt)("p",null,"A portion of the inflation is rewarded to validators for performing their duties, while another\nportion may go directly to the treasury. The exact percentage that goes into both varies and is\nbased on the amount of SEL that are staked. Please see the article on\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking/#inflation"},"inflation")," for more information."),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("p",null,"It is fair to say that the field of on-chain blockchain governance is still new, and no one can\nclaim to know exactly what the optimal version of on-chain governance is yet. However, Selendra\ntakes a brave step forward in pioneering thought-through mechanisms for evolving a blockchain."),(0,r.kt)("p",null,"Blockchains need a method to adapt and evolve. Therefore, an on-chain governance system was\nnecessary for the long-term success of Selendra. Ultimately, it is the token holders that are\nresponsible for preventing Selendra's governance from failing by using their economic value and\nconviction to sway the progression of the protocol."),(0,r.kt)("h3",{id:"what-prevents-selendra-governance-from-becoming-plutocratic"},"What prevents Selendra governance from becoming plutocratic?"),(0,r.kt)("p",null,"A savvy reader might have noticed that the answer to the previous question endowed the token holder\nwith the ultimate responsibility to ensure that Selendra's governance does not fail. By following\nthe train of this assertion, one might assume that Selendra's governance is susceptible to becoming\nruled by a few large token holders (called ",(0,r.kt)("em",{parentName:"p"},"whales")," in trading parlance) and therefore become a mere\nplutocracy (rule of the rich)."),(0,r.kt)("p",null,"There are several other mechanisms that are built-in to the governance system to resist this\nplutocratic tendency. One of these mechanisms is called conviction voting, and imbues greater voting\npower to token holders who are willing to lock their tokens on the protocol for longer lengths of\ntime. Longer lock-ups display ",(0,r.kt)("em",{parentName:"p"},"conviction")," in a vote. Conviction voting could allow a highly\ndetermined minority to overrule the vote of an apathetic majority in certain situations. Another\nmechanism is known as Adaptive Quorum Biasing. This makes proposals have a varying threshold for\napproval or rejection based on what part of the governance protocol the proposal originated in. For\ndetails on the subtleties of Selendra's governance system, please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance page"),"."),(0,r.kt)("h2",{id:"parachains"},"Parachains"),(0,r.kt)("h3",{id:"how-do-parachain-economics-work"},"How do parachain economics work?"),(0,r.kt)("p",null,"Parachains have the flexibility to implement their own monetary system or incentive structure for\ncollators. However, this is not strictly necessary. Since the collator's job is to continue to give\nrecent state transitions to the validators on the Relay Chain who validate each transition, the\nsecurity of the parachain and the Selendra network is completely separate from parachain economics.\nParachains need collators to continue to progress, so it wouldn't be unreasonable to see them\nincentivize collator nodes in some way, but the specific mechanism is completely up to parachain\nimplementers."),(0,r.kt)("h3",{id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction"},"Are parachains ephemeral? What happens when a parachain loses the next auction?"),(0,r.kt)("p",null,"Parachains are not ephemeral. As long as someone is keeping the data for a parachain, the parachain\ncan move between being a parachain, a parathread, or a separate sovereign chain at different points\nof its lifetime. Especially with parathreads, parachains can be decommissioned to only produce\nblocks when their usage and throughput makes it necessary."),(0,r.kt)("p",null,"When a parachain loses an auction for renewal, that parachain has a few options. In most cases,\nbecoming a parathread instead would be a suitable choice. Parathreads are still secured by the Relay\nChain, but don't need to hold a parachain slot and can produce a block when its economically\nfeasible for them. For more on parachains please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains page")," and for more on parathreads see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"the parathreads page"),"."),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("h3",{id:"what-is-libp2p"},"What is libp2p?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://libp2p.io"},"Libp2p")," is a modular and extensible networking stack that is used by IPFS,\nSubstrate, and many other projects. It is a collection of peer-to-peer protocols for finding peers\nand connecting to them. Its modules have logic for content routing, peer routing, peer discovery,\ndifferent transports, and NAT traversals. It is intended to be used by applications for building\nlarge scale peer-to-peer networks by only selecting the parts of the protocol suite that are needed."),(0,r.kt)("p",null,"The Rust implementation of the specification was built and primarily maintained by a team of\ncontributors at Parity Technologies. The Go and JavaScript versions are maintained by Protocol Labs\nas well as community contributors. A ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-libp2p"},"Nim")," version of the\nlibrary also exists. Libp2p as a whole is an open source project that is actively developed and\nexpanded on various code repositories hosted on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/libp2p"},"their GitHub"),"."),(0,r.kt)("h3",{id:"does-selendra-use-libp2p"},"Does Selendra use libp2p?"),(0,r.kt)("p",null,"Yes, since Selendra is built with Substrate. Substrate uses a networking protocol that is based on\nlibp2p (specifically the Rust libp2p library). However, Substrate uses a mix of standard libp2p\nprotocols and protocols that are homegrown and not official libp2p standards. Of the standards\nprotocols, those which are shared with other implementations of libp2p such as IPFS, are\nconnection-checking (ping), asking for information on a peer (identity), and Kademlia random walks\n(kad)."),(0,r.kt)("p",null,"Of the protocols that are custom to Substrate, there are the legacy Substrate stream, a\nrequest-response for getting information on blocks (sync), a light client protocol, a notification\nprotocol for transactions, and block announcement. For detailed information on how Substrate uses\nlibp2p and the standard and custom protocols, please see the\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/sc_network/index.html"},"networking documentation"),"."),(0,r.kt)("h3",{id:"how-does-libp2p-differ-from-ipfs"},"How does libp2p differ from IPFS?"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"Interplanetary File System"),' (IPFS) is a peer-to-peer hypermedia protocol used\nprimarily for storage of files. It allows one to upload a file onto the network and share it with\nits content addressable URI. IPFS, like Substrate, is an application of libp2p and exists higher on\nthe technology stack. Although both IPFS and Substrate use libp2p, it cannot be said that Substrate\n"uses" IPFS since besides sharing the underlying library for networking there is no native\nintegration between the two applications.'))}u.isMDXComponent=!0},3971:()=>{},6601:()=>{}}]);