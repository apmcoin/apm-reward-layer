require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');

// 환경 변수 및 ABI 파일 로드
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const userFactoryAbi = require('./abi/UserFactoryABI.json');

// UserFactory 스마트 컨트랙트 인스턴스 생성
const userFactoryAddress = "0xE003373aa71F3a1d5e93F58Be07604B8B5fF4169";
const userFactory = new ethers.Contract(userFactoryAddress, userFactoryAbi, wallet);

// 에러 로그 기록 함수
function logError(error, userId) {
    const timestamp = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
    const logMessage = `${timestamp} - UserID: ${userId} - Error: ${error}\n`;
    fs.appendFileSync('errlog.txt', logMessage);
}

// nonce 초기화 및 관리
let nonce = await provider.getTransactionCount(wallet.address, 'latest');

async function createUser(userId) {
    try {
        const formattedUserId = ethers.utils.formatBytes32String(userId);
        const tx = await userFactory.createUser(formattedUserId, {
            nonce: nonce++  // nonce 관리
        });
        console.log(`User created with tx: ${tx.hash} for UserID: ${userId}`);
        await tx.wait();
    } catch (error) {
        console.error(`Error creating user ${userId}:`, error);
        logError(error, userId);

        // 타임아웃 에러 또는 기타 오류에 대한 재시도 로직
        console.log(`Error code: ${error.code}. Retrying for userID ${userId}...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
        await createUser(userId);  // 재귀적으로 재시도
    }
}

// CSV 파일에서 UUID를 읽어와 createUser 호출
function processUsers() {
    const results = [];
    
    fs.createReadStream('./data/user_uuid_list.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data.uuid))
        .on('end', () => {
            results.forEach(async (uuid) => {
                await createUser(uuid);
            });
        });
}

processUsers();
