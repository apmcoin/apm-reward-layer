require('dotenv').config();
const ethers = require('ethers');
const fs = require('fs');
const csv = require('csv-parser');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contractABI = require('./abi/UserFactory.json').abi;
const deployedContractAddress = "0x62a8f4FBE767f5B73C62Fc6999dFdd38b7166ee8";
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


async function createBulkUsers(userIds, nonce) {
    const maxAttempts = 10; // 최대 재시도 횟수
    let attempt = 0;

    while (attempt < maxAttempts) {
        try {
            const formattedUserIds = userIds.map(convertUuidToBytes32);
            console.log(`Creating users: ${userIds.join(', ')}`);
            console.log(`Creating formattedUserIds: ${formattedUserIds}`);

            const estimatedGas = await userFactory.createBulkUser.estimateGas(formattedUserIds);
            console.log(`Estimated gas for creating users: ${estimatedGas.toString()}`);
            
            const tx = await userFactory.createBulkUser(formattedUserIds, {
                gasLimit: estimatedGas + BigInt(1000),
                gasPrice: ethers.parseUnits('20', 'gwei'),
                nonce: nonce
            });

            console.log(`Bulk user creation tx: ${tx.hash}`);
            await tx.wait();
            return nonce + 1; // 성공 시 nonce 증가*/

        } catch (error) {
            console.error(`Error creating users:`, error);
            logError(error, nonce, userIds.join(', '));

            if (error.code === 'NONCE_EXPIRED') {
                console.log(`Nonce expired. Incrementing nonce and retrying.`);
                nonce++;
            } else {
                await new Promise(resolve => setTimeout(resolve, 3000));
                attempt++;
            }
        }
    }
    throw new Error('Max attempts reached in createBulkUsers');
}

(async () => {
    let nonce = await initializeNonce();
    const results = [];

    fs.createReadStream('./data/user_uuid_list.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data.uuid))
        .on('end', async () => {
            for (let i = 0; i < results.length; i += 4) {
                const batch = results.slice(i, i + 4);
                nonce = await createBulkUsers(batch, nonce);
                await new Promise(resolve => setTimeout(resolve, 20000));
            }
        });
})();
