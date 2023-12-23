require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const contractABI = [
    {
        "constant": false,
        "inputs": [{"name": "_randomNumber", "type": "uint256"}],
        "name": "storeRandomNumber",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "lastRandomNumber",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];
const deployedContractAddress = "0xA9Ba734c4fDf2296755daEfa3F8E13faA3B98F0f";
const contract = new ethers.Contract(deployedContractAddress, contractABI, wallet);

async function initializeNonce() {
    return await provider.getTransactionCount(wallet.address, 'pending'); 
}

async function storeRandomNumber(contract, nonce) {
    try {                                            
        const randomNum = Math.floor(Math.random() * 10000000000000000);
        const tx = await contract.storeRandomNumber(randomNum, { 
            gasLimit: ethers.getBigInt(42000),
            gasPrice: ethers.parseUnits('20', 'gwei'), //RAPM네트워크의 최소 가스값. 정말 중요한 tx가 아닌 이상 해당 값을 사용한다.
            nonce: nonce 
        });
        await tx.wait();//컨펌까지 기다리기
        console.log(`Stored ${randomNum} at nonce ${nonce}`);
        return nonce + 1;  // Increment nonce only after successful transaction
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return nonce; // Retry with the same nonce in case of an error
    }
}

(async () => {
    let nonce = await initializeNonce();

    const sendTransaction = async () => {
        nonce = await storeRandomNumber(contract, nonce);  // Update nonce with returned value
        setTimeout(sendTransaction, 100);  // Call the function again after 5 seconds
    };
    sendTransaction();
})();
