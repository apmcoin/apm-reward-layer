require('dotenv').config();
const fs = require('fs');
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

// 에러 로그 기록 함수
function logError(error, nonce) {
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const logMessage = `${timestamp} - Nonce: ${nonce} - Error: ${error}\n`;
    fs.appendFileSync('errlog.txt', logMessage);
}

async function storeRandomNumber(contract, nonce, attempt = 0) {
    try {                                            
        const randomNum = Math.floor(Math.random() * 999999999999999);
        const tx = await contract.storeRandomNumber(randomNum, { 
            gasLimit: ethers.getBigInt(42000),
            gasPrice: ethers.parseUnits('20', 'gwei'), //RAPM Minimum gas fee
            nonce: nonce 
        });
        await tx.wait();//컨펌까지 기다리기
        console.log(`Stored ${randomNum} at nonce ${nonce}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        logError(error.message, nonce); // 에러 로그 기록

        // 네트워크 타임아웃 에러 발생 시 무제한 재시도
        console.log(`Error code: ${error.code}. Attempting to retry for nonce ${nonce}...`);
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3초 대기 후 재시도
        return storeRandomNumber(contract, nonce, attempt + 1); // 재귀적으로 재시도
    }
    return nonce + 1;  //성공 시 논스 증가
}

(async () => {
    let nonce = await initializeNonce();

    const sendTransaction = async () => {
        nonce = await storeRandomNumber(contract, nonce);  // Update nonce with returned value
        setTimeout(sendTransaction, 100);  // wait and re send
    };
    sendTransaction();
})();
