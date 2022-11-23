---
id: maintain-load-balance
title: RPC Endpoint Load-Balancer
sidebar_label: RPC Endpoints Load-Balancer
description: How to setup a load-balance.
keywords: [endpoints, nginx, load-balance]
slug: ../maintain-load-balance
---

This section will teach you how to setup a nginx load-balancing for your custom chain and also this is how Selendra did it too.
In this guide, you will need a solo instance as host. You can use digital ocean 4$ instance if you like. You can also use your own
machine, if you have public ip and the rpc endpoint you want to cluster together as one.

If you want to use a load-balancer, you need to have atleast two rpc nodes up runnings and also with websocket secure, please refer to
this link on [How To Set up Secure WebSocket for Remote Connections](maintain-wss).

The RPC will need to have a domain also, you can look at the example below:

- `wss://rpc0.selendra.org`
- `wss://rpc1.selendra.org`

If you already fulfilled the requirement above, you can continue the guide.

In this guide, we will join the two RPC-endpoint above into one cluster.
We will get `wss://rpc.selendra.org`

# Getting Start
First thing, you will need to do is ssh into your load-balancer machine and install the following dependencies.

On Ubuntu:
```bash
apt update && apt install nginx certbot python3-certbot-nginx
```

On Arch Linux:
```bash
pacman -Syu nginx certbot certbot-nginx
```

:::note
I will assume you have a little bit knowledge of nginx and how to setup.
:::

After that, create the config file name according to your domain, in my case it is `rpc.selendra.org.conf`
```bash
touch /etc/nginx/sites-available/rpc.selendra.org.conf
```

Copy the following config below into the file, you just created on `/etc/nginx/sites-available/rpc.selendra.org.conf`:
```sh
upstream backend {
        ## We put :443 because we need to reverse it to secure protocol
        server rpc0.selendra.org:443;
        server rpc1.selendra.org:443;
}

server {
        server_name rpc.selendra.org;

        location / {
                proxy_pass https://backend;
                proxy_set_header Host $http_host;
                proxy_set_header X_FORWARDED_PROTO https;
                proxy_set_header Connection "Upgrade";
                proxy_set_header Upgrade $http_upgrade;
        }
}
```

:::warning 
You need to change the configuration according to your RPC address.
:::

After you finished the above instruction, run the following command:
```bash
# don't forget to this the sites according to your situtation.
ln -s /etc/nginx/sites-available/rpc.selendra.org.conf /etc/nginx/sites-enabled/
```

Finally, we can generate SSL for the nginx.
```bash
certbot -d rpc.selendra.org
```

if everything done, correctly, you should be able to use the load-balancer, you just setup with the link `wss://rpc.selendra.org`
if you encounter any problem and questions, don't forget to seek help from our community with this 
[link](https://t.me/selendrachain).