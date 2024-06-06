import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ganache");
import accounts from "./accounts.json";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 50,
      },
    },
  },
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: accounts.map((account) => account.privateKey),
    },
  },
};

export default config;