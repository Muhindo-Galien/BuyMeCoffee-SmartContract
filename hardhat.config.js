

require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
//  GOERLI_RPC_URL
//  PRIVATE_KEY

const GOERLI_URL = process.env.GOERLI_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  networks: {
    goerli: {
        url: GOERLI_URL,
        accounts: [PRIVATE_KEY],
        chainId: 5,

    },
},
  solidity: "0.8.7"
};