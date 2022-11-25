"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9530],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,i(i({ref:n},p),{},{components:t})):a.createElement(g,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7555:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(7462),o=t(3366),r=(t(7294),t(3905)),i=["components"],l={id:"maintain-load-balance",title:"RPC Endpoint Load-Balancer",sidebar_label:"RPC Endpoints Load-Balancer",description:"How to setup a load-balance.",keywords:["endpoints","nginx","load-balance"],slug:"../maintain-load-balance"},s=void 0,c={unversionedId:"maintain/maintain-load-balance",id:"maintain/maintain-load-balance",title:"RPC Endpoint Load-Balancer",description:"How to setup a load-balance.",source:"@site/../docs/maintain/maintain-load-balance.md",sourceDirName:"maintain",slug:"/maintain-load-balance",permalink:"/docs/maintain-load-balance",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/maintain/maintain-load-balance.md",tags:[],version:"current",frontMatter:{id:"maintain-load-balance",title:"RPC Endpoint Load-Balancer",sidebar_label:"RPC Endpoints Load-Balancer",description:"How to setup a load-balance.",keywords:["endpoints","nginx","load-balance"],slug:"../maintain-load-balance"},sidebar:"docs",previous:{title:"Set up Secure WebSocket for Remote Connections",permalink:"/docs/maintain-wss"},next:{title:"Resolving Errors",permalink:"/docs/maintain-errors"}},p={},d=[],u={toc:d};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section will teach you how to setup a nginx load-balancing for your custom chain and also this is how Selendra did it too.\nIn this guide, you will need a solo instance as host. You can use digital ocean 4$ instance if you like. You can also use your own\nmachine, if you have public ip and the rpc endpoint you want to cluster together as one."),(0,r.kt)("p",null,"If you want to use a load-balancer, you need to have atleast two rpc nodes up runnings and also with websocket secure, please refer to\nthis link on ",(0,r.kt)("a",{parentName:"p",href:"maintain-wss"},"How To Set up Secure WebSocket for Remote Connections"),"."),(0,r.kt)("p",null,"The RPC will need to have a domain also, you can look at the example below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wss://rpc0.selendra.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"wss://rpc1.selendra.org"))),(0,r.kt)("p",null,"If you already fulfilled the requirement above, you can continue the guide."),(0,r.kt)("p",null,"In this guide, we will join the two RPC-endpoint above into one cluster.\nWe will get ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc.selendra.org")),(0,r.kt)("h1",{id:"getting-start"},"Getting Start"),(0,r.kt)("p",null,"First thing, you will need to do is ssh into your load-balancer machine and install the following dependencies."),(0,r.kt)("p",null,"On Ubuntu:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt install nginx certbot python3-certbot-nginx\n")),(0,r.kt)("p",null,"On Arch Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pacman -Syu nginx certbot certbot-nginx\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I will assume you have a little bit knowledge of nginx and how to setup.")),(0,r.kt)("p",null,"After that, create the config file name according to your domain, in my case it is ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc.selendra.org.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch /etc/nginx/sites-available/rpc.selendra.org.conf\n")),(0,r.kt)("p",null,"Copy the following config below into the file, you just created on ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/rpc.selendra.org.conf"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'upstream backend {\n        ## We put :443 because we need to reverse it to secure protocol\n        server rpc0.selendra.org:443;\n        server rpc1.selendra.org:443;\n}\n\nserver {\n        server_name rpc.selendra.org;\n\n        location / {\n                proxy_pass https://backend;\n                proxy_set_header Host $http_host;\n                proxy_set_header X_FORWARDED_PROTO https;\n                proxy_set_header Connection "Upgrade";\n                proxy_set_header Upgrade $http_upgrade;\n        }\n}\n')),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"You need to change the configuration according to your RPC address.")),(0,r.kt)("p",null,"After you finished the above instruction, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# don't forget to this the sites according to your situtation.\nln -s /etc/nginx/sites-available/rpc.selendra.org.conf /etc/nginx/sites-enabled/\n")),(0,r.kt)("p",null,"Finally, we can generate SSL for the nginx."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"certbot -d rpc.selendra.org\n")),(0,r.kt)("p",null,"if everything done, correctly, you should be able to use the load-balancer, you just setup with the link ",(0,r.kt)("inlineCode",{parentName:"p"},"wss://rpc.selendra.org"),"\nif you encounter any problem and questions, don't forget to seek help from our community with this\n",(0,r.kt)("a",{parentName:"p",href:"https://t.me/selendrachain"},"link"),"."))}m.isMDXComponent=!0}}]);