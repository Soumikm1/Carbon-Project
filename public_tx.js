const path = require('path');
const fs = require('fs-extra');
const { Web3 } = require('web3');
var web3 = new Web3('http://localhost:8545');
var Tx = require('ethereumjs-tx').Transaction;
// const {accounts} = require("./accounts.json")
// use an existing account, or make an account
const privateKey =
  "0xf09500f190923957928fd47279fe34d996e27db58c89a86b33ddcc8c98d950a7";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const privateKeyWithoutPrefix = privateKey.startsWith('0x') ? privateKey.slice(2) : privateKey;

// Step 2: Convert the hexadecimal string to a byte array
const bytes = privateKeyWithoutPrefix.match(/.{1,2}/g).map(byte => parseInt(byte, 16));

// Step 3: Create a Uint8Array from the byte array
const uint8ArrayPrivateKey = new Uint8Array(bytes);

console.log(uint8ArrayPrivateKey);

// read in the contracts
const contractJsonPath = path.resolve(__dirname, "SimpleStorage.json");
const contractJson = JSON.parse(fs.readFileSync(contractJsonPath));
const contractAbi = contractJson.abi;
const contractBinPath = path.resolve(__dirname, "SimpleStorage.bin");
const contractBin = fs.readFileSync(contractBinPath);
// initialize the default constructor with a value `47 = 0x2F`; this value is appended to the bytecode
const contractConstructorInit =
  "000000000000000000000000000000000000000000000000000000000000002F";

// get txnCount for the nonce value
var txnCount = 0;
async function main() {
  txnCount = await web3.eth.getTransactionCount(account.address);

  // Continue with your code that depends on txnCount
}

main().catch(console.error);
console.log(web3.eth.net.getId());
const rawTxOptions = {
  nonce: web3.utils.numberToHex(txnCount),
  from: account.address,
  to: null, //public tx
  value: "0x00",
  data: "0x" + contractBin.toString('hex') + contractConstructorInit, // contract binary appended with initialization value
  gasPrice: "0x0", //ETH per unit of gas
  gas: "0x16E554", //max number of gas units the tx is allowed to use
  chainId: "1337", //network ID
};
console.log("Creating transaction...");
const tx = new Tx(rawTxOptions, {'name': 'besu'});
// console.log(tx);
console.log("Signing transaction...");
// console.log(typeof(uint8ArrayPrivateKey))
tx.sign(uint8ArrayPrivateKey);
console.log("Sending transaction...");
console.log(tx);
var serializedTx = tx.serialize();
console.log("tx serialized: " + serializedTx.toString("hex"));
const pTx = web3.eth.sendSignedTransaction(
  "0x" + serializedTx.toString("hex").toString("hex"),
);
console.log("tx transactionHash: " + pTx.transactionHash);
console.log("tx contractAddress: " + pTx.contractAddress);