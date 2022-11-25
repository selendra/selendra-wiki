---
id: learn-account-generation
title: Account Generation
sidebar_label: Account Generation
description: Steps on generating a Selendra account.
keywords: [account, account generation, selendra account, selendrajs]
slug: ../learn-account-generation
---

## DISCLAIMER: Key Security

The _only_ ways to get access to your account are via your secret seed or your account's JSON file
in combination with a password. You must keep them both secure and private. If you share them with
anyone they will have full access to your account, including all of your funds. This information is
a target for hackers and others with bad intentions - see also
[How to Recognize Scams](../general/scams.md).

<iframe width="560" height="315" src="https://youtube.com/embed/ARsdXZycJAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br/><br/>

On this page, we recommend a variety of account generation methods that have various convenience and
security trade-offs. Please review this page carefully before making your account so that you
understand the risks of the account generation method you choose and how to properly mitigate them
in order to keep your funds safe.<br/><br/>


## Ways to generate an account

The **most user-friendly** way to create a Selendra address is through the
[Selendra-Portal](https://portal.selendra.org/#/accounts). Remember to back up the seed phrase used
to generate your account - the accounts are stored only in your browser, so purging the cache will
wipe your accounts as well. You would then have to recreate them using the seed phrase given to you
by the UI - this will also restore all your previously held balances.

A **more convenient and recommended** method of keeping the accounts stored on your computer is
using the [Selendra browser extension](https://github.com/selendra-js/extension). This extension
remembers your accounts and allows you to clear your browser cache without fear. Still, don't forget
to back up your seed phrase - if you lose access to this computer or the extension somehow crashes
beyond repair, the phrase will come in handy.

Please note that as this keeps your accounts in the browser, it is not safe to keep significant
holdings. By definition, a browser is a "hot wallet" and susceptible to a wide range of attacks, so
keep your funds in cold storage when dealing with non-trivial amounts. For improved security, you
can securely stash away the seed phrase for your accounts and remove all traces of the accounts from
your computer after creating them.

Besides the extension and the default UI, Selendra addresses can also be created with the
[Subkey tool](https://github.com/paritytech/substrate/tree/master/bin/utils/subkey). Subkey is
intended for users comfortable with using the command line and can seem intimidating but is quite
approachable. Follow the instructions in the
[Subkey documentation](https://docs.substrate.io/reference/command-line-tools/subkey/). When used
properly, Subkey is the **most secure** available method of creating an account.


:::info How-to guides to generate an account

See our Support Articles for more information about how to create an account using the tools below.

- [Selendra-JS Browser Extension](#selendra-js-browser-extension) **RECOMMENDED FOR MOST USERS**
- [Subkey](#subkey) **ADVANCED and MOST SECURE**
- [Selendra-Portal](#selendra-js-apps)
- [Vanity Generator](#vanity-generator)

:::

:::note

If you prefer video instructions for creating an account using Selendra JS, we have an easy to
follow guide for beginners [on YouTube](https://www.youtube.com/watch?v=sy7lvAqyzkY)

:::

## Selendra-JS Browser Extension

The Selendra-JS Browser Extension (simply referred to as Selendra Extension) provides a reasonable
balance of security and usability. It provides a separate local mechanism to generate your address
and interact with Selendra.

This method involves installing the Selendra Extension and using it as a “virtual vault," separate
from your browser, to store your private keys. It also allows the signing of transactions and
similar functionality.

It is still running on the same computer you use to connect to the internet with and thus is less
secure than using Parity Signer or other air-gapped approaches.

:::info For the tutorial on how to create an account using Selendra Extension, visit
[this support article](https://selendra.org/blogs/how_to_create_account_with_selendra-js_extension).

:::

### Reset Password using the browser extension

:::warning

Before following the instructions below make sure you have your mnemonic phrase stored in a safe
place accessible to you.

:::

Let's say you created `ACCOUNT 1` protected by password `PSW 1`. To reset the password of your
`ACCOUNT 1` using the browser extension you must follow the following steps:

- On the browser extension go to `ACCOUNT 1` and click "Forget account". This action will delete the
  access to your account. Note that your tokens are still in your account on the selendra blockchain
  network.
- On the browser extension click the "+" button in the topright corner and select the option "Import
  account from pre-existing seed". After entering the mnemonic phrase you can chose a new password
  `PSW 2`.

:::info JSON files do not allow to change account passwords

If you add the account to the extension using the option "Restore account from backup JSON file",
this will allow you to restore access to your account using JSON file protected by the password
`PSW 1`, but does not let you set a new password. Thus, `PSW 1` will become the account password by
default.

:::


### Set Address for Selendra Mainnet

In Selendra you can use the same address on multiple chains. To switch between chains you can follow
The [Accounts page](learn-accounts.md#address-conversion-tools) has a tool you can use to convert
your address between the different chain formats.

:::info For privacy reasons, we recommend creating a new address for each chain you're using.

Your address' format is only visual - the data used to derive this representation of your address
are the same, so you can use the same address on multiple chains. However, for privacy reasons, we
recommend creating a new address for each chain you're using.

:::

You can copy your address by clicking on the account's icon while the desired chain format is
active. E.g. selecting "Substrate" as the format will change your address, and clicking the colorful
icon of your account will copy it in that format. While in Selendra mode, that address format will
be copied, and so on.

## Subkey

Subkey is recommended for technically advanced users who are comfortable with the command line and
compiling Rust code. Subkey allows you to generate keys on any device that can compile the code.
Subkey may also be useful for automated account generation using an air-gapped device. It is not
recommended for general users. For the tutorial on how to create an account using Subkey, visit
[this support article](https://support.selendra.org/support/solutions/articles/how-to-create-an-account-in-subkey).

## Selendra-Portal

:::caution

If you use this method to create your account and clear your cookies in your browser, your account
will be lost forever if you do not [back it up](learn-account-restore.md). Make sure you store your
seed phrase in a safe place, or download the account's JSON file if using the Selendra{.js} browser
extension. Learn more about account backup and restoration [here](learn-account-restore.md).

:::

Using the Selendra-JS user interface without the plugin is **not recommended**. It is the least
secure way of generating an account. It should only be used if all of the other methods are not
feasible in your situation. For the tutorial on how to create an account using Selendra-JS Apps,
visit
[this support article](https://support.selendra.org/support/solutions/articles/selendra-ui).

### Reset password using the Selendra-Portal

To reset the password of an account created with Selendra-JS Apps UI you just need to go in the
"Accounts" tab, click the icon with three vertical SELs on your account and select "Change this
account's password".

:::info

If you create an account first using Selendra-JS Apps, and then add it to the browser extension,
you need to follow the
[guidelines for the browser extension](#reset-password-using-the-browser-extension) to change the
password of such account.

:::

## Vanity Generator

The vanity generator is a tool on [Selendra-Portal](https://portal.selendra.org/#/accounts/vanity)
that lets you generate addresses that contain a specific substring. For the tutorial on how to
create an account using Vanity Generator, visit
[this support article](https://support.selendra.org/support/solutions/articles/65000171416).
