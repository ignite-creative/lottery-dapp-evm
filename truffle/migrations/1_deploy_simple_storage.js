require("dotenv").config();

const SimpleStorage = artifacts.require("SimpleStorage");
const LottoCoin = artifacts.require("LottoCoin");

const tokenName = process.env.TOKEN_NAME;
const tokenSymbol = process.env.TOKEN_SYMBOL;
const initialSupply = process.env.INITIAL_SUPPLY;

module.exports = function (deployer) {
  // deployer.deploy(SimpleStorage);
  deployer.deploy(LottoCoin, initialSupply, tokenName, tokenSymbol);
};
