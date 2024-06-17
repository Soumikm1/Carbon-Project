const ethers = require('ethers');
const fs = require('fs');

const numAccounts = 20;
const accounts = [];

// Generate 20 accounts
for (let i = 0; i < numAccounts; i++) {
  const wallet = ethers.Wallet.createRandom();
  accounts.push({
    privateKey: wallet.privateKey,
    publicKey: wallet.address,
  });
}

// Write accounts to a file
fs.writeFileSync(
  'accounts.json',
  JSON.stringify(accounts, null, 2),
  'utf-8'
);