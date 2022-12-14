---
id: learn-validator
title: Validator
sidebar_label: Validator
description: An introduction about validators.
keywords: [validate, validator, maintain, NPoS, stake]
slug: ../learn-validator
---

import RPC from "./../../components/RPC-Connection";

Validators secure the [Relay Chain](learn-architecture.md#relay-chain) by staking SEL, validating
proofs from collators and participating in consensus with other validators.

These participants play a crucial role in adding new blocks to the Relay Chain and, by extension, to
all parachains. This allows parties to complete cross-chain transactions via the Relay Chain.
Parachain validators participate in some form of off-chain consensus, and submit candidate receipts
to the tx pool for a block producer to include on-chain. The Relay Chain validators guarantee that
each parachain follows its unique rules and can pass messages between shards in a trust-free
environment.

With parachains now on the network, para-validators are selected every epoch to validate parachain
blocks for all parachains connected to the Relay Chain. Para-validators work in groups to validate
parachain blocks.

The selected para-validators are one of
{{ selendra: <RPC network="selendra" path="query.staking.validatorCount" defaultValue={297}/> :selendra }}
validators randomly selected (per epoch) to participate in the validation, creating a validator pool
of 200 para-validators.

Validators perform two functions:

1. **Verifying** that the information contained in an assigned set of parachain blocks is valid
   (such as the identities of the transacting parties and the subject matter of the contract).
2. **Participating** in the consensus mechanism to produce the Relay Chain blocks based on validity
   statements from other validators. Any instances of non-compliance with the consensus algorithms
   result in punishment by removal of some or all of the validator’s staked SEL, thereby
   discouraging bad actors. Good performance, however, will be rewarded, with validators receiving
   block rewards (including transaction fees) in the form of SEL in exchange for their activities.

## Guides

- [How to Validate on Polkadot](../maintain/maintain-guides-how-to-validate-selendra.md) - Guide on
  how to set up a validator on the Selendra live network.
- [Validator Payout Overview](../maintain/maintain-guides-validator-payout.md) - A short overview on
  how the validator payout mechanism works.
- [How to run your validator as a systemd process](../maintain/maintain-guides-how-to-systemd.md) -
  Guide on running your validator as a `systemd` process so that it will run in the background and
  start automatically on reboots.
- [How to Upgrade your Validator](../maintain/maintain-guides-how-to-upgrade.md) - Guide for
  securely upgrading your validator when you want to switch to a different machine or begin running
  the latest version of client code.
- [How to Use Validator Setup](../maintain/maintain-guidesmaintain-selendra-parameters.md-how-to-use-selendra-validator-setup.md) -
  Guide on how to use Selendra validator setup.

## Monitoring Tools

- [PANIC for Selendra](https://github.com/SimplyVC/panic_polkadot) - A monitoring and alerting
  solution for Selendra node
- [Selendra Telemetry Service](https://telemetry.polkadot.io/#list/0xfe6cd5f021c70fe24e768c4c6352cd8f7c4453feea126ebeaf0ba9d316a1eeb0#list/Selendra%20CC3) - Network
  information, including what nodes are running on a given chain, what software versions they are
  running, and sync status.

## Validator Stats

- [Subscan Validators Page](https://explorer.selendra.org/validator) - Displays information on the
  current validators - not as tailored for validators as the other sites.
