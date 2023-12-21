require('dotenv').config();
const { Web3 } = require('web3');

const web3 = new Web3(process.env.RPC_URL);
const senderPrivateKey = process.env.PRIVATE_KEY;
const fromAddress = web3.eth.accounts.privateKeyToAccount(senderPrivateKey).address;

// nonce 값을 초기화하는 별도의 비동기 함수
async function initializeNonce() {
    return await web3.eth.getTransactionCount(fromAddress, 'pending');
}

// ETH 전송 함수
const sendEth = async (nonce) => {
    try {
        const toAddress = web3.utils.toHex(web3.utils.randomHex(20));
        const amount = web3.utils.toWei(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const tx = {
            from: fromAddress,
            to: toAddress,
            value: amount,
            gas: 21000,
            gasPrice: web3.utils.toWei('20', 'gwei'),
            nonce: nonce,
            chainId: 276
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log(`Success: ${receipt.status}, TxID: ${receipt.transactionHash}, Amount: ${web3.utils.fromWei(amount, 'ether')} ETH, To: ${toAddress}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

// nonce 값을 초기화하고, sendEth 함수를 반복적으로 호출
initializeNonce().then((nonce) => {
    setInterval(() => sendEth(nonce++), 1000);
});