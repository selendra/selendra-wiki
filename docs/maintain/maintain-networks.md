---
id: maintain-networks
title: Networks
sidebar_label: Networks
description: Information about the different networks of the Selendra ecosystem.
keywords: [networks, mainnet, testnet, canary, substrate]
slug: ../maintain-networks
---

Selendra is built on top of Substrate, a modular framework for blockchains. One feature of Substrate
is to allow for connection to different networks using a single executable and configuring it with a
start-up flag. Here are some of the networks associated with Selendra or Substrate that you may want
to connect to and join.

## Selendra networks

To connect to a Selendra network please follow the [instructions](maintain-sync.md) for installing
the Selndra executable.

### Selendra Mainnet

Currently Selendra is built from the tip of master and is the default option when starting a node.

To start a Selendra node, run the Selendra binary:

```bash
selendra # this will start running the default chain which is `mainnet`
```

and you will connect and start syncing to Selendra.

Check your node is connected by viewing it on
[Telemetry](https://telemetry.polkadot.io/#/Selendra%20CC3) (you can set a custom name by specifying
`--name "my custom name"`)

### Selendra Test Network

Selendra Test Network is the latest test network for Selendra. The tokens on this network are called _TSEL_ and
they purposefully hold no economic value.

Run the Selendra binary and specify `selendra-testnet` as the chain:

```bash
selendra --chain=selendra-testnet
```

and you will connect and start syncing to Selendra Test Network.

Check that your node is connected by viewing it on
[Telemetry](https://telemetry.polkadot.io/#list/Selendra-Testnet) (you can set a custom name by specifying
`--name "my custom name"`).

#### Selendra Testnet Faucet

Follow the instruction [here](../learn/learn-SEL.md#getting-westies) for instructions on acquiring
`TSEL`.

### Differences

Selendra Mainnet and Selendra Testnet use the same runtime but Selendra Testnet is a different from Mainnet because in Testnet, there are new things being built and testing before release into mainnet.

## Telemetry Dashboard

If you connect to the public networks, the default configuration for your node will connect it to
the public [Telemetry][telemetry] service.

You can verify that your node is connected by navigating to the correct network on the dashboard and
finding the name of your node.

There is a built-in search function on the nodes page. Simply start typing keystrokes in the main
window to make it available.

[substrate install]: https://docs.substrate.io/v3/getting-started/overview/
[telemetry]: https://telemetry.polkadot.io/
