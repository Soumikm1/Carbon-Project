// accountBalance.js
const {Web3} = require('web3');

// Replace with your Ethereum node URL
const web3 = new Web3('http://localhost:8545');

// Replace with the account address you want to check
const accountAddress = '0xDC790DaA2c5806d7694f30c6522111fCc3d16EB1';

async function getAccountBalance() {
    try {
        const balanceWei = await web3.eth.getBalance(accountAddress);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
        
        console.log('Account Address:', accountAddress);
        console.log('Balance in Wei:', balanceWei);
        console.log('Balance in Ether:', balanceEth);
    } catch (error) {
        console.error('Error fetching account balance:', error);
    }
}

getAccountBalance();