const { network } = require("hardhat");
const {
  developmentChains,
  _name,
  _symbol,
  _initBaseURI,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  log("----------------------------------------");
  arguments = [_name, _symbol, _initBaseURI];
  const web3BoyNft = await deploy("web3BoyNft", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("verifying.....");
    await verify(web3BoyNft.address, arguments);
  }
};

module.exports.tags = ["all", "web3BoyNft", "main"];
