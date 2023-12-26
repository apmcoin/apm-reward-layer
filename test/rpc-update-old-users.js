require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = require('./abi/UserFactory.json').abi;
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

async function initializeNonce(attempt = 0, userId = "system") {
    const maxAttempts = 5;  // 최대 재시도 횟수

    try {
        return await provider.getTransactionCount(wallet.address, 'latest'); 
    } catch (error) {
        console.error(`Error initializing nonce, attempt ${attempt}:`, error);
        logError(error, "N/A", userId);  // logError 함수를 호출하여 오류 기록

        if (attempt >= maxAttempts) {
            throw new Error('Max attempts reached in initializeNonce');
        }

        await new Promise(resolve => setTimeout(resolve, 3000)); // 잠시 대기 후 재시도
        return initializeNonce(attempt + 1, userId);
    }
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
            return nonce; //스킵했으므로 논스 증가 안함
        }

        // 가스 추정
        const estimatedGas = await userFactory.createUser.estimateGas(formattedUserId);
        console.log(`Estimated gas for creating user ${userId}: ${estimatedGas.toString()}`);

        // 트랜잭션 발송
        const tx = await userFactory.createUser(formattedUserId, {
            gasLimit: estimatedGas + BigInt(1000),  // BigInt 연산 사용
            gasPrice: ethers.parseUnits('20', 'gwei'),
            nonce: nonce
        });


        console.log(`User created with tx: ${tx.hash} for UserID: ${userId} , bytes: ${formattedUserId}`);
        await tx.wait();  // 1컨펌 대기
        //await new Promise(resolve => setTimeout(resolve, 500));//테스트용 코드. txpool 상태가 안좋아진다.
        return nonce + 1;  // 성공 시 nonce 증가

        
    } catch (error) {
        console.error(`Error creating user ${userId}:`, error);
        logError(error, nonce, userId);

        if (error.code === 'NONCE_EXPIRED') {
            // 해당 nonce가 tx pool에 있다고 가정한다. 
            console.log(`Nonce expired for user ${userId}. Incrementing nonce and retrying.`);
            return createUser(userId, nonce + 1, attempt);  // 재시도
        }

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
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        });
})();
