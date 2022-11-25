"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",keywords:["web socket","remote","connection","secure websocket"],slug:"../maintain-wss"},l=void 0,c={unversionedId:"maintain/maintain-wss",id:"maintain/maintain-wss",title:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",source:"@site/../docs/maintain/maintain-wss.md",sourceDirName:"maintain",slug:"/maintain-wss",permalink:"/docs/maintain-wss",draft:!1,editUrl:"https://github.com/selendra/selendra-wiki/edit/master/docs/maintain/maintain-wss.md",tags:[],version:"current",lastUpdatedBy:"hangsiahong",lastUpdatedAt:1668689624,formattedLastUpdatedAt:"Nov 17, 2022",frontMatter:{id:"maintain-wss",title:"Set up Secure WebSocket for Remote Connections",sidebar_label:"Set up Secure WebSocket for Remote Connections",description:"Steps on setting up a secure socket for remote connections.",keywords:["web socket","remote","connection","secure websocket"],slug:"../maintain-wss"},sidebar:"docs",previous:{title:"Networks",permalink:"/docs/maintain-networks"},next:{title:"Resolving Errors",permalink:"/docs/maintain-errors"}},p={},d=[{value:"Set up a node",id:"set-up-a-node",level:2},{value:"Set up Nginx server",id:"set-up-nginx-server",level:2},{value:"Generate SSL with Certbot",id:"generate-ssl-with-certbot",level:2},{value:"Connecting to the node",id:"connecting-to-the-node",level:2}],u={toc:d};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You might want to host a node on one server and then connect to it from a UI hosted on another, e.g.\n",(0,a.kt)("a",{parentName:"p",href:"https://portal.selendra.org"},"Selendra-Portal"),". This will not be possible unless you set up a secure\nproxy for websocket connections. Let's see how we can set up WSS on a remote Substrate node."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note: this should ",(0,a.kt)("strong",{parentName:"em"},"only")," be done for sync nodes used as back-end for some dapps or projects.\nNever open websockets to your validator node - there's no reason to do that and it can only lead to\nsecurity gaffes.")),(0,a.kt)("p",null,"In this guide we'll be using Ubuntu 18.04 hosted on a \\$10 DigitalOcean droplet. We'll assume you're\nusing a similar OS, and that you have nginx installed (if not, run ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install nginx certbot python3-certbot-nginx"),")."),(0,a.kt)("h2",{id:"set-up-a-node"},"Set up a node"),(0,a.kt)("p",null,"Whether it's a generic Substrate node, a Selendra node, or your own private blockchain, they all\ndefault to the same websocket connection: port 9944 on localhost. For this example, we'll set up a\nSelendra sync node (non-validator)."),(0,a.kt)("p",null,"Create a new server on your provider of choice or locally at home (preferred). We'll assume you're\nusing Ubuntu 18.04. Then Download Selendra binary."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -sL https://github.com/selendra/selendra/releases/download/0.2.1/selendra -o selendra\nchmod +x selendra\n./selendra --name "DigitalOcean 10 USD droplet ftw" --rpc-cors all\n')),(0,a.kt)("p",null,"This will start the syncing process with Selendra's mainnet."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"--rpc-cors")," mode needs to be set to all so that all external connections are allowed")),(0,a.kt)("h2",{id:"set-up-nginx-server"},"Set up Nginx server"),(0,a.kt)("p",null,"There are many possible way to config the nginx file but incase you are new, just follow the steps below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Note: You should name your file according to the domain you have.\nmkdir /etc/nginx/sites-available/SITE_FILENAME.conf\n# Note: You can use any editor, you like including nano, vi\nvim /etc/nginx/sites-available/SITE_FILENAME.conf\n")),(0,a.kt)("admonition",{title:"New to VIM?",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you choose vim as your editor, you can enable ",(0,a.kt)("inlineCode",{parentName:"p"},":set paste")," to easy copying the config below:")),(0,a.kt)("p",null,"Now you can copy the snippet below and make some change to it.\nkeep in mind that you need to replace some placeholder values. Notably:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SERVER_ADDRESS")," should be replaced by your domain name if you have it, or your server's IP\naddress if not.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},'server {\n        server_name SERVER_ADDRESS;\n\n        root /var/www/html;\n        index index.html;\n\n        location / {\n          try_files $uri $uri/ =404;\n\n          proxy_buffering off;\n          proxy_pass http://localhost:9944;\n          proxy_set_header X-Real-IP $remote_addr;\n          proxy_set_header Host $host;\n          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\n          proxy_http_version 1.1;\n          proxy_set_header Upgrade $http_upgrade;\n          proxy_set_header Connection "upgrade";\n        }\n}\n')),(0,a.kt)("p",null,"After you finished create the file, you need to enable it using the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/nginx/sites-available/SITE_FILENAME.conf /etc/nginx/sites-enabled/\n")),(0,a.kt)("p",null,"Restart nginx after setting this up: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo service nginx restart"),"."),(0,a.kt)("h2",{id:"generate-ssl-with-certbot"},"Generate SSL with Certbot"),(0,a.kt)("p",null,"To get WSS (secure websocket), you need to generate an SSL certificate. There are others possible approaches but in this guide, we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"certbot")," option."),(0,a.kt)("p",null,"To generate using certbot, please type the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Example: certbot -d rpc.selendra.org\ncertbot -d SERVER_ADDRESS\n")),(0,a.kt)("p",null,"Every websocket connection bootstraps itself with ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," first, so to allow the certificate, visit\nthe IP of your machine in the browser prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"https"),", like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://MY_IP"),'. This should\nproduce a "Not private" warning which you can skip by going to "Advanced" and the clicking on\n"Proceed to Site". You have now whitelisted this IP and its self-signed certificate for connecting.'),(0,a.kt)("h2",{id:"connecting-to-the-node"},"Connecting to the node"),(0,a.kt)("p",null,"Open ",(0,a.kt)("a",{parentName:"p",href:"https://portal.selendra.org"},"Selendra-Portal UI"),' and click the logo in the top left to switch the\nnode. Activate the "Development" toggle and input your node\'s address - either the domain or the IP\naddress. Remember to prefix with ',(0,a.kt)("inlineCode",{parentName:"p"},"wss://"),":\n",(0,a.kt)("em",{parentName:"p"},"Example"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://rpc.selendra.org"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A sync-in-progress chain connected to Selendra-Portal",src:n(5747).Z,width:"2876",height:"1626"})),(0,a.kt)("p",null,"Now you have a secure remote connect setup for your Selendra node."))}m.isMDXComponent=!0},5747:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/maintain-wss-image-0fe72147f38d8b6766328dd834a517a6.png"}}]);