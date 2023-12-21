require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const sendEth = async () => {
    try {
        const toAddress = ethers.utils.hexlify(ethers.utils.randomBytes(20));
        const amount = ethers.utils.parseUnits(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const tx = {
            to: toAddress,
            value: amount,
            gasLimit: ethers.utils.hexlify(21000),
            gasPrice: ethers.utils.parseUnits('20', 'gwei')
        };

        const transaction = await wallet.sendTransaction(tx);
        const receipt = await transaction.wait();

        console.log(`Success: ${receipt.status}, TxID: ${receipt.transactionHash}, Amount: ${ethers.utils.formatUnits(amount, 'ether')} RAPM, To: ${toAddress}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.message.includes('ETIMEDOUT')) {
            setTimeout(sendEth, 3000); // 3초 후 재시도
        }
    }
};

setInterval(sendEth, 500);
