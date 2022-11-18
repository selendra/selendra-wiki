---
id: maintain-guides-secure-validator
title: Secure Validator
sidebar_label: Secure Validator
description: Tips for running a secure validator.
keywords: [secure validator, validator, configuration]
slug: ../maintain-guides-secure-validator
---

Validators in a Proof of Stake network are responsible for keeping the network in consensus and
verifying state transitions. As the number of validators is limited, validators in the set have the
responsibility to be online and faithfully execute their tasks.

This primarily means that validators:

- Must be high availability.
- Must have infrastructure that protects the validator's signing keys so that an attacker cannot
  take control and commit slashable behavior.

## High Availability

High availability set-ups that involve redundant validator nodes may seem attractive at first.
However, they can be **very dangerous** if they are not set up perfectly. The reason for this is
that the session keys used by a validator should always be isolated to just a single node.
Replicating session keys across multiple nodes could lead to equivocation slashes or parachain
validity slashes which can make you lose **100% of your staked funds**.

The good news is that 100% uptime of your validator is not really needed, as it has some buffer
within eras in order to go offline for a little while and upgrade. For this reason, we advise that
you only attempt a high availability set-up if **you're confident you know exactly what you're
doing.**

Many expert validators have made mistakes in the past due to the handling of session keys.

Remember, even if your validator goes offline for some time, the offline slash is much more
forgiving than the equivocation or parachain validity slashing.

### WORK IN PROGRESS
