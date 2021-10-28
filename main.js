const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d0a70ec95965c2767dc458ad6adc61ab72fa4bf1e6e5ab2712fdccc972849dc5');
const myWalletAddress = myKey.getPublic('hex');


let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\n Starting the miner... ');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Mohammed is ', myCoin.getBalanceOfAddress(myWalletAddress));