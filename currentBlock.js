// currentBlock.js
const { Web3 } = require('web3');
// Replace with your Ethereum node URL
const web3 = new Web3('http://localhost:8545');

async function getCurrentBlock() {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        console.log('Current Block Number:', blockNumber);

        const block = await web3.eth.getBlock(blockNumber);
        console.log('Current Block Details:', block);
    } catch (error) {
        console.error('Error fetching current block:', error);
    }
}

getCurrentBlock();