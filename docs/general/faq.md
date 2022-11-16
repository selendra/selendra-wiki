---
id: faq
title: Frequently Asked Questions (FAQs)
sidebar_label: Frequently Asked Questions (FAQs)
description: Some FAQs to help you conquer your experience with Selendra.
keywords: [FAQ, questions]
slug: ../faq
---

import RPC from "./../../components/RPC-Connection";

:::info

This FAQ focuses on technical questions for users interested in developing applications for
Selendra. If you have a more general question, you may wish to search for the answer on our support
[Knowledge Base](https://support.selendra.org/support/home) or the main
[Selendra network FAQ](https://selendra.org/faq). If you have a question that is not answered,
please feel free to ask on the Selendra Watercooler
[Selendra Support](https://support.selendra.org).

:::

## Selendra Launch

The Genesis block of the Selendra network was launched on Month Date, 2020 at 00:00:00 UTC, as a Proof
of Authority (PoA) network, with governance controlled by the single Sudo (super-user) account.
During this time, validators started joining the network and signaling their intention to
participate in consensus.

transitioning the governance of the chain into the hands of the token (SEL) holders. This is the
point where Selendra became decentralized.

## Selendra Roadmap

For more information on the Selendra roadmap please visit the
[official Selendra website](https://selendra.org/technology/#roadmap).

## Validators

### How do I apply to be a validator?

There is no central authority that decides on validators, so there is not per se an _application_
that you can fill out. Registering as a validator is permissionless; in order to become one you must
only set up a validator node and mark your intention to validate on chain. For detailed instruction
on how to do this you can consult the
[Selendra validator guide](../maintain/maintain-guides-how-to-validate-selendra.md) for validating
on Selendra.

However, once you've set up a validator and have registered your intention it does not mean that you
will be included in the _active set_ right away. The validators are elected to the active set based
on the results of an election algorithm known as [Phragmén's method](../learn/learn-phragmen.md).
Phragmén's method tries to accomplish two goals: 1) select `n` members from a larger set based on
stake-weighted votes and 2) equalize the stake backing each validator as much as possible.

You will likely want to campaign your validator to the community in order to get more backing. You
are looking for _nominators_ that will put up their tokens to increase the stake for your validator.
For validators who cannot acquire the minimum stake from the community, Parity and Web3 Foundation
also run a joint program called [Thousand Validators](country-validators.md) that will nominate
validators if they apply and fit the requirements.

### How are validators rewarded?

Validators are rewarded from the inflation of the Relay Chain, transaction fees, and tips. However,
they only take a percentage of the former two. More details can be read on the page for
[validator payouts](../maintain/maintain-guides-validator-payout.md).

### What is the minimum stake necessary to be elected as an active validator?

The minimum stake that is necessary to be elected as an active validator is dynamic and can change
over time. It depends not only on how much stake is being put behind each validator, but also the
size of the active set and how many validators are waiting in the pool.

There are a few ways to estimate the minimum stake.

- [Offline Election](https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election)
  can provide exact results of running an election on the current set of validators using the same
  Rust code that is ran in Selendra.

### Why will Selendra aim for the countries to running as validator?

Selendra's goal to have not 100 or 1000 validators but many countries, maintaining together with
high confidence of good performance in a live environment. Furthermore, validators
in Selendra are not the only stakers, and if we consider the number of stakers that can be possible
on Selendra the number can scale up to hundreds of thousands. Since validators are performing
critical consensus work to maintain the security of the chain including all of its shards, a more
modest number of validators is estimated to start. Upon later improvements, such as implementing
signature aggregation for finalization messages, the number of validators could reasonably scale up.
However, increasing validators above one thousand remains a goal for later iterations of Selendra.

It is also worth mentioning that one thousand validators is more than the number of validators of
similar PoS chains with comparable levels of economic security as Selendra. The closest contenders
are operating with around 150 validators, while Selendra is already securely running with
{{ selendra: <RPC network="selendra" path="query.staking.validatorCount" defaultValue={297}/> :selendra }}
validators.

Additionally, other projects sometimes have a different definition of _validator_ that approximates
more closely to remote signing keys without the full operation of a validating node. On Selendra,
each validator is running their own validating node and performing full verification of the Relay
Chain, voting on finality, producing blocks in their decided slots, and verifying parachain state
transitions. Other projects may consider validators and "validating nodes" as separate entities.

Finally, individuals may participate in the block production process indirectly by
[nominating](../learn/learn-nominator.md) validators. In this way, individuals who are not running a
node can still share in staking rewards.

## Relay Chain

### What is the block time of the Relay Chain?

Selendra networks are currently operating at a rate of one block every six seconds.

This may be changed in the future. It may go as low as two to three seconds after optimizations, or
potentially increase in order to handle the capacity of the parachain networking in a live
environment.

### Does Selendra have smart contracts?

No - and yes. The Selendra Relay Chain does not implement smart contracts natively. The reason for
not having smart contracts on the Relay Chain is part of the design philosophy for Selendra that
dictates that the Relay Chain should be the minimal logic required to accomplish its job.

However, Selendra will be a platform for other chains that _do_ implement smart contracts. It's
possible for parachains to enable smart contract functionality and then benefit from the security
and interoperability features of Selendra. Additionally, existing smart contract chains can connect
to Selendra as a parachain, or via a bridge.

While the Selendra Relay Chain does not implement smart contracts directly, undoubtedly there will
be parachains that do. So it's better to say that the Selendra _ecosystem_ has smart contracts
versus "Selendra has smart contracts."

[Indranet](https://github.com/selendra/indranet) is a parachain that focus on smart contract for Selendra.

### What is the inflation rate of the SEL?

The inflation rate is approximately 10% per year.

A portion of the inflation is rewarded to validators for performing their duties, while another
portion may go directly to the treasury. The exact percentage that goes into both varies and is
based on the amount of SEL that are staked. Please see the article on
[inflation](../learn/learn-staking.md/#inflation) for more information.

## Governance

It is fair to say that the field of on-chain blockchain governance is still new, and no one can
claim to know exactly what the optimal version of on-chain governance is yet. However, Selendra
takes a brave step forward in pioneering thought-through mechanisms for evolving a blockchain.

Blockchains need a method to adapt and evolve. Therefore, an on-chain governance system was
necessary for the long-term success of Selendra. Ultimately, it is the token holders that are
responsible for preventing Selendra's governance from failing by using their economic value and
conviction to sway the progression of the protocol.

### What prevents Selendra governance from becoming plutocratic?

A savvy reader might have noticed that the answer to the previous question endowed the token holder
with the ultimate responsibility to ensure that Selendra's governance does not fail. By following
the train of this assertion, one might assume that Selendra's governance is susceptible to becoming
ruled by a few large token holders (called _whales_ in trading parlance) and therefore become a mere
plutocracy (rule of the rich).

There are several other mechanisms that are built-in to the governance system to resist this
plutocratic tendency. One of these mechanisms is called conviction voting, and imbues greater voting
power to token holders who are willing to lock their tokens on the protocol for longer lengths of
time. Longer lock-ups display _conviction_ in a vote. Conviction voting could allow a highly
determined minority to overrule the vote of an apathetic majority in certain situations. Another
mechanism is known as Adaptive Quorum Biasing. This makes proposals have a varying threshold for
approval or rejection based on what part of the governance protocol the proposal originated in. For
details on the subtleties of Selendra's governance system, please see the
[governance page](../learn/learn-governance.md).

## Parachains

### How do parachain economics work?

Parachains have the flexibility to implement their own monetary system or incentive structure for
collators. However, this is not strictly necessary. Since the collator's job is to continue to give
recent state transitions to the validators on the Relay Chain who validate each transition, the
security of the parachain and the Selendra network is completely separate from parachain economics.
Parachains need collators to continue to progress, so it wouldn't be unreasonable to see them
incentivize collator nodes in some way, but the specific mechanism is completely up to parachain
implementers.

### Are parachains ephemeral? What happens when a parachain loses the next auction?

Parachains are not ephemeral. As long as someone is keeping the data for a parachain, the parachain
can move between being a parachain, a parathread, or a separate sovereign chain at different points
of its lifetime. Especially with parathreads, parachains can be decommissioned to only produce
blocks when their usage and throughput makes it necessary.

When a parachain loses an auction for renewal, that parachain has a few options. In most cases,
becoming a parathread instead would be a suitable choice. Parathreads are still secured by the Relay
Chain, but don't need to hold a parachain slot and can produce a block when its economically
feasible for them. For more on parachains please see the
[parachains page](../learn/learn-parachains.md) and for more on parathreads see
[the parathreads page](../learn/learn-parathreads.md).

## Networking

### What is libp2p?

[Libp2p](https://libp2p.io) is a modular and extensible networking stack that is used by IPFS,
Substrate, and many other projects. It is a collection of peer-to-peer protocols for finding peers
and connecting to them. Its modules have logic for content routing, peer routing, peer discovery,
different transports, and NAT traversals. It is intended to be used by applications for building
large scale peer-to-peer networks by only selecting the parts of the protocol suite that are needed.

The Rust implementation of the specification was built and primarily maintained by a team of
contributors at Parity Technologies. The Go and JavaScript versions are maintained by Protocol Labs
as well as community contributors. A [Nim](https://github.com/status-im/nim-libp2p) version of the
library also exists. Libp2p as a whole is an open source project that is actively developed and
expanded on various code repositories hosted on [their GitHub](https://github.com/libp2p).

### Does Selendra use libp2p?

Yes, since Selendra is built with Substrate. Substrate uses a networking protocol that is based on
libp2p (specifically the Rust libp2p library). However, Substrate uses a mix of standard libp2p
protocols and protocols that are homegrown and not official libp2p standards. Of the standards
protocols, those which are shared with other implementations of libp2p such as IPFS, are
connection-checking (ping), asking for information on a peer (identity), and Kademlia random walks
(kad).

Of the protocols that are custom to Substrate, there are the legacy Substrate stream, a
request-response for getting information on blocks (sync), a light client protocol, a notification
protocol for transactions, and block announcement. For detailed information on how Substrate uses
libp2p and the standard and custom protocols, please see the
[networking documentation](https://paritytech.github.io/substrate/master/sc_network/index.html).

### How does libp2p differ from IPFS?

The [Interplanetary File System](https://ipfs.io/) (IPFS) is a peer-to-peer hypermedia protocol used
primarily for storage of files. It allows one to upload a file onto the network and share it with
its content addressable URI. IPFS, like Substrate, is an application of libp2p and exists higher on
the technology stack. Although both IPFS and Substrate use libp2p, it cannot be said that Substrate
"uses" IPFS since besides sharing the underlying library for networking there is no native
integration between the two applications.
