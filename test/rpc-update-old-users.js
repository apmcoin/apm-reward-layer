require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = require('./abi/UserFactoryABI.json');
const deployedContractAddress = "0xF38211DF9ccD073Ec4856213d00d224C7e2340DA";
const userFactory = new ethers.Contract(deployedContractAddress, contractABI, wallet);

// 에러 로그 기록 함수
function logError(error, nonce, userId) {
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const logMessage = `${timestamp} - Nonce: ${nonce} - UserID: ${userId} - Error: ${error}\n`;
    fs.appendFileSync('user-errlog.txt', logMessage);
}

// 최대 재시도에 도달한 사용자 로깅
function logRetryFailure(userId) {
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const logMessage = `${timestamp} - UserID: ${userId} - Failed after maximum retries\n`;
    fs.appendFileSync('user-retry-failures.txt', logMessage);
}

async function initializeNonce() {
    return await provider.getTransactionCount(wallet.address, 'latest'); 
}

function convertUuidToBytes32(uuid) {
    // UUID 문자열을 32 바이트로 변환
    const bytes32 = '0x' + uuid.replace(/-/g, '').padEnd(64, '0'); // 하이픈 제거 후 '0x' 접두어 추가 및 패딩
    console.log(`uuid '${uuid}' convert to '${bytes32}'`);
    return bytes32;
}


async function createUser(userId, nonce, attempt = 0) {
    console.log(`nonce: ${nonce} `);
    const maxAttempts = 10;  // 최대 재시도 횟수 10회
    if (attempt >= maxAttempts) {
        console.log(`Max retry attempts reached for ${userId}.`);
        logRetryFailure(userId);  // 최대 재시도에 도달했을 때 로깅
        return nonce;  // nonce를 증가시키지 않고 반환
    }

    try {
        const formattedUserId = convertUuidToBytes32(userId);

        const userExists = await userFactory.hasUserCA(formattedUserId);
        if (userExists) {
            console.log(`UserID ${userId} already exists. Skipping...`);
            await new Promise(resolve => setTimeout(resolve, 200));  // 0.5초 대기
            return nonce; //스킵했으므로 논스 증가 안함
        }

        const tx = await userFactory.createUser(formattedUserId, {
            gasLimit: ethers.parseUnits('8000000', 'wei'),
            gasPrice: ethers.parseUnits('22', 'gwei'),
            nonce: nonce
        });
        console.log(`User created with tx: ${tx.hash} for UserID: ${userId} , bytes: ${formattedUserId}`);
        await tx.wait();  // Uncomment if you need to wait for transaction confirmation
        return nonce + 1;  // 성공 시 nonce 증가

        
    } catch (error) {
        console.error(`Error creating user ${userId}:`, error);
        logError(error, nonce, userId);
        await new Promise(resolve => setTimeout(resolve, 3000));  // 재시도 전 대기
        return createUser(userId, nonce, attempt + 1);  // 재귀적으로 재시도
    }
}

(async () => {
    let nonce = await initializeNonce();
 
    const results = [];

    fs.createReadStream('./data/user_uuid_list.csv')  
        .pipe(csv())
        .on('data', (data) => results.push(data.uuid))
        .on('end', async () => {
            for (let userId of results) {
                nonce = await createUser(userId, nonce);  // 순차적으로 UUID 처리
            }
        });
})();
