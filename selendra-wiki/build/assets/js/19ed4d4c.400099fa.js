"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4355],{3905:(e,a,t)=>{t.d(a,{Zo:()=>h,kt:()=>m});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,p=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return t?n.createElement(p,r(r({ref:a},h),{},{components:t})):n.createElement(p,r({ref:a},h))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1191:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(7462),o=t(3366),s=(t(7294),t(3905)),r=["components"],i={id:"learn-comparisons-cosmos",title:"Selendra and Cosmos",sidebar_label:"Cosmos",description:"Learn about the differences between Selendra and Cosmos.",keywords:["cosmos","selendra","interoperability","interoperability hub"],slug:"../learn-comparisons-cosmos"},l=void 0,c={unversionedId:"learn/learn-comparisons-cosmos",id:"learn/learn-comparisons-cosmos",title:"Selendra and Cosmos",description:"Learn about the differences between Selendra and Cosmos.",source:"@site/../docs/learn/learn-comparisons-cosmos.md",sourceDirName:"learn",slug:"/learn-comparisons-cosmos",permalink:"/docs/learn-comparisons-cosmos",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/learn/learn-comparisons-cosmos.md",tags:[],version:"current",frontMatter:{id:"learn-comparisons-cosmos",title:"Selendra and Cosmos",sidebar_label:"Cosmos",description:"Learn about the differences between Selendra and Cosmos.",keywords:["cosmos","selendra","interoperability","interoperability hub"],slug:"../learn-comparisons-cosmos"},sidebar:"docs",previous:{title:"learn-comparisons-ethereum-2",permalink:"/docs/learn/learn-comparisons-ethereum-2"},next:{title:"Selendra Launch Phases",permalink:"/docs/learn-launch"}},h={},d=[{value:"Model",id:"model",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Selendra",id:"selendra",level:3},{value:"Cosmos",id:"cosmos",level:3},{value:"Consensus",id:"consensus",level:2},{value:"Staking Mechanics",id:"staking-mechanics",level:2},{value:"Message Passing",id:"message-passing",level:2},{value:"Governance",id:"governance",level:2},{value:"Upgrades",id:"upgrades",level:2},{value:"Development Framework",id:"development-framework",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:d};function m(e){var a=e.components,t=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Selendra and Cosmos are both protocols that provide an interface for different state machines to\ncommunicate with each other. Both protocols are predicated on the thesis that the future will have\nmultiple blockchains that need to interoperate with each other rather than individual blockchains\nexisting in isolation."),(0,s.kt)("h2",{id:"model"},"Model"),(0,s.kt)("p",null,'Selendra uses a sharded model where each shard in the protocol has an abstract state transition\nfunction (STF). Selendra uses WebAssembly (Wasm) as a "meta-protocol". A shard\'s STF can be abstract\nas long as the validators on Selendra can execute it within a Wasm environment.'),(0,s.kt)("p",null,'The shards of Selendra are called "',(0,s.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains"),"\". Every time a parachain wants\nto make a state transition, it submits a block (batch of state transitions) along with a state proof\nthat Selendra validators can independently verify. These blocks are finalized for the parachains\nwhen they are finalized by Selendra's Relay Chain, the main chain of the system. As such, all\nparachains share state with the entire system, meaning that a chain re-organization of a single\nparachain would require a re-organization of all parachains and the Relay Chain."),(0,s.kt)("p",null,'Cosmos uses a bridge-hub model that connects Tendermint chains. The system can have multiple hubs\n(the primary being the "Cosmos Hub"), but each hub connects a group of exterior chains, called\n"zones". Each zone is responsible for securing the chain with a sufficiently staked and\ndecentralized validator set. Zones send messages and tokens to each other via the hub using a\nprotocol called Inter-Blockchain Communication (IBC). As zones do not share state, a re-organization\nof one zone would not re-organize other zones, meaning each message is trust-bound by the\nrecipient\'s trust in the security of the sender.'),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("h3",{id:"selendra"},"Selendra"),(0,s.kt)("p",null,"Selendra has a Relay Chain acting as the main chain of the system. All validators in Selendra are on\nthe Relay Chain. Parachains have collators, who construct and propose parachain blocks to\nvalidators. Collators don't have any security responsibilities, and thus do not require a robust\nincentive system. Collators can submit a single parachain block for every Relay Chain block every 6\nseconds. Once a parachain submits a block, validators perform a series of availability and validity\nchecks before committing it to the final chain."),(0,s.kt)("p",null,"Parachain slots are limited, and thus parachain candidates participate in an auction to reserve a\nslot for up to two years. For chains that do not have the funding for a parachain slot or the\nnecessity to execute with a six-second block time, Selendra also has\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathreads"),". Parathreads execute on a pay-as-you-go basis, only paying to\nexecute a block when they need to."),(0,s.kt)("p",null,"In order to interact with chains that want to use their own finalization process (e.g. Bitcoin),\nSelendra has ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"bridge parachains")," that offer two-way compatibility."),(0,s.kt)("h3",{id:"cosmos"},"Cosmos"),(0,s.kt)("p",null,'Cosmos has a main chain called a "Hub" that connects other blockchains called "zones". Cosmos can\nhave multiple hubs, but this overview will consider a single hub. Each zone must maintain its own\nstate and therefore have its own validator community. When a zone wants to communicate with another\nzone, it sends packets over IBC. The Hub maintains a multi-token ledger of token balances\n(non-transfer messages are relayed but their state not stored in the Hub).'),(0,s.kt)("p",null,"Zones monitor the state of the Hub with a light client, but the Hub does not track zone states.\nZones must use a deterministic finality algorithm (currently, all use Tendermint) and implement the\nIBC interface to be able to send messages to other chains through the Hub."),(0,s.kt)("p",null,'Cosmos can also interact with external chains by using "peg zones", which are similar to bridged\nparachains.'),(0,s.kt)("h2",{id:"consensus"},"Consensus"),(0,s.kt)("p",null,"Selendra uses a hybrid ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-consensus"},"consensus"),' protocol with two sub-protocols: BABE and\nGRANDPA, together called "Fast Forward". BABE (Blind Assignment for Blockchain Extension) uses a\nverifiable random function (VRF) to assign slots to validators and a fallback round-robin pattern to\nguarantee that each slot has an author. GRANDPA (GHOST-based Recursive Ancestor Deriving Prefix\nAgreement) votes on chains, rather than individual blocks. Together, BABE can author candidate\nblocks to extend the finalized chain and GRANDPA can finalize them in batches (up to millions of\nblocks at a time).'),(0,s.kt)("p",null,"This isolation of tasks provides several benefits. First, it represents a reduction in transport\ncomplexity for both block production and finalization. BABE has linear complexity, making it easy to\nscale to thousands of block producers with low networking overhead. GRANDPA has quadratic\ncomplexity, but is reduced by a factor of the latency, or how many blocks it finalizes in one batch."),(0,s.kt)("p",null,"Second, having the capacity to extend the chain with unfinalized blocks allows other validators to\nperform extensive availability and validity checks to ensure that no invalid state transitions make\ntheir way into the final chain."),(0,s.kt)("p",null,"Cosmos (both the Hub and the zones) uses Tendermint consensus, a round-robin protocol that provides\ninstant finality. Block production and finalization are on the same path of the algorithm, meaning\nit produces and finalizes one block at a time. Because it is a PBFT-based algorithm (like GRANDPA),\nit has quadratic transport complexity, but can only finalize one block at a time."),(0,s.kt)("h2",{id:"staking-mechanics"},"Staking Mechanics"),(0,s.kt)("p",null,"Selendra uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"Nominated Proof of Stake (NPoS)")," to select validators using the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"sequential Phragm\xe9n algorithm"),". The validator set size is set by governance\n(1_000 validators planned) and stakers who do not want to run validator infrastructure can nominate\nup to 16 validators. Phragm\xe9n's algorithm selects the optimal allocation of stake, where optimal is\nbased on having the most evenly staked set."),(0,s.kt)("p",null,"All validators in Selendra have the same weight in the consensus protocols. That is, to reach\ngreater than 2/3 of support for a chain, more than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators")," must commit to it, rather\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake.")," Likewise, validator rewards are tied to their activity, primarily block\nproduction and finality justifications, not their amount of stake. This creates an incentive to\nnominate validators with lower stakes, as they will earn higher returns on their staked tokens."),(0,s.kt)("p",null,"The Cosmos Hub uses Bonded Proof of Stake (a variant of Delegated PoS) to elect validators. Stakers\nmust bond funds and submit a delegate transaction for each validator they would like to delegate to\nwith the number of tokens to delegate. The Cosmos Hub plans to support up to 300 validators."),(0,s.kt)("p",null,"Consensus voting and rewards are both stake-based in Cosmos. In the case of consensus voting, more\nthan 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"stake")," must commit, rather than 2/3 of the ",(0,s.kt)("em",{parentName:"p"},"validators.")," Likewise, a validator with\n10% of the total stake will earn 10% of the rewards."),(0,s.kt)("p",null,"Finally, in Cosmos, if a staker does not vote in a governance referendum, the validators assume\ntheir voting power. Because of this, many validators in Cosmos have zero commission in order to\nacquire more control over the protocol. In Selendra, governance and staking are completely disjoint;\nnominating a validator does not assign any governance voting rights to the validator."),(0,s.kt)("h2",{id:"message-passing"},"Message Passing"),(0,s.kt)("p",null,"Selendra uses ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"Cross-Consensus Message Passing Format (XCM)")," for parachains to send\narbitrary messages to each other. Parachains open connections with each other and can send messages\nvia their established channels. ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," are full nodes of parachains and full\nnodes of the Relay Chain, so collator nodes are a key component of message passing. Messages do not\npass through the Relay Chain, only proofs of post and channel operations (open, close, etc.) go into\nthe Relay Chain. This enhances scalability by keeping data on the edges of the system."),(0,s.kt)("p",null,"In the case of a chain re-organization, messages can be rolled back to the point of the\nre-organization based on the proofs of post in the Relay Chain. The shared state amongst parachains\nmeans that messages are free from trust bounds; they all operate in the same context."),(0,s.kt)("p",null,"Cosmos uses a cross-chain protocol called Inter-Blockchain Communication (IBC). The current\nimplementation of Cosmos uses the Hub to pass tokens between zones. However, Cosmos does have a new\nspecification for passing arbitrary data. Nonetheless, as chains do not share state, receiving\nchains must trust the security of a message's origin."),(0,s.kt)("h2",{id:"governance"},"Governance"),(0,s.kt)("p",null,"Selendra has a multicameral ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," system with several avenues to pass\nproposals. All proposals ultimately pass through a public referendum, where the majority of tokens\ncan always control the outcome. For low-turnout referenda, Selendra uses adaptive quorum biasing to\nset the passing threshold. Referenda can contain a variety of proposals, including fund allocation\nfrom an on-chain ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury"),". Decisions get enacted on-chain and are binding and\nautonomous."),(0,s.kt)("p",null,"Selendra has several on-chain, permissionless bodies. The primary one is the Council, which\ncomprises a set of accounts that are elected in Phragm\xe9n fashion. The Council represents minority\ninterests and as such, proposals that are unanimously approved of by the Council have a lower\npassing threshold in the public referendum. There is also a Technical Committee for making technical\nrecommendations (e.g. emergency runtime upgrade to fix a bug)."),(0,s.kt)("p",null,"Cosmos uses coin-vote signaling to pass referenda. The actual enactment of governance decisions is\ncarried out via a protocol fork, much like other blockchains. All token holders can vote, however,\nif a delegator abstains from a vote then the validator they delegate to assume their voting power.\nValidators in Selendra do not receive any voting power based on their nominators."),(0,s.kt)("h2",{id:"upgrades"},"Upgrades"),(0,s.kt)("p",null,"Using the Wasm meta-protocol, Selendra can enact chain upgrades and successful proposals without a\nhard fork. Anything that is within the STF, the transaction queue, or off-chain workers can be\nupgraded without forking the chain."),(0,s.kt)("p",null,"As Cosmos is not based on a meta-protocol, it must enact upgrades and proposals via a normal forking\nmechanism."),(0,s.kt)("h2",{id:"development-framework"},"Development Framework"),(0,s.kt)("p",null,"Both Cosmos and Selendra are designed such that each chain has its STF and both provide support for\nsmart contracts in both Wasm and the Ethereum Virtual Machine (EVM). Selendra provides an\nahead-of-time Wasm compiler as well as an interpreter (Wasmi) for execution, while Cosmos only\nexecutes smart contracts in an interpreter."),(0,s.kt)("p",null,"Cosmos chains can be developed using the Cosmos SDK, written in Go. The Cosmos SDK contains about 10\nmodules (e.g. staking, governance, etc.) that can be included in a chain's STF. The SDK builds on\ntop of Tendermint."),(0,s.kt)("p",null,"The primary development framework for parachains is ",(0,s.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),", written in\nRust. Substrate comes with FRAME, a set of about 40 modules (called \"pallets\") to use in a chain's\nSTF. Beyond simply using the pallets, Substrate adds a further layer of abstraction that allows\ndevelopers to compose FRAME's pallets by adding custom modules and configuring the parameters and\ninitial storage values for the chain."),(0,s.kt)("admonition",{title:"Selendra can support an STF written in any language",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"So long as it compiles to its meta-protocol Wasm. Likewise, it could still use the Substrate client\n(database, RPC, networking, etc.); it only needs to implement the primitives at the interface.")),(0,s.kt)("h2",{id:"conclusion"},"Conclusion"),(0,s.kt)("p",null,"Selendra was designed on the principle that scalability and interoperability require shared\nvalidation logic to create a trust-free environment. As more blockchains are developed, their\nsecurity must be cooperative, not competitive. Therefore, Selendra provides the shared validation\nlogic and security processes across chains so that they can interact knowing that their\ninterlocutors execute within the same security context."),(0,s.kt)("p",null,"The Cosmos network uses a bridge-hub model to connect chains with independent security guarantees,\nmeaning that inter-chain communication is still bounded by the trust that the receiving chain has in\nthe sending chain."))}m.isMDXComponent=!0}}]);