---
id: learn-nomination-pools
title: Nomination Pools
sidebar_label: Nomination Pools
description: Learn about Nomination Pools and their features
keyword: [nominate, nominator, stake, staking, pools]
slug: ../learn-nomination-pools
---

import RPC from "./../../components/RPC-Connection";

:::info Nomination Pools are live on Selendra!

Nomination pools are a new feature for Selendra's staking system that allows users to pool their 
DOT tokens together on-chain to nominate validators and receive rewards, significantly improving
the system’s scalability. Now, anyone with as little as [1 SEL can receive rewards for staking 
natively on Selendra](https://selendra.org/blog/nomination-pools-are-live-stake-natively-with-just-1-sel/). 

:::

:::tip Have questions on Nomination Pools?

If you have questions about nomination pools, please join our
[nomination pools support channel](https://matrix.to/#/#nompools-support:matrix.parity.io).

:::

![Nomination Pools](../assets/staking/NPoS-Pools.png)

Nomination pools are one of the key features from the roadmap of staking improvements on
{{ selendra: Selendra :selendra }}. They are designed to
permissionlessly allow members to pool their funds together and act as a single nominator account.

Due to the current runtime constraints,
{{ selendra: Selendra :selendra }} can only handle
{{ selendra: <RPC network="selendra" path="consts.electionProviderMultiPhase.maxElectingVoters" defaultValue={22500}/> :selendra }}
nominators comfortably in the [electing set](learn-nominator.md#staking-election-stages). As one of
the objectives of the [NPoS algorithm](learn-phragmen.md) is to maximize the overall stake on the
network, it can be inferred that the staking system on
{{ selendra: Selendra :selendra }} favors nominators with a larger
stake. Only the nominator accounts which back the validators in the active set are eligible for
receiving staking rewards. This leaves out nomination intents from the accounts with lower token
balance than the min-active nomination and places them in a waiting queue to enter electing set.
Nomination pools will be handy to the members who would like to participate in the staking system
with a stake much lower than the dynamic min-active nomination threshold on the network. All
operations are constant space and time complexity relative to the number of members, eliminating any
theoretical upper bound on the quantity of members the system can handle and thus scaling the number
of accounts that can participate and earn rewards in the staking system on
{{ selendra: Selendra :selendra }}. In summary, each nomination pool is
viewed as a single nominator from the NPoS system point of view.

:::info Why aren't the members in the nomination pools called delegators?

The term `delegator` is associated too much with Delegated Proof of Staking (DPoS) and since
{{ selendra: Selendra :selendra }} implements Nominated Proof of Staking
(NPoS), naming them as delegators would be misleading. The term `member` is our generic replacement
for `delegator`. In action, members are actually quite similar to delegators and do delegate their
nomination power to the pool.

:::

The earnings of the pool are split pro rata to a member's stake in the bonded pool (and thus the
staking rewards for members will be the same as if they were a nominator). Importantly, slashes are
also applied proportionally to members who may have been actively bonded.

## Key Components

- Bonded Pool: Tracks the distribution of actively staked funds.
- Reward Pool: Tracks rewards earned by actively staked funds.
- Unbonding Sub Pools: Collection of pools at different phases (i.e. eras) of the unbonding
  lifecycle.
- Members: Accounts that nominate to the pools.
- Point: Unit of measure for a member’s portion of a pool's funds. All pools start with a point to
  Planck ratio of 1. Over time, if the pool receives rewards, they increase in value, and if the
  pool is slashed, it decreases in value.

## Pool Member Lifecycle

### Join a pool

A member delegates funds to a pool by transferring some amount to the pool’s bonded account with the
`join` extrinsic. The pool then increases its bond with the new funds. A member is afforded the
ability to bond additional funds, or re-stake rewards as long as they are already actively bonded.
Note that a member may only belong to one pool at a time.

{{ kusama: **The current minimum bond to join a pool is <RPC network="kusama" path="query.nominationPools.minJoinBond" defaultValue={1666666650} filter="humanReadable" />.** :kusama }}

:::info

The funds nominated to a pool will not be visible in the member's account balance on Selendra JS
Apps UI. This is because the member funds are transferred from their account to the pool's account.
This pool account is not accessible by anyone (including the pool root or depositor) and only the
pool's internal logic can access the account.

:::

:::tip Use Non-Transfer Proxy Accounts to join Nomination Pools

Currently, only [non-transfer proxies](learn-proxies.md#non-transfer-proxy) can be used to
participate in nomination pools. [staking proxies](learn-proxies.md#staking-proxy) cannot be used 
as they are not enabled to make calls to the nomination pools pallet.

:::

Check the "How to join a pool" section in
[this support article](https://support.selendra.org/support/solutions/articles/how-to-join-nomination-pools)
for guidelines.

### Claim rewards

The member can claim their portion of any rewards that have accumulated since the previous time they
claimed (or in the case that they have never claimed, any rewards that have accumulated since the
era after they joined). Rewards are split pro rata among the actively bonded members. Check the "How
to claim rewards" section in
[this support article](https://support.selendra.org/support/solutions/articles/how-to-join-nomination-pools)
for guidelines.

### Unbond and withdraw funds

At any point in time after joining the pool, a member can start the process of exiting by unbonding.
`unbond` will unbond part or all of the member's funds. After unbond has been called and the
unbonding duration has passed
{{ selendra: (<RPC network="selendra" path="consts.staking.bondingDuration" defaultValue={28}/> :selendra }}
eras which correspond to
days on {{ selendra: Selendra). :selendra }} A member may withdraw
their funds with `withdrawUnbonded`. Withdrawing effectively ends a member's relationship with their
pool, allowing them to join a different pool if desired. Check the "Withdraw unbonded funds" section
in
[this support article](https://support.selendra.org/support/solutions/articles/how-to-join-nomination-pools)
for guidelines.

:::info Unbonding transaction automatically triggers withdrawal of rewards

When there is a change in the bonded balance, the accumulated rewards in the pool thus far are automatically 
withdrawn to the account. The rewards are then accrued based on the updated bonded balance. 

:::

### Limitations

- A member cannot vote (e.g. in Referenda or for Council members) with their nominated funds. This
  may be changed in the future once accounts are afforded the ability to split votes.
- In order for a member to switch pools all funds from the account must be unbonded. This process
  takes 28 eras.
- A member can partially unbond the staked funds in the pool (at most 16 partial unbonds).

## Pool Administration

### States

- Open: The pool is open to be joined by anyone.
- Blocked: The pool is blocked; no joiners are permitted.
- Destroying: The pool is in the process of being destroyed. Once in this state the pool may never
  revert to any other state; it can only proceed to being destroyed. All members can be
  permissionlessly unbonded; this allows the pool to be dismantled regardless of any individual
  member’s proactivity.

### Roles

- Depositor: Creates the pool and is the initial member. The depositor can only leave the pool once
  all other members have left. Once they leave by withdrawing, the pool is fully removed from the
  system.
- Nominator: Can select the validators the pool nominates.
- State-Toggler: Can change the pool’s state and kick (permissionlessly unbond/withdraw) members if
  the pool is blocked.
- Root: Can change the nominator, state-toggler, or itself. Further, it can perform any of the
  actions the nominator or state-toggler can.

## Pool Lifecycle


### WORK IN PROGRESSS
