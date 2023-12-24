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
        const randomNum = Math.floor(Math.random() * 1000000000000000);
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
        //if (error.message.includes('ETIMEDOUT')) {
        //}

        // 재귀 호출 시 contract 인자를 명시적으로 전달
        setTimeout(() => storeRandomNumber(contract, nonce), 3000);
        
        return nonce + 1; // 실패한 트랜잭션의 경우에도 nonce 증가
        // tx가 성공적으로 전송되었지만 처리되지 않은 경우를 방지}
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
