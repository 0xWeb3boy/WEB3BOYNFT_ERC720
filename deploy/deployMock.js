const { ConstructorFragment } = require("@ethersproject/abi");
const { network } = require("hardhat");

const { developmentChains,_name,_symbol,_initBaseURI } = require("../helper-hardhat-config");



module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;
  // If we are on a local development network, we need to deploy mocks!
  if (chainId == 31337) {
    log("Local network detected! Deploying mocks...");

    const args = [];
    await deploy("web3BoyNft", {
      from: deployer,
      args: [_name, _symbol, _initBaseURI],
      log: true,
      waitConfirmations: network.config.blockConfirmations || 1,
    });
  }
};
module.exports.tags = ["all", "mocks", "main"];
