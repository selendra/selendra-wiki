---
id: learn-runtime-upgrades
title: Runtime Upgrades
sidebar_label: Runtime Upgrades
description: Learn about how runtime upgrades work on Polkadot.
keywords: [runtime, upgrades, releases, forkless]
slug: ../learn-runtime-upgrades
---

# Runtime Upgrades

Runtime upgrades allow Polkadot to change the logic of the chain, without the need for a hard fork.

## Forkless Upgrades

You may have come across the term "hard fork" before in the blockchain space. A **hard fork** occurs
when a blockchain's logic changes such that nodes that do not include the new changes will not be
able to remain in consensus with nodes that do. Such changes are backward incompatible. Hard forks
can be political due to the nature of the upgrades, as well as logistically onerous due to the
number (potentially thousands) of nodes in the network that need to upgrade their software.

Rather than encode the runtime (a chain's "business logic") in the nodes, Polkadot nodes contain a
WebAssembly [execution host](learn-selendra-host). They maintain consensus on a very low level and
well-established instruction set. The Polkadot runtime is stored on the Polkadot blockchain itself.

As such, Polkadot can upgrade its runtime by upgrading the logic stored on-chain, and removes the
coordination challenge of requiring thousands of node operators to upgrade in advance of a given
block number. Polkadot stakeholders propose and approve upgrades through the
[on-chain governance](learn-governance.md) system, which also enacts them autonomously.

## New [Client Releases](https://github.com/paritytech/polkadot/releases)

The existing runtime logic is followed to update the [Wasm](learn-wasm.md) runtime stored on the
blockchain to a new version. The upgrade is then included in the blockchain itself, meaning that all
the nodes on the network execute it. Generally, there is no need to upgrade your nodes manually
before the runtime upgrade as they will automatically start to follow the new logic of the chain.
Nodes only need to be updated when the runtime requires new host functions or there is a change in
networking or consensus.

Transactions constructed for a given runtime version will not work on later versions. Therefore, a
transaction constructed based on a runtime version will not be valid in later runtime versions. If
you don't think you can submit a transaction before the upgrade, it is better to wait and construct
it after the upgrade takes place.

Although upgrading your nodes is generally not necessary to follow an upgrade, we recommend
following the Polkadot releases and upgrading promptly, especially for high priority or critical
releases.

## Runtime Upgrades for Various Users

### For Infrastructure Providers

Infrastructure services include but are not limited to the following:

- [Validators](../maintain/maintain-guides-how-to-upgrade.md)
- API services
- Node-as-a-Service (NaaS)
- General infrastructure management (e.g. block explorers, custodians)

For validators, keeping in sync with the network is key. At times, upgrades will require validators
to upgrade their clients within a specific time frame, for example if a release includes breaking
changes to networking. It is essential to check the release notes, starting with the upgrade
priority and acting accordingly.

General infrastructure providers, aside from following the Polkadot releases and upgrading in a
timely manner, should monitor changes to runtime events and auxiliary tooling, such as the
[Substrate API Sidecar](https://github.com/paritytech/substrate-api-sidecar).

Transactions constructed for runtime `n` will not work for runtimes `>n`. If a runtime upgrade
occurs before broadcasting a previously constructed transaction, you will need to reconstruct it
with the appropriate runtime version and corresponding metadata.

### For [Nominators](../maintain/maintain-guides-how-to-nominate-selendra.md)

Runtime upgrades don't require any actions by a nominator, though it is always encouraged to keep
up-to-date and participate with the latest runtime upgrade motions and releases, while keeping an
eye on how the nodes on the network are reacting to a new upgrade.

## Monitoring Changes

** WORK IN PROGRESS