---
id: build-data
title: Data Analytics
sidebar_label: Data
description: An overview about building with data analytics
keywords: [data, index, query, explorer, dashboard]
slug: ../build-data
---

The tools that accentuate and aggregate the data within blockchains are integral for a multi-chain
future. Parachains will need robust and secure ways to index and aggregate data, such as a data
aggregation layer.

## Indexing and Querying

### Subsquid

[Subsquid](https://subsquid.io/) is an open-source framework for building tailored GraphQL APIs to
query Substrate chain state and history.

Subsquid replaces direct gRPC node access with perfomant Squid archive gateways, allowing quick
synchronization of the API with the historical on-chain data.

Subsquid-powered APIs support filtering, pagination, union types, interfaces and full-text search
out-of-the-box, and can be further extended with custom GraphQL resolvers.

### SubQuery

[SubQuery](https://subquery.network/) is an indexer that allows for the indexing, transforming, and
querying of Substrate chain data to power applications. The decentralized network acts as a
chain-agnostic data aggregation, indexing, and querying layer between blockchains and applications.

SubQuery abstracts away blockchain-specific data idiosyncrasies using the
[SubQuery SDK](https://github.com/subquery/subql).

### Selendra-based Explorers

As you can imagine, blockchain explorers also offer data analytics through an interface where users
can examine common data points.

Some block explorers in the Selendra ecosystem are listed on the
[tools page](build-tools-index.md##block-explorers).
