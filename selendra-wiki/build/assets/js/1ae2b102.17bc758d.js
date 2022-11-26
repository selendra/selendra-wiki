"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"build-protocol-info",title:"Selendra Protocol Information",sidebar_label:"Selendra Protocol",description:"Characteristics about the Selendra protocol, and what you need to consider when building.",keywords:["build","protocol","extrinsics","events","transaction"],slug:"../build-protocol-info"},l=void 0,c={unversionedId:"build/build-protocol-info",id:"build/build-protocol-info",title:"Selendra Protocol Information",description:"Characteristics about the Selendra protocol, and what you need to consider when building.",source:"@site/../docs/build/build-protocol-info.md",sourceDirName:"build",slug:"/build-protocol-info",permalink:"/docs/build-protocol-info",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/build/build-protocol-info.md",tags:[],version:"current",frontMatter:{id:"build-protocol-info",title:"Selendra Protocol Information",sidebar_label:"Selendra Protocol",description:"Characteristics about the Selendra protocol, and what you need to consider when building.",keywords:["build","protocol","extrinsics","events","transaction"],slug:"../build-protocol-info"},sidebar:"docs",previous:{title:"Integration Initiation",permalink:"/docs/build-integration"},next:{title:"Integrating Assets",permalink:"/docs/build-integrate-assets"}},d={},h=[{value:"Tokens",id:"tokens",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Cryptography",id:"cryptography",level:3},{value:"Existential Deposit",id:"existential-deposit",level:2},{value:"Free vs. Reserved vs. Locked vs. Vesting Balance",id:"free-vs-reserved-vs-locked-vs-vesting-balance",level:2},{value:"Extrinsics and Events",id:"extrinsics-and-events",level:2},{value:"Extrinsics",id:"extrinsics",level:3},{value:"Transaction Mortality",id:"transaction-mortality",level:3},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",level:3},{value:"Events",id:"events",level:3},{value:"Fees",id:"fees",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Runtime Upgrades",id:"runtime-upgrades",level:2},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Other Networks",id:"other-networks",level:2},{value:"Other F.A.Q.",id:"other-faq",level:2}],u={toc:h};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page serves as a high-level introduction to the Selendra protocol with terminology that may be\nspecific to Selendra, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."),(0,i.kt)("h2",{id:"tokens"},"Tokens"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token decimals:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Selndra (SEL): 18"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Base unit:"),' "Planck"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Balance type:")," ",(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/std/u128/index.html"},(0,i.kt)("inlineCode",{parentName:"a"},"u128")))),(0,i.kt)("h2",{id:"addresses"},"Addresses"),(0,i.kt)("p",null,"In Selendra (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,i.kt)("inlineCode",{parentName:"p"},"AccountId"),". This is often, but not always, the public key of a cryptographic key pair."),(0,i.kt)("p",null,'Selendra (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographic schemes and chains. It has much in common with Bitcoin\'s\nBase58Check format such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'),(0,i.kt)("p",null,"See the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/fundamentals/accounts-addresses-keys/#address-encoding-and-chain-specific-addresses"},"SS58 page"),"\nin the Substrate documentation for encoding information and a more comprehensive list of network\nprefixes."),(0,i.kt)("admonition",{title:"Do not use regular expressions (regex) to validate addresses",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Always verify using the prefix and checksum of the address. Substrate API Sidecar provides an\n",(0,i.kt)("inlineCode",{parentName:"p"},"accounts/{accountId}/validate")," path that returns a boolean ",(0,i.kt)("inlineCode",{parentName:"p"},"isValid")," response for a provided\naddress.")),(0,i.kt)("p",null,"Relevant SS58 prefixes for this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selendra: 204 ")),(0,i.kt)("h3",{id:"cryptography"},"Cryptography"),(0,i.kt)("p",null,"Selendra supports the following ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"cryptographic")," key pairs and\nsigning algorithms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ed25519"),(0,i.kt)("li",{parentName:"ul"},"Sr25519 - Schnorr signatures on the Ristretto group"),(0,i.kt)("li",{parentName:"ul"},"ECDSA signatures on secp256k1")),(0,i.kt)("p",null,"Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,i.kt)("em",{parentName:"p"},"hash of the public key")," in\norder to reduce the public key from 33 bytes to 32 bytes."),(0,i.kt)("h2",{id:"existential-deposit"},"Existential Deposit"),(0,i.kt)("p",null,"Selendra, and most Substrate-based chains, use an ",(0,i.kt)("em",{parentName:"p"},"existential deposit")," (ED) to prevent dust\naccounts from bloating chain state. If an account drops below the ED, it will be ",(0,i.kt)("em",{parentName:"p"},"reaped,")," i.e.\ncompletely removed from storage and the nonce reset. Selendra's ED is 1 SEL. You can always verify the existential deposit by checking the\n",(0,i.kt)("a",{parentName:"p",href:"https://portal.selendra.org/#/chainstate"},"chain state")," for the constant\n",(0,i.kt)("inlineCode",{parentName:"p"},"balances.existentialDeposit"),"."),(0,i.kt)("p",null,"Likewise, if you send a transfer with value below the ED to a new account, it will fail. Custodial\nwallets should set a minimum withdrawal amount that is greater than the ED to guarantee successful\nwithdrawals."),(0,i.kt)("p",null,"Wallets and custodians who track account nonces for auditing purposes should take care not to have\naccounts reaped, as users could refund the address and try making transactions from it. The Balances\npallet provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function that will return an error and abort rather than\nmake the transfer if doing so would result in reaping the sender's account."),(0,i.kt)("admonition",{title:"The existential deposit is a property of the Relay Chain",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Your account on the Relay Chain has no direct impact on parachains as you have seperate accounts on\neach parachain. Still, parachains are able to define an existential deposit of their own, but this\nis seperate to that of the Relay Chain ED.")),(0,i.kt)("admonition",{title:"Existential deposit for Cardamom",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Cardamom parachain has a lower existential deposit (0.1 SEL) than the Relay Chain (1 SEL) as\nwell as lower transaction fees. It is highly recommended to handle balance transfers on Cardamom.\nCardamom integration is discussed in the next page of the guide.")),(0,i.kt)("h2",{id:"free-vs-reserved-vs-locked-vs-vesting-balance"},"Free vs. Reserved vs. Locked vs. Vesting Balance"),(0,i.kt)("p",null,"Account balance information is stored in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_balances/struct.AccountData.html"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountData")),".\nPolkadot primarily deals with two types of balances: free and reserved."),(0,i.kt)("p",null,'For most operations, free balance is what you are interested in. It is the "power" of an account in\nstaking and governance, for example. Reserved balance represents funds that have been set aside by\nsome operation and still belong to the account holder, but cannot be used.'),(0,i.kt)("p",null,"Locks are an abstraction over free balance that prevent spending for certain purposes. Several locks\ncan operate on the same account, but they overlap rather than add. Locks are automatically added\nonto accounts when tasks are done on the network (e.g. leasing a parachain slot or voting), these\nare not customizable. For example, an account could have a free balance of 200 SEL with two locks on\nit: 150 SEL for ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," purposes and 100 SEL for ",(0,i.kt)("inlineCode",{parentName:"p"},"Reserve")," purposes. The account could not make a\ntransfer that brings its free balance below 150 SEL, but an operation could result in reserving SEL\nsuch that the free balance is below 150, but above 100 SEL."),(0,i.kt)("p",null,"Bonding tokens for staking and voting in governance referenda both utilize locks."),(0,i.kt)("p",null,"Vesting is another abstraction that uses locks on free balance. Vesting sets a lock that decreases\nover time until all the funds are transferable."),(0,i.kt)("p",null,"More info:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/frame_support/traits/trait.LockableCurrency.html"},"Lockable Currency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/frame_support/traits/struct.WithdrawReasons.html"},"Lock Withdraw Reasons")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_vesting/struct.VestingInfo.html"},"Vesting Info"))),(0,i.kt)("h2",{id:"extrinsics-and-events"},"Extrinsics and Events"),(0,i.kt)("h3",{id:"extrinsics"},"Extrinsics"),(0,i.kt)("p",null,"Extrinsics constitute information from the outside world and take on three forms:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inherents"),(0,i.kt)("li",{parentName:"ul"},"Signed Transactions"),(0,i.kt)("li",{parentName:"ul"},"Unsigned Transactions")),(0,i.kt)("p",null,"As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/main-docs/build/tx-weights-fees/"},"Substrate documentation"),"."),(0,i.kt)("p",null,"Inherents contain information that is not provably true, but validators agree on based on some\nmeasure of reasonability. For example, a timestamp cannot be proved, but validators can agree that\nit is within some delta of their system clock. Inherents are not gossiped on the network, and only\nblock authors insert them into blocks."),(0,i.kt)("p",null,"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."),(0,i.kt)("p",null,"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their SEL from the Ethereum SEL indicator contract to a new SEL address,\nthe new address doesn't yet have any funds with which to pay fees."),(0,i.kt)("h3",{id:"transaction-mortality"},"Transaction Mortality"),(0,i.kt)("p",null,'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'),(0,i.kt)("p",null,"The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,i.kt)("inlineCode",{parentName:"p"},"BlockHashCount"),", from the chain state or metadata. This parameter is set to 2400\nblocks (about four hours) at genesis. If the validity period is larger than the number of blocks\nstored on-chain, then the transaction will only be valid as long as there is a block to check it\nagainst, i.e. the minimum value of validity period and block hash count."),(0,i.kt)("p",null,'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE:")," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."),(0,i.kt)("h3",{id:"unique-identifiers-for-extrinsics"},"Unique Identifiers for Extrinsics"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The assumption that a transaction's hash is a unique identifier is the number one mistake that\nindexing services and custodians make. This error will cause major issues for your users. Make sure\nthat you read this section carefully.")),(0,i.kt)("p",null,"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."),(0,i.kt)("p",null,"Imagine this contrived example with a ",(0,i.kt)("a",{parentName:"p",href:"#existential-deposit"},"reaped account"),". The first and last\ntransactions are identical, and both valid."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Index"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Hash"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Origin"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Nonce"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Call"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Results"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 SEL to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A reaped")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"1"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x02"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account B"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 7 SEL to A"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A created (nonce = 0)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0x01"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Account A"),(0,i.kt)("td",{parentName:"tr",align:"center"},"0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Transfer 5 SEL to B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Successful transaction")))),(0,i.kt)("p",null,"In addition, not every extrinsic in a Substrate-based chain comes from an account as a\npublic/private key pair; Substrate, rather, has the concept of dispatch \u201corigin\u201d, which could be\ncreated from a public key account, but could also form from other means such as governance. These\norigins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."),(0,i.kt)("p",null,"The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_multisig/struct.Timepoint.html"},"reference a previous transaction"),"\nfrom the Multisig pallet."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,"While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,i.kt)("inlineCode",{parentName:"p"},"Reward")," event when\nclaiming staking rewards to tell the user how much the account was credited."),(0,i.kt)("p",null,"If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"utility.batch")," transaction with a\ntransfer inside of it). Only monitoring ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."),(0,i.kt)("h3",{id:"fees"},"Fees"),(0,i.kt)("p",null,"Polkadot uses weight-based fees that, unlike gas, are charged ",(0,i.kt)("em",{parentName:"p"},"pre-dispatch."),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,i.kt)("a",{parentName:"p",href:"/docs/learn-transaction-fees"},"transaction fee")," page for more info."),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("p",null,"Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"SCALE codec"),"."),(0,i.kt)("h2",{id:"runtime-upgrades"},"Runtime Upgrades"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"Runtime upgrades")," allow Polkadot to change the logic of the\nchain without the need for a hard fork. A hard fork would require node operators to manually upgrade\ntheir nodes to the latest runtime version. In a distributed system, this is a complex process to\ncoordinate and communicate. Polkadot can upgrade without a hard fork. The existing runtime logic is\nfollowed to update the Wasm runtime stored on the blockchain to a new version. The upgrade is then\nincluded in the blockchain itself, meaning that all the nodes on the network execute it."),(0,i.kt)("p",null,"Generally there is no need to upgrade your nodes manually before the runtime upgrade as they will\nautomatically start to follow the new logic of the chain. Nodes only need to be updated when the\nruntime requires new host functions or there is a change in networking or consensus."),(0,i.kt)("p",null,"Transactions constructed for a given runtime version will not work on later versions. Therefore, a\ntransaction constructed based on a runtime version will not be valid in later runtime versions. If\nyou don't think you can submit a transaction before the upgrade, it is better to wait and construct\nit after the upgrade takes place."),(0,i.kt)("p",null,"Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend\nfollowing the Polkadot releases and upgrading in a timely manner, especially for high priority or\ncritical releases."),(0,i.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,i.kt)("p",null,"The Selendra Relay Chain does not support smart contracts."),(0,i.kt)("h2",{id:"other-networks"},"Other Networks"),(0,i.kt)("p",null,"Besides running a private network, Selendra has other networks where you could test\ninfrastructure prior to deploying to the Selendra mainnet."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Selendra Testnet:")," Selendra Testnet uses the Selenrda runtime."),(0,i.kt)("h2",{id:"other-faq"},"Other F.A.Q."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Can an account's balance change without a corresponding, on-chain transaction?")),(0,i.kt)("p",null,"No, but not all balance changes are in a ",(0,i.kt)("em",{parentName:"p"},"transaction,")," some are in ",(0,i.kt)("em",{parentName:"p"},"events.")," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,i.kt)("em",{parentName:"p"},"locking")," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'What chain depth is considered "safe"?')),(0,i.kt)("p",null,"Selendra uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Note that block production and finality are isolated processes in Selendra, and the chain can have a\nlong unfinalized head."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Do users need to interact with any smart contracts?")),(0,i.kt)("p",null,"No, users interact directly with the chain's logic."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Does Selendra have state rent?")),(0,i.kt)("p",null,"No, Selendra uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is an external source to see the current chain height?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://portal.selendra.org/#/explorer"},"Selendra-Portal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://explorer.selendra.org/"},"Selendra block explorer"))))}p.isMDXComponent=!0}}]);