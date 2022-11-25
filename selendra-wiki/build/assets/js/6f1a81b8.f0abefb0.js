"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||o;return n?i.createElement(m,r(r({ref:t},h),{},{components:n})):i.createElement(m,r({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],l={id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},s=void 0,c={unversionedId:"maintain/maintain-guides-how-to-chill",id:"maintain/maintain-guides-how-to-chill",title:"How to Chill",description:"Steps on chilling as a network participant.",source:"@site/../docs/maintain/maintain-guides-how-to-chill.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-chill",permalink:"/docs/maintain-guides-how-to-chill",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/maintain/maintain-guides-how-to-chill.md",tags:[],version:"current",frontMatter:{id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},sidebar:"docs",previous:{title:"Monitor your node",permalink:"/docs/maintain-guides-how-to-monitor-your-node"},next:{title:"How to Stop Validating",permalink:"/docs/maintain-guides-how-to-stop-validating"}},h={},d=[{value:"Consideration for Staking Election",id:"consideration-for-staking-election",level:2},{value:"Chilling as a Nominator",id:"chilling-as-a-nominator",level:2},{value:"Chilling as a Validator",id:"chilling-as-a-validator",level:2},{value:"Involuntary Chills",id:"involuntary-chills",level:2},{value:"Chill Other",id:"chill-other",level:2}],u={toc:d};function p(e){var t=e.components,l=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Staking bonds can be in any of the three states: validating, nominating, or chilled (neither validating nor nominating). When a staker wants to temporarily pause their active engagement in staking but does not want to unbond their funds, they can choose to "chill" their involvement and keep their funds bonded.'),(0,o.kt)("p",null,'An account can step back from participating in active staking by clicking "Stop" under the Network >\nStaking > Account actions page in ',(0,o.kt)("a",{parentName:"p",href:"https://portal.selendra.org"},"SelendraJS Apps")," or by calling the\n",(0,o.kt)("inlineCode",{parentName:"p"},"chill")," extrinsic in the ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_staking/pallet/enum.Call.html#variant.chill"},"staking pallet"),". When an account chooses to chill, it\nbecomes inactive in the next era. The call must be signed by the ",(0,o.kt)("em",{parentName:"p"},"controller")," account, not the\n",(0,o.kt)("em",{parentName:"p"},"stash"),"."),(0,o.kt)("admonition",{title:"Primer on stash and controller accounts",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you need a refresher on the different responsibilities of the stash and controller account when\nstaking, take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-staking#accounts"},"accounts")," section in the general staking guide.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"staking",src:n(1161).Z,width:"793",height:"310"})),(0,o.kt)("h2",{id:"consideration-for-staking-election"},"Consideration for Staking Election"),(0,o.kt)("p",null,"A bond that is actively participating in staking but chilled would continue to participate in staking for the rest of the current era. If the bond was chilled in sessions 1 through 4 and continues to be chilled for the rest of the era, it would NOT be selected for election in the next era. If a bond was chilled for the entire session 5, it would not be considered in the next election. If the bond was chilled in session 6, its participation in the next era's election would depend on its state in session 5."),(0,o.kt)("h2",{id:"chilling-as-a-nominator"},"Chilling as a Nominator"),(0,o.kt)("p",null,"When you chill after being a nominator, your nominations will be reset. This means that when you decide to start nominating again you will need to select validators to nominate once again. These can be the same validators if you prefer, or, a completely new set. Just be aware - your nominations will not persist across chills."),(0,o.kt)("p",null,"Your nominator will remain bonded when it is chilled. When you are ready to nominate again, you will not need to go through the whole process of bonding again, rather, you will issue a new nominate call that specifies the new validators to nominate."),(0,o.kt)("h2",{id:"chilling-as-a-validator"},"Chilling as a Validator"),(0,o.kt)("p",null,"When you voluntarily chill after being a validator, your nominators will remain. As long as your nominators make no action, you will still have the nominations when you choose to become an active validator once again. You bond however would not be listed as a nominable validator thus any nominators issuing new or revisions to existing nominations would not be able to select your bond."),(0,o.kt)("p",null,"When you become an active validator, you will also need to reset your validator preferences (commission, etc.). These can be configured as the same values set previously or something different."),(0,o.kt)("h2",{id:"involuntary-chills"},"Involuntary Chills"),(0,o.kt)("p",null,"If a validator was unresponsive for an entire session, the validator bond would be chilled in a process known as ",(0,o.kt)("em",{parentName:"p"},"involuntary chilling.")," When a validator has been involuntarily chilled, it may restrict the validator from being selected in the next election depending on the session in which it was chilled (see considerations above). A chilled validator may re-declare the intent to validate at any time. However, it is recommended that the validator attempts to determine the source of the chill before doing so."),(0,o.kt)("p",null,"Slashing may also result in an involuntary chill. However, in that scenario, the validator would also lose their nominations. By this action, even if the validator re-declares its intent to validate before session 5, there wouldn't be sufficient nominations to re-elect the node into the active set."),(0,o.kt)("p",null,'Nominators have the option to renominate a slashed validator using a display row in Selendra-Portal UI. This row is displayed in the "Account Actions" tab for the nominator under a heading that says "Renomination required".'),(0,o.kt)("h2",{id:"chill-other"},"Chill Other"),(0,o.kt)("p",null,"An unbounded and unlimited number of nominators and validators in Selendra's NPoS is not possible due to constraints in the runtime. As a result, multiple checks are incorporated to keep the size of staking system manageable, like mandating minimum active bond requirements for both nominators and validators. When these requirements are modified through on-chain governance, they can be enforced only on the accounts that newly call ",(0,o.kt)("inlineCode",{parentName:"p"},"nominate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," after the update. The changes to the bonding parameters would not automatically chill the active accounts on-chain which do not meet the requirements."),(0,o.kt)("p",null,"For instance, let us consider a scenario where the minimum staking requirement for nominators is changed from 80 SELs to 120 SELs. An account that was actively nominating with 80 SELs before this update would still keep receiving staking rewards. To handle this corner case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"chill_other")," extrinsic was incorporated which also helps to keep things backwards compatible and safe. The ",(0,o.kt)("inlineCode",{parentName:"p"},"chill_other")," extrinsic is permissionless and any third party user can target it on an account where the minimum active bond is not satisfied, and chill that account. The list of addresses of all the active validators and their nominators can be viewed by running ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"validator stats")," script."))}p.isMDXComponent=!0},1161:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/staking-keys_stash_controller-ab610fee1332a02465a8cb914259f281.png"}}]);