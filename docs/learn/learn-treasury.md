---
id: learn-treasury
title: Treasury
sidebar_label: Treasury
description: Details about Selendra's on-chain Treasury.
keywords: [treasury, funds, funding, tips, tipping]
slug: ../learn-treasury
---

import RPC from "./../../components/RPC-Connection";

The Treasury is a pot of funds collected through a portion of block production rewards, transaction
fees, slashing, [staking inefficiencies](learn-staking.md#inflation), etc.

The funds held in the Treasury can be spent by making a spending proposal that, if approved by the
[Council](learn-governance.md#council), will enter a waiting period before distribution. This
waiting period is known as the _spend period_, and its duration is subject to
[governance](learn-governance.md), with the current default set to
{{ selendra: <RPC network="selendra" path="consts.treasury.spendPeriod" defaultValue={345600} filter="blocksToDays"/> :selendra }}
days. The Treasury attempts to spend as many proposals in the queue as it can without running out of
funds.

Treasury payout is an automatic process:

- If the Treasury funds run out with approved proposals left to fund, those proposals are kept in
  the approved queue, and will receive funding in the following spend period.
- If the Treasury ends a spend period without spending all of its funds, it suffers a burn of a
  percentage of its funds - thereby causing deflationary pressure. This encourages the spending of
  the funds in the Treasury by Selendra's governance system.
  {{ selenedra: This percentage is currently at 1%
  on selendra :selendra }}.
When a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at
least 5% of the proposed spend (see below for variations). This deposit will be slashed if the
proposal is rejected, and returned if it is accepted.

Proposals may consist of (but are not limited to):

- Infrastructure deployment and continued operation.
- Network security operations (monitoring services, continuous auditing).
- Ecosystem provisions (collaborations with friendly chains).
- Marketing activities (advertising, paid features, collaborations).
- Community events and outreach (meetups, pizza parties, hackerspaces).
- Software development (wallets and wallet integration, clients and client upgrades).

The [Council](learn-governance#council) governs the Treasury and how the funds are spent is up to
their judgment.

:::caution

The Council does not approve or deny Treasury Proposals based on the available funds. Proposals are
not approved just because there are funds ready to spend but are subject to a burn.

:::

## Funding the Treasury

The Treasury is funded from different sources:

1. Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury
   with a reward going to the entity that reported the validator (another validator). The reward is
   taken from the slash amount and varies per offence and number of reporters.
2. Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the
   remainder going to the block author.
3. Staking inefficiency: [Inflation](learn-staking.md#inflation) is designed to be 10% in the first
   year, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in
   staking. Any deviation from this ratio will cause a proportional amount of the inflation to go to
   the Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to
   the validators as reward. If the staking rate is greater than or less than 50%, then the
   validators will receive less, with the remainder going to the Treasury.
4. Parathreads: [Parathreads](learn-parathreads.md) participate in a per-block auction for block
   inclusion. Part of this bid goes to the validator that accepts the block and the remainder goes
   to the Treasury.


### WORK IN PROGRESS