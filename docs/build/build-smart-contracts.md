---
id: build-smart-contracts
title: Smart Contracts
sidebar_label: Smart Contracts
description: How smart contracts play their role in the Polkadot ecosystem.
keywords: [build, smart contract, evm, wasm]
slug: ../build-smart-contracts
---

The {{ selendra: Selendra :selendra }} Relay Chain will not natively
support smart contracts, however, parachains on
{{ selendra: Selendra :selendra }}  
will support smart contracts.

## Difference between developing a smart contract and a parachain

### Layer of Abstraction

When you write a smart contract, you are creating the instructions that associate with and deploy on
a specific chain address.

In comparison, a runtime module is the entire logic of a chain's state transitions (what's called a
state transition function).

Smart contracts must consciously implement upgradeability while parachains will have the ability to
swap out their code entirely through a root command or via the governance pallet.

When you build a smart contract, it will eventually be deployed to a target chain with its own
environment. Parachains allow the developer to declare the environment of their own chain, even
allowing others to write smart contracts for it.

### Gas Fees

Smart contracts must find a way to limit their own execution, or else full nodes are vulnerable to
DOS attacks. An infinite loop in a smart contract, for example, could consume the computational
resources of an entire chain, preventing others from using it. The
[halting problem](https://en.wikipedia.org/wiki/Halting_problem) shows that with a powerful enough
language, it is impossible to know ahead of time whether or not a program will ever cease execution.
Some platforms, such as Bitcoin, get around this constraint by providing a very restricted scripting
language. Others, such as Ethereum, "charge" the smart contract "gas" for the rights to execute
their code. If a smart contract does get into a state where execution will never halt, it eventually
runs out of gas, ceases execution, and any state transition that the smart contract would have made
is rolled back. {{ selendra: Selendra :selendra }} uses a _weight-fee
model_ and not a _gas-metering model_.

Parachains can implement arbitrarily powerful programming languages and contain no gas notion for
their own native logic. This means that some functionality is easier to implement for the developer,
but some constructs, such as a loop without a terminating condition, should _never_ be implemented.
Leaving certain logic, such as complex loops that could run indefinitely, to a non-smart contract
layer, or even trying to eliminate it, will often be a wiser choice. Parachains try to be proactive,
while smart contract platforms are event-driven.

## Building a Smart Contract

The Selendra Relay Chain itself will not support smart contracts. However, since the parachains that
connect to Polkadot can support arbitrary state transitions, they can support smart contracts.

Substrate presently supports smart contracts out-of-the-box in two ways:

- The EVM pallet offered by [Frontier][].
- The [Contracts pallet][] in the FRAME library for Wasm-based contracts.

### Frontier EVM Contracts

[Frontier][] is the suite of tools that enables a Substrate chain to run Ethereum contracts (EVM)
natively with the same API/RPC interface, Ethereum exposes on Substrate. Ethereum Addresses can also
be mapped directly to and from Substrate's SS58 scheme from existing accounts.

### Substrate Contracts

Substrate offers a built-in
[contract pallet](https://paritytech.github.io/substrate/master/pallet_contracts/index.html); as
time goes on, more parachains will support [WebAssembly](../learn/learn-wasm.md) smart contracts.
Additionally, there is the
[EVM Pallet](https://github.com/paritytech/frontier/tree/master/frame/evm#evm-module), which allows
a parachain to implement the Ethereum Virtual Machine, thereby supporting almost direct ports of
Ethereum contracts.

A video version of the recap of the smart contract situation is available on the
[Polkadot YouTube channel](https://www.youtube.com/watch?v=fKHkFBXaUxQ).

#### Resources

[When should I build a Substrate runtime versus a Substrate smart contract](https://stackoverflow.com/a/56041305)?
This post answers the question more technically of when a developer might choose to develop a
runtime versus a smart contract.

Here is the list of current resources available to developers who want to get started writing smart
contracts to deploy on parachains based on Substrate.

- [ink!](https://github.com/paritytech/ink) - Parity's ink to write smart contracts.
- [Substrate ink! Workshop](https://docs.substrate.io/tutorials/smart-contracts/) - Walks you
  through the basics of writing and deploying an ERC-20 token using `ink!`.

### Contracts Pallet

The experience of deploying to an EVM-based chain may be more familiar to developers that have
written smart contracts before. However, the Contracts pallet makes some notable improvements to the
design of the EVM:

1. **Wasm**. The Contracts pallet uses WebAssembly as its compilation target. Any language that
   compiles to Wasm can potentially be used to write smart contracts. Nevertheless, it is better to
   have a dedicated domain-specific language, and for that reason Parity offers the [ink!](#ink)
   language.

2. **Deposit**. Contracts must hold a deposit (named _ContractDeposit_ ) suitably large enough in
   order to justify their existence on-chain. A deployer needs to deposit this into the new contract
   on top of the _ExistentialDeposit_.
3. **Caching**. Contracts are cached by default and therefore means they only need to be deployed
   once and afterward be instantiated as many times as you want. This helps to keep the storage load
   on the chain down to the minimum. On top of this, when a contract is no longer being used and the
   _existential deposit_ is drained, the code will be erased from storage (known as reaping).

#### Storage Rent: Deprecated

`pallet_contracts` was initially designed to combat unbounded state growth by charging contracts for
the state they consume but has since been deprecated.

See the associated [pull request](https://github.com/paritytech/substrate/pull/9669) for more
details.

### Polkadot Standards Proposals (PSPs)

Web3 Foundation supports proposals for Polkadot that define a set standards to fit ecosystem needs.
These standards go through several acceptance phases, where the engagement of the whole community is
needed to build valuable and future-proof standards. All the teams who will benefit from a standard
need to agree on its content.

Some of these PSPs are targeting Substrate's `contracts` pallet:

- [PSP22 - Fungible Token Standard](https://github.com/w3f/PSPs/blob/master/PSPs/psp-22.md) Please
  visit [Polkadot Standards Proposals (PSPs) Github](https://github.com/w3f/PSPs) for more
  information.

### Ink

[ink!](https://github.com/paritytech/ink) is a domain specific language for writing smart contracts
in Rust and compiles to Wasm code. As it states in its README, it is still in an experimental phase
so brave developers should be aware that they might have a bumpy - but workable - development
experience. There are some projects that have built projects in ink! with a decent level of
complexity such as Plasm's [Plasma contracts][plasm plasma], so it is mature enough to start
building interesting things.

For interested developers, they can get started writing smart contracts using ink! by studying the
[examples](https://github.com/paritytech/ink/tree/master/examples) that were already written. These
can be used as guideposts to writing more complex logic that will be deployable on smart contract
parachains.

ink! has laid much of the groundwork for a new smart contract stack that is based on a Wasm virtual
machine and compatible with Substrate chains.

#### Libraries for Smart Contracts in `ink!`

Collected below are some community examples of smart contracts in `ink!`. **Are you working on a
smart contract example? Ask us to add it to this page!**

- [OpenBrush](https://docs.openbrush.io/): an `ink!` library providing standard contracts based on
  [PSP](https://github.com/w3f/PSPs) with useful contracts and macros for building.
- [Metis](https://github.com/patractlabs/metis): a Wasm contract standard library, developed by
  [Patract Labs](https://github.com/patractlabs).

## Smart Contract Environments are still Maturing

It is still early for smart contracts on {{ selendra: Selendra :selendra }}
and the development is only now stabilizing. We are actively producing
content to help developers get up to speed and will maintain the Wiki with the latest resources. You
should also keep up to date with the following links:

### Parity Tech

- [ink!](https://github.com/paritytech/ink)
- [Substrate contracts pallet](https://github.com/paritytech/substrate/tree/master/frame/contracts)

### Parachains

- [Indranet](https://indranet.selendra.org/)

#### Indranet

[Indranet](https://indranet.selendra.org/) is another project that is focusing on Selendra as a
parachain and will support Ethereum compatible smart contracts. Since Indranet uses
[Frontier](https://github.com/paritytech/frontier), an interoperability layer with existing Ethereum
tooling, it will support all applications that are written to target the EVM environment with little
friction.

Try deploying a smart contract to Indranet by following our [documentation][indranet docs].

## Keep In Touch


[frontier]: https://github.com/paritytech/frontier
[contracts pallet]: https://github.com/paritytech/substrate/blob/master/frame/contracts/
[plasm plasma]: https://github.com/staketechnologies/Plasm
[indranet]: https://indranet.selendra.org
[indranet docs]: https://indranet.selendra.org/docs/
[frontier]: (https://github.com/paritytech/frontier)
