// sendManyTransaction.js
const {Web3} = require('web3');
const fs = require('fs');

// Replace with your Ethereum node URL
const web3_1 = new Web3('http://localhost:8545');
const web3_2 = new Web3('http://localhost:8546');
const web3_3 = new Web3('http://localhost:8547');
const web3_4 = new Web3('http://localhost:8548');
// Read the accounts from the JSON file
const accounts = JSON.parse(fs.readFileSync('accounts.json', 'utf8'));

async function sendTransaction(from, to, amount, node) {
    let web3;
    if (node === 1) {
        web3 = web3_1;
    }
    else if (node === 2) {
        web3 = web3_2;
    }
    else if (node === 3) {
        web3 = web3_3;
    }
    else {
        web3 = web3_4;
    }
    const nonce = await web3.eth.getTransactionCount(from.publicKey, 'latest');
    const transaction = {
        'to': to.publicKey,
        'value': web3.utils.toWei(amount.toString(), 'ether'),
        'gas': 21000,
        'nonce': nonce,
        'gasPrice': 0, // Set gas price = 0
        'chainId': 1337
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, from.privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    const block = await web3.eth.getBlock(blockNumber);
    console.log('Current Block number:', block);
    return receipt;
}

async function getBalance(address, node) {
    let web3;
    if (node === 1) {
        web3 = web3_1;
    }
    else if (node === 2) {
        web3 = web3_2;
    }
    else if (node === 3) {
        web3 = web3_3;
    }
    else {
        web3 = web3_4;
    }
    const balance = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balance, 'ether');
}

async function simulateTransactions() {
    for (let i = 0; i < 100; i++) {
        const sender = accounts[i % accounts.length];
        const receiver = accounts[(i + 1) % accounts.length];
        const amount = i + 1; // Sending an increasing amount of ETH in each transaction

        console.log(`Transaction ${i + 1}: ${sender.publicKey} -> ${receiver.publicKey}`);
        console.log(`Sender balance before: ${await getBalance(sender.publicKey, (i % 4) + 1)}`);
        console.log(`Receiver balance before: ${await getBalance(receiver.publicKey, (i % 4) + 1)}`);

        try {
            const receipt = await sendTransaction(sender, receiver, amount, (i % 4) + 1);
            console.log(`Transaction successful! Hash: ${receipt.transactionHash}`);
        } catch (error) {
            console.error(`Transaction failed: ${error.message}`);
        }

        console.log(`Sender balance after: ${await getBalance(sender.publicKey, (i % 4) + 1)}`);
        console.log(`Receiver balance after: ${await getBalance(receiver.publicKey, (i % 4) + 1)}`);
        console.log('-----------------------------------');
    }
}

simulateTransactions().catch(console.error);