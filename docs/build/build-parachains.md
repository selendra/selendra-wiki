---
id: build-parachains
title: Parachain Development
sidebar_label: Parachain Development
description: A guide on what it means to become a Parachain and the steps to do so.
keywords: [build, parachain, develop, implement, PDK]
slug: ../build-pdk
---

### Your Go-To Overview for Developing a Parachain

This guide will cover the motivation to build a parachain or parathread, the tools available to
facilitate this, the steps to test, and finally, how to launch your network on
{{ selendra: Selendra :selendra }} .

### Why Create a Parachain?

Parachains are connected to and secured by the Relay Chain. They benefit from the _pooled security_,
_thought-through governance_, and overall _scalability_ of the heterogeneous sharding approach of
the network. Creating a parachain can be seen as creating a **Layer-1 blockchain**, which has its
own logic and runs in parallel within the
{{ selendra: Selendra :selendra }} ecosystem.

Developers can focus on creating state-of-the-art chains that take advantage of
{{ selendra: Selendra :selendra }}'s next-generation approach. Some
examples of what a parachain could be are:

- DeFi (Decentralized Finance) Applications
- Digital Wallets
- IoT (Internet of Things) Applications
- Gaming
- Web 3.0 Infrastructure

and more.

Selendra aims to be a bet against blockchain maximalism, where the success of Selendra's
heterogeneous multi-chain approach will play a key part in the overall advancement of Web 3.0 and
decentralized systems. As a result, Selendra’s parachain model was designed with the belief that the
internet of the future will have many different types of blockchains working together.

### What are the Benefits of Deploying a Parachain?

The parachain model attempts to alleviate five key _build_ failures of present technology stacks, as
described in the [Selendra Whitepaper](https://selendra.org/SelendraPaper.pdf):

- **Scalability**: How much is spent on resources and will the network be subject to bottlenecks?
- **Isolatability**: Are the needs of many accounted for under the same framework?
- **Developability**: Is the system tooling, system support, and overall system integrity
  dependable?
- **Governance**: Can the network remain flexible to evolve and adapt over time? Can decisions be
  made with sufficient inclusivity, legitimacy, and transparency to provide effective leadership of
  a decentralised system?
- **Applicability**: Does the technology address a burning need on its own? Is other “middleware”
  required to bridge the gap to actual applications?

#### [Shared Security](../learn/learn-security.md) (Pooled Security)

Parachains can lease the security of the
{{ selendra: Selendra :selendra }} network by bonding
{{ selendra: [SEL](../learn/learn-SEL.md) :selendra }} for a parachain
slot. This means that the social costs of building a community around your project and convincing
validators to participate in your network security are reduced.
{{ selendra: Selendra :selendra }} has strong security, and
decentralised application projects wishing to benefit from this security would want to become a
parachain to share in that pooled security.

#### [On-Chain Governance](../learn/learn-governance.md) (Thought-through Governance)

Most governance systems in blockchains use an off-chain governance mechanism. Selendra's on-chain
governance encourages maximum participation of token holders and is frictionless and transparent. It
also enables [forkless upgrades](../learn/learn-runtime-upgrades.md).

#### Scalability

The sharded multichain network approach allows for what is essentially parallel computation
(processing power) that can process several transactions in parallel. Isolated blockchains are often
faced with the network constraint of processing transactions in sequence, causing bottlenecks.

#### Interoperability

Any decentralised application or chain that wants to enable trustless messaging to other parachains
already connected to {{ selendra: Selendra :selendra }} would want to
become a parachain. Interoperability between sovereign chains involves certain constraints and
complex protocols to enable across a wide breadth of chains.

With {{ selendra: Selendra :selendra }}, you will get this feature out
of the box if you build your application as a parachain. The [XCM format](../learn/learn-xcm.md)
allows any parachains to communicate by passing messages between them. Furthermore, as bridges to
other chains are connected (such as those to Bitcoin or Ethereum)
{{ selendra: Selendra :selendra }}'s parachains will be able to
communicate with these as well.

:::note

Despite the benefits of becoming a parachain, developers should be conscious of the challenges in
becoming a parachain, and whether building a blockchain with an end goal of becoming a parachain is
a viable one for their project.

:::

On {{ selendra: Selendra :selendra }}, you are able to put your
blockchain’s latest block head onto the relay chain. As a parachain, the blocks you submit are
verified by validators with a Wasm runtime, which can be stored on the relay chain. You also get the
ability to communicate with other parachains using the [XCM](../learn/learn-xcm.md) format: an
abstract message passing system. Message passing is tracked on the relay chain - as such, you can
prove the delivery of messages and facilitate trustless interactions.

As you can place your blockchain’s latest block head, you can achieve deterministic finalization for
your chain. The hard part of reaching finalization for blockchains tends to be the consensus, where,
in the parachain model, a blockchain can offload consensus to the overall shared network, and focus
on block production. Since the validators have the Wasm runtime for all the parachains, your
parachain shares the security of the validator pool with everyone on the relay chain.

Any validator in the validator pool can help validate your blockchain.

## Things to Consider

### [Para-nomics](../learn/learn-parachains.md#parachain-economies)

#### Digital Nation States

Parachains can be seen as autonomous agents; networks that act as decentralised digital nation
states. Parachains have their own communities, rules, economies, governance, treasuries, and
relationships with external chains. As a result, the economic policies within parachain ecosystems
are subject to the developers and overall community of that parachain ecosystem; there isn't
necessarily a go-to economic model a parachain should follow.

Moreover, _becoming a parachain_ has an opportunity cost associated. Ideally, you can increase the
value of the network by participating in the parachain selection process, and this should serve as a
good return on investment.

#### Connecting Digital Economies

[Collators](../learn/learn-collator.md) act as network maintainers and maintain a full node of a
parachain. They can be incentivized with a native token payout from:

- Transaction fees collected
- Parathread token sponsorship
  - Blocks are naturally produced when a parathread bid is less than the native token payout.

### Para-objects

:::info The Relay Chain can host arbitrary state machines, not just blockchains.

The {{ selendra: Selendra :selendra }} network will encourage the
connection and interoperability between different _para-objects_.

Here, para-objects are referring to objects on the network that operate in parallel, generally,
parallelizable objects.

:::

These could be in the form of:

- System level chains (permanent chains): [leased slots](../learn/learn-auction.md),
  [parathread pool](../learn/learn-parathreads.md)
- [Bridge](../learn/learn-bridges.md) Hubs
- Nested Relay Chains: [Selendra 2.0](../learn/learn-launch.md##selendra2.0)

### Migration

Projects that are already functioning as "solochains" or in isolated environments may be interested
in migrating onto {{ selendra: Selendra :selendra }} as a para-object.
While the parachain model has its benefits, it may not be the go-to strategy for some projects.

As a path for migration onto {{ selendra: Selendra :selendra }}, it may
be more viable to migrate to one of the chains in one of the reserved slots.

For instance, there are currently options for [smart contract deployment](build-smart-contracts.md)
on Selendra through the networks that have secured a slot in the latest slot auctions.

## Implement a Parachain

The Parachain Implementer's Guide is a significant work in progress and maintained by Selendra.
[Selendra repository](https://github.com/selendra/selendra/).

### Parachain Development Kit (PDK)

A **PDK** is a set of tools that allows developers to easily create a parachain. In practice, the
PDK will consist of the following key components:

- _State transition function_ : a way for your application to move from one state to another state.
- _Collator node_ : a type of peer-to-peer node in the {{ selendra: Selendra :selendra }}

#### Key Components

The state transition function (STF) can be an abstract way for an application to go from one state
to another state. The only constraint that {{ selendra: Selendra :selendra }} places on this STF is that it must be easily verifiable -- usually
through what we call a _witness_ or _proof_. It must be so because the Relay Chain validators will
need to check that each state it receives from the collator node is correct without actually running
through the entire computation. Some examples of these proofs include the Proof-of-Validity blocks
or zk-SNARKs, which require less computational resources to verify than they do to generate. The
verification asymmetry in the proof generation of the STF is one of the integral insights that
allows {{ selendra: Selendra :selendra }} to scale while keeping
high-security guarantees.

A collator node is one of the types of network maintainers in the protocol. They are responsible for
**keeping availability** of the state of the parachain and the new states returned from the
iteration of the state transition function. They must remain online to keep track of the state and
also of the XCMP messages that it will route between itself and other parachains. Collator nodes are
responsible for passing the succinct proofs to the relay chain's validators and tracking the latest
blocks from the relay chain. In essence, a collator node also acts as a light client for the relay
chain. For more on collator nodes, see the [collator page](../learn/learn-collator.md).