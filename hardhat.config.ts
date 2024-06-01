import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-ganache");
require("@nomiclabs/hardhat-waffle");
// import "@nomiclabs/hardhat-web3";

// const config: HardhatUserConfig = {
//   solidity: {
//     version: "0.8.0",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 5,
//       },
//     },
//   },
// };
module.exports = {
  solidity: "0.8.0",
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x627306090abab3a6e1400e9345bc60c78a8bef57",  // Private key for account 1
        "0xf17f52151ebef6c7334fad080c5704d77216b732",  // Private key for account 2
        "0xc5d2460186f7233c927e7db2dcc703c0e500db34",  // Private key for account 3
        "0x92d8f1024e6d77597e92ef4dc727587cc38a4472",  // Private key for account 4
        "0x5aeda56215b167893e80b4fe645ba6d5bab767de",  // Private key for account 5
        "0x3a1c41cf80c4f09f9b33b914aab6aeb26b8ff748",  // Private key for account 6
        "0x14dc79964da2c08b23698b3d3cc7ca32193d9955",  // Private key for account 7
        "0x23618e81e3a08838ef12e834dffe61ca1d78e2b8",  // Private key for account 8
        "0xa2386e1f9b1962c85e6a35c24dc4b1e25454278c",  // Private key for account 9
        "0xa10d6a5029055a085e3f94bb9d8f94bf7f87c0e5",  // Private key for account 10
        "0xe56e81a0492f17b580190b8b273f5a6374da4774",  // Private key for account 11
        "0x74de5d4fcbf63e00296fd95d33236b9794016631",  // Private key for account 12
        "0xbe2a26889d2f3ed6857270354f0c20c80b1ed4a7",  // Private key for account 13
        "0xb5459d8e67917f5464f79d6a5a398047f2949ac1",  // Private key for account 14
        "0x28e67e0d6f7dcd0b5b40edcd6749acba1534f04c",  // Private key for account 15
        "0x324e6dcf3915a85f3c80f801d314615bcd3a3b8c",  // Private key for account 16
        "0x50f2e8d2bdfdf18e1ab8de7064ea7ba1f1cbe8e2",  // Private key for account 17
        "0xb4f30ce6c1adff9ee20541cb862c1a341f35d21e",  // Private key for account 18
        "0x2c57a9f71db06cd8232f70b83df8e359ee7e08c5",  // Private key for account 19
        "0xd42707c3ff75ce4fc9df749318c60b5e1e5df10a"   // Private key for account 20
      ]
    }
  }
};

// export default config;