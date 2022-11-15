/*
There are utility functions in updateAuction.js to retrieve all these values on-chain.
To further reduce latency in the Auction Schedule tool we hard-code them as they have yet 
to change w/ time or are derived from blocks that have already reach finality.
A regularly scheduled GitHub action will be used to cache future auction blocks data.
*/

const SelAuctions = require("./data/SelendraAuctions.json");

// consts.slots.leasePeriod
const SelendraSlotLeasePeriod = 1209600;

// consts.slots.leaseOffsets
const SelendraSlotLeaseOffset = 921600;

// consts.auctions.leasePeriodsPerSlot
const SelendraLeasePeriodPerSlot = 8;

// Auction starting phases (45 hours)
const SelendraStartingPhase = 27000;

// const.auctions.endingPeriod (5 days)
const SelendraEndingPeriod = 72000;

// GetAuctionBlocks() in Auction-Schedule.jsx can generate all these values from a starting block number
const SelendraAuctions = SelAuctions;

// A future block that does not yet have an associated hash
const FutureBlock = "0x0000000000000000000000000000000000000000000000000000000000000000";

module.exports = {
  SelendraSlotLeasePeriod,
  SelendraSlotLeaseOffset,
  SelendraLeasePeriodPerSlot,
  SelendraStartingPhase,
  SelendraEndingPeriod,
  SelendraAuctions,
  FutureBlock,
}