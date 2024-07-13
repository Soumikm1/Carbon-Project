// sendEth.js
const {Web3} = require('web3');

// Replace with your Ethereum node URL
const web3 = new Web3('http://localhost:8545');

// Replace these with your actual account addresses
const senderAddress = '0xDC790DaA2c5806d7694f30c6522111fCc3d16EB1';
const receiverAddress = '0x0DDa4A450a10092c318330Ad32e4b38aF35e5c2A';

// Replace with the sender's private key
const privateKey = 'f09500f190923957928fd47279fe34d996e27db58c89a86b33ddcc8c98d950a7';

async function sendEth() {
    try {
        // Get the nonce
        const nonce = await web3.eth.getTransactionCount(senderAddress, 'latest');

        // Create the transaction object
        const transaction = {
            'to': receiverAddress,
            'value': web3.utils.toWei('1', 'ether'),
            'gas': 21000,
            'nonce': nonce,
            'gasPrice': 0, // Set the gas price to 0
            'chainId': 1337 // Add this if you're not using the default (mainnet)
        };

        // Sign the transaction
        const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);

        // Send the transaction
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log('Transaction successful!');
        console.log('Transaction Hash:', receipt.transactionHash);
        console.log('Block Number:', receipt.blockNumber);
    } catch (error) {
        console.error('Error sending ETH:', error);
    }
}

// Function to get balance
async function getBalance(address) {
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}

async function main() {
    console.log('Sender balance before:', await getBalance(senderAddress));
    console.log('Receiver balance before:', await getBalance(receiverAddress));

    await sendEth();

    console.log('Sender balance after:', await getBalance(senderAddress));
    console.log('Receiver balance after:', await getBalance(receiverAddress));
}

main();