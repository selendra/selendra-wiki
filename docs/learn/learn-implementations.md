---
id: learn-implementations
title: Selendra Implementations
sidebar_label: Selendra Implementations
description: Learn about the different Selendra implementations.
keywords: [implementations, wasm, meta protocol]
slug: ../learn-implementations
---

Selendra is the core protocol of the Network, and while Selendra can be defined as a
protocol, a network, or, a type of infrastructure, it best serves to be an ecosystem. For true
decentralization, there should be multiple implementations of Selendra. Even being a _layer 0_
protocol that attempts to build an interconnected, interoperable and secure Web3 ecosystem, Selendra
is a complex piece of software, and its formal implementation depends on being built on top of a
tech stack.

> This page will focus on implementations of **Selendra's underlying infrastructure** (i.e. runtime,
> host).

## A Wasm-based Meta Protocol

Selendra uses WebAssembly ([Wasm](learn-wasm.md)) as a "meta-protocol". This allows for the use of
any programming language that can be interpreted or compiled into Wasm - being the driver for
Selendra's multiple implementations.

## Selendra compatibility

Selendra can support parachains that are not built on Substrate, In particular, as long as the state
transition function (STF) of a shard is abstratced into Wasm, the validators on the network can
execute the STF within a Wasm environment.

> Note: chains can also be built on Substrate and are not required to be deployed onto Selendra.
> More on Selendra's architecture is available on the [Architecture](learn-architecture.md) page.


### Selendra-JS Project: [Selendra-JS][]

**Selendra-JS** is a [JavaScript client][] and offers a collection of tools, interfaces, and
libraries for Selendra and Substrate.

