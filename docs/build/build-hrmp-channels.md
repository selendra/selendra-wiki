---
id: build-hrmp-channels
title: Opening HRMP Channels
sidebar_label: Opening HRMP Channels
description: Steps on how to open HRMP channels between parachains.
keywords: [HRMP, parachain, Cardamom, proposal]
slug: ../build-hrmp-channels
---

[HRMP](../learn/learn-xcm.md#xcmp-lite-hrmp) has the same interface and functionality as
[XCMP](../learn/learn-xcm.md#xcmp-cross-chain-message-passing) but is much more demanding on
resources since it passes all messages via the Relay Chain. When XCMP is implemented on Polkadot,
HRMP is planned to be deprecated and phased out in favor of it.

## Opening HRMP channel: parachain to parachain

To open a channel from one parachain to another that are not common good chains on Polkadot, the
governance of each parachain needs to declare its intent to open a channel on the Relay Chain, and
the second chain needs to accept and do the same.

In order to do this, the calls to be dispatched from both chains are:

1. `hrmp > hrmpInitOpenChannel(recipient, proposedMaxCapacity, proposedMaxMessageSize)`: this call
   initiates opening a channel from a parachain to a given recipient with given channel

2. `hrmp > hrmpAcceptOpenChannel(sender)`: accepting the channel open request from the given sender.

Each parachain is to use its own governance process to execute this. The call will be executed on
the Relay Chain.

