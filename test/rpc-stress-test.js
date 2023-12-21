require('dotenv').config();
const { Web3 } = require('web3');

// 환경 변수에서 RPC URL과 개인 키, 체인 ID를 가져옵니다.
const web3 = new Web3(process.env.RPC_URL);
const senderPrivateKey = process.env.PRIVATE_KEY;
const fromAddress = web3.eth.accounts.privateKeyToAccount(senderPrivateKey).address;

// ETH 전송 함수
const sendEth = async () => {
    try {
        const nonce = await web3.eth.getTransactionCount(fromAddress);
        const toAddress = web3.utils.toHex(web3.utils.randomHex(20));
        const amount = web3.utils.toWei(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const tx = {
            from: fromAddress,
            to: toAddress,
            value: amount,
            gas: 21000,
            gasPrice: web3.utils.toWei('50', 'gwei'),
            nonce: nonce,
            chainId: 276
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, senderPrivateKey);
        await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
            .on('receipt', console.log);
    } catch (error) {
        console.error(error);
    }
};

// 1초마다 ETH 전송
setInterval(sendEth, 1000);
