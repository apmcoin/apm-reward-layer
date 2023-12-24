require('dotenv').config();
const fs = require('fs');
const { ethers } = require('ethers');
const csv = require('csv-parser');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = require('./abi/UserFactoryABI.json');

const deployedContractAddress = "0x3e0E92d4a01868d7B8A43AA34AA75c858443693C";
const contract = new ethers.Contract(deployedContractAddress, contractABI, wallet);

async function initializeNonce() {
    return await provider.getTransactionCount(wallet.address, 'pending'); 
}

// 에러 로그 기록 함수
function logError(error, nonce, userId) {
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const logMessage = `${timestamp} - Nonce: ${nonce} - UserID: ${userId} - Error: ${error}\n`;
    fs.appendFileSync('user-errlog.txt', logMessage);
}

async function createUser(contract, userId, nonce, attempt = 0) {
    try {
        const formattedUserId = ethers.utils.formatBytes32String(userId);
        const tx = await userFactory.createUser(formattedUserId, {
            gasLimit: ethers.getBigInt(142000),
            gasPrice: ethers.parseUnits('100', 'gwei'),
            nonce: nonce
        });
        console.log(`User created with tx: ${tx.hash} for UserID: ${userId}`);
        //await tx.wait(); //컨펌 대기
    } catch (error) {
        console.error(`Error creating user ${userId}:`, error);
        logError(error, userId);

        // 타임아웃 에러 또는 기타 오류에 대한 재시도 로직
        console.log(`Error code: ${error.code}. Retrying for userID ${userId}, Attempting to retry for nonce ${nonce}...`);
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3초 대기 후 재시도
        return createUser(contract, userId, nonce, attempt + 1); // 재귀적으로 재시도
    }
    
    return nonce + 1;  //성공 시 논스 증가
}

(async () => {
    let nonce = await initializeNonce();
    const results = [];
    
    fs.createReadStream('./data/user_uuid_list.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data.uuid))
        .on('end', async () => {
            for (let userId of results) {
                nonce = await createUser(contract, userId, nonce); // 순차적으로 UUID 처리
            }
        });
})();
