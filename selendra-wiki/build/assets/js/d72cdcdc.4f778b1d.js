"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],c={id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Selendra account.",keywords:["account","restore account","selendra account","selendrajs"],slug:"../learn-account-restore"},l=void 0,i={unversionedId:"learn/learn-account-restore",id:"learn/learn-account-restore",title:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Selendra account.",source:"@site/../docs/learn/learn-account-restore.md",sourceDirName:"learn",slug:"/learn-account-restore",permalink:"/docs/learn-account-restore",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/main/docs/learn/learn-account-restore.md",tags:[],version:"current",frontMatter:{id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Selendra account.",keywords:["account","restore account","selendra account","selendrajs"],slug:"../learn-account-restore"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"}},u={},p=[{value:"Transferring Selendra-JS Apps Accounts/Addresses From One Computer to Another",id:"transferring-selendra-js-apps-accountsaddresses-from-one-computer-to-another",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"here"),". In general, however, as long as you know how you\ncreated your account, and have the seed phrase (",(0,a.kt)("a",{parentName:"p",href:"learn-accounts#portability"},"mnemonic phrase"),") or\nJSON file (and password) stored securely, you will be able to restore your account."),(0,a.kt)("admonition",{title:"Check the relevant support articles to learn more about restoring your account using the",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://support.selendra.org/support/solutions/articles/how-to-restore-your-account-in-the-selendra-extension"},(0,a.kt)("em",{parentName:"a"},"Selendra Extension")),",\n",(0,a.kt)("a",{parentName:"p",href:"https://support.selendra.org/support/solutions/articles/how-to-restore-your-account-in-selendra-js-ui"},"_Selendra-Portal"),".")),(0,a.kt)("h2",{id:"transferring-selendra-js-apps-accountsaddresses-from-one-computer-to-another"},"Transferring Selendra-JS Apps Accounts/Addresses From One Computer to Another"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This will overwrite any existing accounts with the same pubkey on your new computer. This generally\nshould not make a difference (since it can still access the same account), but might if you have\ne.g. an account which was stored externally in the extension on the old computer but was created\ndirectly in browser on the new one.")),(0,a.kt)("p",null,"This has been tested on Brave and Chrome, but not other browsers."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Selendra-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Go to JavaScript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Type in the command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"JSON.stringify(localStorage)\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Copy and paste the returned string to a text editor and save the file."),(0,a.kt)("li",{parentName:"ol"},"Check that the string you pasted both begins and ends with a tick mark ('). If not, add one to\nthe beginning and end."),(0,a.kt)("li",{parentName:"ol"},"Save and send that file with the copied string to the new computer."),(0,a.kt)("li",{parentName:"ol"},"On new computer, go to Selendra-JS Apps"),(0,a.kt)("li",{parentName:"ol"},"Open the Javascript console on the browser (Available in Developer Tools)"),(0,a.kt)("li",{parentName:"ol"},"Set a variable raw equal to the string from the text file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"raw = ... copy-pasted json from original computer ...\n")),(0,a.kt)("ol",{start:10},(0,a.kt)("li",{parentName:"ol"},"Run the following code on the console:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"accounts = JSON.parse(raw);\nfor (var key in accounts) {\n    if (accounts.hasOwnProperty(key)) {\n        val = JSON.stringify(accounts[key]).replace(/\\\\/g,'').slice(1,-1);\n        console.log(key + \" -> \" + val);\n        localStorage.setItem(key, val);\n    }\n}\n")),(0,a.kt)("ol",{start:11},(0,a.kt)("li",{parentName:"ol"},"Refresh Selendra-JS App browser and check Accounts and Addresses pages. All of your accounts and\naddresses should now be available.")))}m.isMDXComponent=!0}}]);