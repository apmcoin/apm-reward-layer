require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const sendEth = async () => {
    try {
        const toAddress = ethers.hexlify(ethers.randomBytes(20));
        const amount = ethers.parseUnits(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const transaction = await wallet.sendTransaction({
            to: toAddress,
            value: amount,
            gasLimit: ethers.getBigInt(42000),
            gasPrice: ethers.parseUnits('20', 'gwei')
          });
        const receipt = await transaction.wait();

        console.log(`Success: ${receipt.status}, TxID: ${receipt.transactionHash}, Amount: ${ethers.formatUnits(amount, 'ether')} RAPM, To: ${toAddress}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.message.includes('ETIMEDOUT')) {
            setTimeout(sendEth, 3000); // 3초 후 재시도
        }
    }
};

setInterval(sendEth, 500);
