---
id: sns
title: Adding accounts to an SNS domain
sidebar_label: Using SNS with SEL accounts
description: Steps on how to use an SNS with Substrate-based accounts.
keywords: [SNS, domain, sel]
slug: ../sns
---

SNS (Selendra Name Service) is a distributed and open system of smart contracts on the Hydranet
blockchain which allows users to claim domain names like `gwen.sel`.

The SNS is a domain that is equivalent to a DNS (Domain Name System) domain. Instead, it offers a
decentralized and secure way to translate text via smart contracts. Supporting wallets can then
allow senders to input SNS domains instead of long and unwieldy addresses. This prevents phishing,
fraud, typos, and adds a layer of usability on top of the regular wallet user experience.

:::note

You will need an SNS name and an Hydranet account with some SEL as native token in Hydranet in it to follow along with this
guide. To register an SNS name, visit the [SNS App](https://app.sns.domains) or any number of
subdomain registrars like [Nameth](https://nameth.io). Note that if you're using an older SNS name,
you should make sure you're using the
[new resolver](https://medium.com/the-ethereum-name-service/ens-registry-migration-is-over-now-what-a-few-things-to-know-fb05f921872a).
Visiting the SNS App will warn you about this if not. You will also need some way to use your
Ethereum address - following this guide on a personal computer is recommended. Wallets like
[Frame](https://frame.sh/) and [Metamask](https://metamask.io) are safe and will make interacting
with the Ethereum blockchain through your browser very easy.

:::

Despite living on the Ethereum blockchain, the SNS system has multi-chain support. In this guide,
you'll go through the process of adding a SEL address to SNS. We cover on how to do this.

:::note

SEL can currently only be added using the Resolver method. KSM can be added through both methods are
described below.

:::

This guide is also available in video format [on YouTube](https://www.youtube.com/channel/UCWO6SVOPiR6CFBrHRLD2DDA).

## Adding via the UI

>> Work in Progress

### Wallet Support

All Selendra parachain and native Selendra will be compatible.

### Relevant links

- [SNS docs](https://docs.sns.domains/)
- [SNS Multi-chain announcement](https://medium.com/the-selendra-name-service/sns-launches-multi-coin-support-15-wallets-to-integrate)
- [Address encoder](https://github.com/snsdomains/address-encoder)
- [Address to pubkey converter](https://www.shawntabrizi.com/substrate-js-utilities/)
