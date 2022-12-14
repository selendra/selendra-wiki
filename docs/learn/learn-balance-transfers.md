---
id: learn-balance-transfers
title: Balance Transfers
sidebar_label: Balances Transfers
keywords: [balance, transfers, transaction, signing]
description: Steps on how to perform balance transfers.
slug: ../learn-balance-transfers
---

import RPC from "./../../components/RPC-Connection";

Balance transfers are used to send a balance from one account to another account. To start
transferring a balance, we will begin by using
[Selendra-Portal](https://portal.selendra.org/#/explorer). This guide assumes that you've already
[created an account](learn-account-generation.md) and have some funds that are ready to be
transferred.

:::info We support only the use of the [_Selendra-Portal](https://portal.selendra.org/#/explorer)
with the [_browser extension_](https://selendra-js.github.io/extension/),
provide support for third party applications.

:::

:::info Most of the content on this page has been moved to several support pages. See the links
below.

:::

- [Using the transfer tab or the send button on your account in the Selendra-Portal](https://support.selendra.org/support/solutions/articles/how-to-send-transfer-funds-out-of-your-sel-account-on-the-selendra-js-ui)
  - [Signing with the Selendra-Portal](https://support.selendra.org/support/solutions/articles/65000181993)
  - [Signing with the browser extension](https://support.selendra.org/support/solutions/articles/65000181989)

## Keep-Alive Checks

In {{ selendra: Selendra :selendra }} there are two main ways to
transfer funds from one account to another:

- `transfer keep-alive` (default option) will not allow you to send an amount that would allow the
  sending account to be removed due to it going below the
  [existential deposit](https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-)
  of
  {{ selendra: <RPC network="selendra" path="consts.balances.existentialDeposit" defaultValue={10000000000} filter="humanReadable"/>. :selendra }}
  
- `transfer` will allow you to send {{ selendra: SEL :selendra }}
  regardless of the consequence. If the balance drops below the existential deposit your account
  will be reaped. It may be that you do not want to keep the account alive (for example, because you
  are moving all of your funds to a different address). To switch the keep-alive check off visit
  [this support article](https://support.selendra.org/support/solutions/articles/65000169248).

:::info

Attempting to send less than the existential deposit to an account with
{{ selendra: 0 SEL :selendra }} will always fail, no matter if the
keep-alive check is on or not.

:::

{{ selendra: For instance, attempting to transfer 0.1 SEL to an account you just generated
(and thus has no SEL) will fail, since 0.1 is less than the existential deposit of 1 SEL and the account
cannot be initialized with such a low balance. :selendra }}
:::note

Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted from the
sending account if you attempt to transfer.

:::

## Existing Reference Error

If you are trying to reap an account and you receive an error similar to
`"There is an existing reference count on the sender account. As such the account cannot be reaped from the state"`,
then you have existing references to this account that must be first removed before it can be
reaped. References may still exist from:

- Bonded tokens (most likely)
- Unpurged session keys (if you were previously a validator)
- Token locks
- Existing recovery info
- Existing assets

### Bonded Tokens

If you have tokens that are bonded, you will need to unbond them before you can reap your account.
Follow the instructions at [Unbonding and Rebonding](../maintain/maintain-guides-how-to-unbond.md)
to check if you have bonded tokens, stop nominating (if necessary) and unbond your tokens.

### Purging Session Keys

If you used this account to set up a validator and you did not purge your keys before unbonding your
tokens, you need to purge your keys. You can do this by seeing the
[How to Stop Validating](../maintain/maintain-guides-how-to-stop-validating.md) page. This can also
be checked by checking `session.nextKeys` in the chain state for an existing key.

### Checking for Locks

Check out
[this support page](https://support.selendra.org/support/solutions/articles/why-can-t-i-transfer-tokens-)
to learn how to check for locks.

You can also check for locks by querying `system.account(AccountId)` in
[`Chain state` tab under the `Developer` drop-down menu in the Selendra-Portal](https://portal.selendra.org/#/chainstate).
Select your account, then click the "+" button next to the dropdowns, and check the relative `data`
JSON object. If you see a non-zero value for anything other than `free`, you have locks on your
account that need to get resolved.

### Existing Recovery Info

{{ selendra: Currently, Selendra does not use the
[Recovery Pallet](https://github.com/paritytech/substrate/blob/master/frame/recovery/), so this is
probably not the reason for your tokens having existing references. :selendra }}

### Existing Non-SEL Assets

Currently, {{ selendra: Selendra :selendra }} does not use the
[Assets Pallet](https://github.com/paritytech/substrate/tree/master/frame/assets), so this is
probably not the reason for your tokens having existing references.
