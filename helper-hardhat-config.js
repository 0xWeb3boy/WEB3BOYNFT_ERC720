const networkConfig = {
  31337: {
    name: "localhost",
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
  },
  80001: {
    name: "polygon",
    ethUsdPriceFeed: "0x0715A7794a1dc8e42615F059dD6e406A6594651A",
  },
};

// Takes in the constructor arguments and is helpful in auto verifying the contract
const _name = "web3BoyNft";
const _symbol = "WEB3BOY";
const _initBaseURI = "ipfs://QmSFafqKSKdDpLtjmNHikDb8Xfqvr2Jh1jibwLPQDFQz5e/";
const DECIMALS = "18";
const INITIAL_PRICE = "10000000000000000";
const whitelistedAddresses = [
  "0x9adcc044d02fdd906ef44708a9b62fc98d4b2898",
  "0x1bd4c1c017c92669ad62ae33a43f50d7f3a71da7",
  "0xdf4e965a5c9d733d8b34556e2c667da07732c466",
];
const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_PRICE,
  _name,
  _symbol,
  _initBaseURI,
  whitelistedAddresses,
};
