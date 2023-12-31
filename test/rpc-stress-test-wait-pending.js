require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// nonce 값을 초기화하는 별도의 비동기 함수
async function initializeNonce() {
    //마지막 pending tx의 nonce를 가져온다.
    //퍼블릭 네트워크에선 latest가 더 적합하지만, RAPM처럼 확인된 참여자만 존재하는 경우 pending이 적합...할 수 있지만 가능하면 latest쓸 것. 아래 pending은 네트워크 테스트용.
    return await provider.getTransactionCount(wallet.address, 'pending'); 
}

const sendRAPM = async (nonce) => {
    try {
        //const toAddress = ethers.hexlify(ethers.randomBytes(20));
        const toAddress = "0x000000000000000000000000000000000000dEaD";
        const amount = ethers.parseUnits(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const transaction = await wallet.sendTransaction({
            to: toAddress,
            value: amount,
            gasLimit: ethers.getBigInt(42000),
            gasPrice: ethers.parseUnits('40', 'gwei'), //RAPM네트워크의 최소 가스값. 정말 중요한 tx가 아닌 이상 해당 값을 사용한다.
            nonce, // Ethers 의 Wallet객체는 Nonce를 자체 관리하여 Web3js보단 Nonce예외가 적지만, 극단적인 tx 호출에선 여전히-혹은 오히려 더 별도의 Nonce 관리가 필요하다.
          });

        // 트랜잭션 해시가 있다면 전송은 성공한 것. (아직 0컨펌)
        console.log(`Transaction sent: Hash ${transaction.hash}, Nonce ${nonce}, Amount: ${ethers.formatUnits(amount, 'ether')} RAPM, To: ${toAddress}`);

        //성공 시 논스 증가시킨다
        return nonce + 1;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.message.includes('ETIMEDOUT')) {
            setTimeout(sendRAPM, 2000); // 2초 후 재시도
        }
        
        return nonce + 1; // 실패한 트랜잭션의 경우에도 nonce 증가
        // tx가 성공적으로 전송되었지만 처리되지 않은 경우를 방지
    }
};

(async () => {
    //최초 nonce를 블록체인에서 받아온다.
    let nonce = await initializeNonce();

    const sendTransaction = async () => {
        //재귀 호출을 하며 마지막 nonce를 받아서 사용한다.
        nonce = await sendRAPM(nonce);
        //컨펌 완료를 기다리지 않으므로 시간 증가
        setTimeout(sendTransaction, 5000); 
    };
    sendTransaction();
})();
