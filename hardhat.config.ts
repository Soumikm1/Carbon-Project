require("@nomiclabs/hardhat-waffle");

const accounts = [
  "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113b841ba9335e0f0f4c349e17a",
  "0x6c8f795b4b1e3b04c290089c4e4f90b4f92e4f6f2767b4cf451759b021f7dc50",
  "0x6370fd0333e1e4c9a0d7b2e4b1da8f6c1c78d6f019a1f34303a9a5d03cb23f19",
  "0x646f1ce2d8f07dcb92e6b2c73f687ac3b3ffb4183b6e8ac8d2b0c781326bedd8",
  "0xadd53f9a7e588d08b7e4b8ff2318970cba7245a2aefdd9f0df43b6a5f65242b1",
  "0x395df67f0c2eebd8cfadee3823d1d88992ef09ddbf1efab48d4c5c8315701a70",
  "0x5a75cb7b8c3c10294a146fc99e370ff50fdd36e2ffb8b2e5e6e6e29146fecc5b",
  "0xf5801fb8c92037bcd0d2a21f8c91f8d75b9f0c8c2456d4c7f8285a2d55f9f1d1",
  "0x8b4bfc7a3f201317d7e430bf6f2c69a36208d0ad8356ffb7f15e5d2f2fdf133b",
  "0x5a9d4380e08ff443b97fdc6f75fbcdbe319042f824be1f69ad5d74d9fa64c11e",
  "0xb94f5374fce5edbc8e2a8697c15331677e6ebf0b4b55fc5478f52a2d3c4a56a0",
  "0x527dcfbf7b1f5b054e7c32b79d8fa48a9f124a6bca1b18a8f7430a5a6e27b4e5",
  "0x7307baf35c60e6a39ec3e158b6b8c3ecf1c6f43dc9af27fa116bb1ff0d44a2d7",
  "0x32d8c6a7c97fb5d4f1651ffac9b741d05efb37ab87c1d59b463c8f8b2b7b1ba1",
  "0x218f56b3f7c79913f7a63a59c06d3d3136841c2b4e89c0d0480f13c8e938b60d",
  "0x341c7adf507dfba1839b7178fbfe6f5f0d2293c9e7b4d97f7611c5f3c96d7f6e",
  "0xbda5747bfd65f08deb54cb465eb87d40e51b197e5b6f645c43db4ce6e8b3db42",
  "0x56e6b7a58dcf3b2e6fbe7fb5bb63467b6b2a2b6b9c60db7b1c73c3f77e93b8cf",
  "0x9214f5b1bdb6de3c9a252b2aa4d18acbe16cfbb9cf028360a50fa82e845a1677",
  "0x5a6deaa2bc413fb3a5cfdf6f0e5a8a25a6f37d07b7e79d648fc3ecbff245d916"
];

module.exports = {
  solidity: "0.8.0",
  settings: {
    optimizer: {
      enabled: true,
      runs: 5,
    },
  },
  networks: {
    besu: {
      url: "http://127.0.0.1:8545",
      accounts: accounts
    }
  }
};
