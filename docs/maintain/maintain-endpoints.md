---
id: maintain-endpoints
title: Node Endpoints
sidebar_label: Node Endpoints
description: List of node endpoints and examples of use.
keywords: [endpoints, network, connect]
slug: ../maintain-endpoints
---

Ideally, one may run their own node when interacting with the
[Selendra network](https://selendra.org/) via [Selendra-Portal](https://portal.selendra.org/)
or other UIs and programmatic methods. Another option would be to connect to one of the several
public endpoints provided by infrastructure and API service providers. For development convenience,
[Selendra](https://selendra.org/) maintains archive nodes for Selendra, and their test
networks with public endpoints. These endpoints can be used with
[Selndra-JS API](https://js.selendra.org/docs/api) to interact with their respective chains. The
tables below list these endpoints.

### Network Endpoints

#### Main Networks

| Network  | URL                          |
| -------- | ---------------------------- |
| Selendra | wss://rpc.selendra.org       |

#### Test Networks

| Network          | URL                            |
| -------          | -----------------------------  |
| Selendra Testnet | wss://rpc-testnet.selendra.org |

#### Example usage with Selendra-JS API

To connect to the Selendra node, use the endpoint in your JavaScript apps like so:

```javascript {5}
// Using the Selendra Mainnet Endpoint
const { ApiPromise, WsProvider } = require('@selendra/api');
async () => {
  // Construct a provider with the endpoint URL
  const provider = new WsProvider('wss://rpc.selendra.org/');
  // Create an API instance for Selendra
  const api = await ApiPromise.create({ provider });
  // ...
```

#### Substrate Connect

[Substrate connect](https://substrate.io/developers/substrate-connect/) builds on Selendra JS so
building an app is the same experience as with using a traditional RPC server node. It is a fast,
secure, and decentralized way to interact with Selendra, and their parachains right in the
browser.

:::info

Substrate Connect is still under
[active development](https://github.com/paritytech/substrate-connect).

:::


:::note

The list of third party RPC endpoints above for Selendra is directly fetched from
[Selendra-Portal](https://portal.selendra.org/#/explorer)

:::
