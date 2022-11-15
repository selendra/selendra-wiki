---
id: build-node-management
title: Node Management
sidebar_label: Node Management
description: Steps on how to manage your Polkadot node.
keywords: [node, management, deployment, operations, monitor]
slug: ../build-node-management
---

This page contains basic information about running a Parity Polkadot client. There are a lot of ways
to obtain/run a client, e.g. compiling from source, running in Docker, or downloading a binary. This
guide will always refer to the executable as `polkadot`.

**Always refer to the client's help `polkadot --help` for the most up-to-date information.**

:::note

Other client implementation teams: Feel free to make a PR to this page with instructions (or a link
to instructions) for your client.

:::

If you are trying to run a validator, refer to this tutorial
[here](../maintain/maintain-guides-how-to-validate-selendra.md).

## Basic Node Operations

**Selecting a chain**

Use the `--chain <chainspec>` option to select the chain. Can be `selendra`, or a custom chain spec. By default, the client will start Selendra.

**Archive node**

An archive node does not prune any block or state data. Use the `--pruning archive` flag. Certain
types of nodes like validators must run in archive mode. Likewise, all
[events](build-protocol-info.md/#events) are cleared from state in each block, so if you want to
store events then you will need an archive node.

**Exporting blocks**

To export blocks to a file, use `export-blocks`. Export in JSON (default) or binary
(`--binary true`).

```bash
selendra export-blocks --from 0 <output_file>
```

**RPC ports**

Use the `--rpc-external` flag to expose RPC ports and `--ws-external` to expose websockets. Not all
RPC calls are safe to allow and you should use an RPC proxy to filter unsafe calls. Select ports
with the `--rpc-port` and `--ws-port` options. To limit the hosts who can access, use the
`--rpc-cors` option.

**Execution**

The Selendra client implements a [Selendra Host](../learn/learn-selendra-host.md) and a
native runtime. The runtime must compile to WebAssembly and is stored on-chain. If the client's
runtime is the same spec as the runtime that is stored on-chain, then the client will execute blocks
using the client binary. Otherwise, the client will execute the Wasm runtime from the chain.

Therefore, when syncing the chain, the client will execute blocks from past runtimes using their
associated Wasm binary. This feature also allows forkless upgrades: the client can execute a new
runtime without updating the client.

Selendra client has two Wasm execution methods, interpreted (default) and compiled. Set the
preferred method to use when executing Wasm with `--wasm-execution <Interpreted|Compiled>`. Compiled
execution will run much faster, especially when syncing the chain, but is experimental and may use
more memory/CPU. A reasonable tradeoff would be to sync the chain with compiled execution and then
restart the node with interpreted execution.

## File Structure

The node stores a number of files in: `/home/$USER/.local/share/selendra/chains/<chain name>/`. You
can set a custom path with `--base-path <path>`.

**`keystore`**

The keystore stores session keys, which are important for validator operations.

- [Selendra documentation](../learn/learn-keys.md/#session-keys)
- [Substrate documentation](https://docs.substrate.io/main-docs/fundamentals/accounts-addresses-keys/#specialized-accounts)

**`db`**

The database stores blocks and the state trie. If you are running a validator node, it also stores
GRANDPA pre-votes and pre-commits and the offchain-worker DB. Use caution when
[migrating validator nodes](../maintain/maintain-guides-how-to-upgrade.md) to avoid equivocation. If
you want to start a new machine without resyncing, you can stop your node, back up the DB, and move
it to a new machine.

To delete your DB and re-sync from genesis, run:

```bash
selendra purge-chain
```

:::note Validators should sync using the RocksDb backend

This is implicit by default, but can be explicit by passing the `--database RocksDb` flag. In the
future, it is recommended to switch to using the faster and more efficient ParityDb option.
Switching between database backends will require a resync.

If you want to test out ParityDB you can add the flag `--database paritydb`.

:::

## Deployment Tools

Selendra maintains [Selendra Deployer](https://github.com/selendra/selendra-deployer), which
allows you to create local or remote cloud deployments of Selendra nodes. See the README for
instructions.

Validators, see the
[validator setup guide](../maintain/maintain-guides-how-to-use-selendra-validator-setup.md) for
information specific to deploying validator nodes.

## Monitoring and Telemetry

**Node status**

You can check the node's health via RPC with
[websocat](https://github.com/vi/websocat#installation):

```bash
echo '{"id":1,"jsonrpc":"2.0","method":"system_health","params":[]}' | websocat -n1 -B 99999999 ws://127.0.0.1:9944

{"jsonrpc":"2.0","result":{"peers":50,"isSyncing":false,"shouldHavePeers":true},"id":1}
```

**Logs**

The Polkadot client has a number of log targets. The most interesting to users may be:

- `afg` (Al's Finality Gadget - GRANDPA consensus)
- `babe`
- `telemetry`
- `txpool`
- `usage`

Other targets include:
`db, gossip, peerset, state-db, state-trace, sub-libp2p, trie, wasm-executor, wasm-heap`.

The log levels, from least to most verbose, are:

- `error`
- `warn`
- `info`
- `debug`
- `trace`

All targets are set to `info` logging by default. You can adjust individual log levels using the
`--log (-l short)` option, for example `-l afg=trace,sync=debug` or globally with `-ldebug`.

**Telemetry & Metrics**

The Parity Polkadot client connects to telemetry by default. You can disable it with
`--no-telemetry`, or connect only to specified telemetry servers with the `--telemetry-url` option
(see the help options for instructions). Connecting to public telemetry may expose information that
puts your node at higher risk of attack. You can run your own, private
[telemetry server](https://github.com/paritytech/substrate-telemetry) or deploy a
`substrate-telemetry` instance to a Kubernetes cluster using
[this Helm chart](https://github.com/w3f/substrate-telemetry-chart).

The node also exposes a Prometheus endpoint by default (disable with `--no-prometheus`). Substrate
has a
[monitor node metrics tutorial](https://docs.substrate.io/tutorials/get-started/monitor-node-metrics/)
which uses this endpoint.
