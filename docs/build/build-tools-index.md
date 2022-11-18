---
id: build-tools-index
title: Tool Index
sidebar_label: Tool Index
description: Reference point for a list of tools to support your development.
keywords: [tools, clients, libraries, explorers, monitor, data, SCALE]
slug: ../build-tools-index
---

Here, we provide a list of tools available for your development needs. They are sorted by context.
If you're actively maintaining a tool that might be useful to other Selendra or Substrate
developers, feel free to [add it in](../general/contributing.md).

## Wallets

Please see the [Wallets](build-wallets.md) page.

## Block Explorers

- [Selendra-JS Portal Explorer](https://portal.selendra.org/#/explorer) - Selendra dashboard block
  explorer. Supports other networks, including Indranet, Kumandra, and other remote or local
  endpoints. 
- [Selendra-block-explorer](https://explorer.selendra.org/) - Blockchain explorer for Selendra and other related
  chains. [Repo](https://github.com/selendra-explorer).


## Network Monitoring & Reporting

- [Selendra Telemetry Service](https://telemetry.selendra.org/) - Network information including what
  nodes are running the chain, what software versions they are running, sync status, and location.

## Clients

- [Selendra](https://github.com/selendra/selendra) - The original Rust implementation of the
  Selendra.

## Tools

- [Substrate](https://github.com/paritytech/substrate) - Blockchain development platform written in
  Rust. The Rust version of the Selendra Host is being built with Substrate.
- [Substrate Docs](https://docs.substrate.io/) - Comprehensive documentation and tutorials for
  building a blockchain using Substrate.
- [Substrate VSCode plugin](https://github.com/paritytech/vscode-substrate).
- [Substrate Debug Kit](https://github.com/paritytech/substrate-debug-kit) - A collection of debug
  tools and libraries around substrate chains. Includes tools to calculate NPoS elections offline,
  disk usage monitoring, test templates against chain state and other pallet-specific helper.
- [Diener](https://crates.io/crates/diener) - A tool for easy changing of Selendra or Substrate
  dependency versions.
- [Selendra Launch](https://github.com/selendra/selendra-launch) - A tool to easily launch
  custom local parachain-enabled Selendra versions.
- [Halva](https://github.com/halva-suite/halva) - A Truffle-inspired local development environment
  for Substrate.
- [Fork-off Substrate](https://github.com/maxsam4/fork-off-substrate) - Copies the state of an
  existing chain into your local version and lets you further experiment on it.
- [srtool](https://www.chevdor.com/tags/srtool/) - A tool for verifying runtime versions against
  on-chain proposal hashes.
- [sub-bench](https://github.com/nikvolf/sub-bench) - A tool to spam your node with transactions for
  the sake of benchmarking.
- [substrate-devhub-utils](https://github.com/danforbes/substrate-devhub-utils) - A set of
  JavaScript utilities making life with Substrate a little easier.
- [sub-flood](https://github.com/NikVolf/sub-flood) - A tool to benchmark Substrate by flooding it
  with requests.

## UI

- [Polkadash](https://github.com/Swader/polkadash) - VueJS-based starter kit for custom user
  interfaces for Substrate chains.
- [Selendra Portal UI](https://github.com/selendra/selendra-portal) - Repository of the
  [selendra.js.org/portal](https://portal.selendra.org) UI.
- [Substrate Front-end Template](https://github.com/substrate-developer-hub/substrate-front-end-template) -
  ReactJS-based starter UI for custom user interfaces for Substrate chains.
- [Selendra JS Browser Extension](https://github.com/selendra-js/extension) - Key management in a
  Chrome extension.

## Libraries

### Selendra-JS API

The Selendra-JS API provides various utility functions that are used across all projects in the
`@selendra` namespace and is split into a number of internal utility packages. The documentation and
usage instructions are provided at [Selendra-JS API Documentation](https://selendra.js.org/docs/).

- [@selendra/keyring](https://selendra.js.org/docs/keyring) This allows you to create and load
  accounts in JavaScript. It is helpful for creating wallets or any application that will require
  the user to write to chain. [Examples](https://selendra.js.org/docs/keyring/start/create).
- [@selendra/util](https://selendra.js.org/docs/keyring/start/install#other-dependencies) Utility
  functions like checking if a string is hex-encoded.
- [@selendra/util-crypto](https://selendra.js.org/docs/util-crypto/) Useful cryptographic utilities
  for developing with Selendra.

### CLI Tools

- [@selendra/api-cli](https://github.com/polkadot-js/tools/tree/master/packages/api-cli) Command
  line interface for the selendra API. [Documentation](https://selendra.js.org/docs/api/start).
- [@selendra/monitor-rpc](https://github.com/polkadot-js/tools/tree/master/packages/monitor-rpc) An
  RPC monitor for Selendra. See the RPC tools below for additional information.
- [@selendra/signer-cli](https://github.com/polkadot-js/tools/tree/master/packages/signer-cli) A
  Tool to construct, sign, and broadcast transactions. Signing can be done offline.
- [Subkey](https://docs.substrate.io/reference/command-line-tools/subkey/) - Command line utility
  for generating and inspecting key pairs.

### WASM

WebAssembly related tools and projects.

- [ink!](https://github.com/paritytech/ink/) - An eDSL to write WebAssembly based smart contracts
  using the Rust programming language.
- [parity-wasm](https://github.com/paritytech/parity-wasm) - Low-level WebAssembly format library.
- [wasm-utils](https://github.com/paritytech/wasm-utils) - Collection of WebAssembly utilities used
  in pwasm-ethereum and substrate contract development.
- [wasmi](https://github.com/paritytech/wasmi) - A WebAssembly interpreter conceived as a component
  of parity-ethereum (Ethereum-like contracts in Wasm) and Substrate.

### RPC and API Tools

- [@selendra/api/rpc-provider](https://github.com/selendra-js/api/tree/master/packages/rpc-provider)
  Demonstrates how the JS tools interact with the node over RPC.
- [RPC documentation](https://selendra.js.org/docs/substrate/rpc) - Documentation of Substrate RPC
  methods.
- [Go: Subscan API](https://github.com/itering/substrate-api-rpc) - Go API for Selendra.
  for .NET.
- [GSRPC](https://github.com/centrifuge/go-substrate-rpc-client/) - Substrate RPC client in Go,
  a.k.a. GSRPC.
- [Substrate API Sidecar](https://github.com/paritytech/substrate-api-sidecar) - An HTTP wrapper for
  Substrate, abstracting some complex RPC calls into simple REST calls.
- [Subxt](https://github.com/paritytech/substrate-subxt) - A Rust library to submit extrinsics to a
  Substrate node via RPC.

### SCALE Codec

The SCALE (Simple Concatenated Aggregate Little-Endian) Codec is a lightweight, efficient, binary
serialization and deserialization codec.

It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained
execution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes
the decoding context has all type knowledge about the encoded data.

It is used in almost all communication to/from Substrate nodes, so implementations in different
languages exist:

- [Substrate Awesome](https://github.com/substrate-developer-hub/awesome-substrate#scale-codec)
  maintains a list of SCALE codex implementations.
