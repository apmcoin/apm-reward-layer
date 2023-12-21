require('dotenv').config();
const { ethers } = require('ethers');

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// nonce 값을 초기화하는 별도의 비동기 함수
async function initializeNonce() {
    //마지막 pending tx의 nonce를 가져온다.
    //퍼블릭 네트워크에선 latest가 더 적합하지만, RAPM처럼 확인된 참여자만 존재하는 경우 pending이 적합하다.
    return await provider.getTransactionCount(wallet.address, 'pending'); 
}

const sendRAPM = async (nonce) => {
    try {
        const toAddress = ethers.hexlify(ethers.randomBytes(20));
        const amount = ethers.parseUnits(`${(Math.random() * 0.09 + 0.01).toFixed(2)}`, 'ether');

        const receipt  = await wallet.sendTransaction({
            to: toAddress,
            value: amount,
            gasLimit: ethers.getBigInt(42000),
            gasPrice: ethers.parseUnits('20', 'gwei'), //RAPM네트워크의 최소 가스값. 정말 중요한 tx가 아닌 이상 해당 값을 사용한다.
            nonce, // Ethers 의 Wallet객체는 Nonce를 자체 관리하여 Web3js보단 Nonce예외가 적지만, 극단적인 tx 호출에선 여전히-혹은 오히려 더 별도의 Nonce 관리가 필요하다.
          });

        //TX가 블록에 포함되고 컨펌되기까지 기다린다.
        //const receipt = await transaction.wait();
        console.log(`Success: ${receipt.status}, TxID: ${receipt.transactionHash}, Amount: ${ethers.formatUnits(amount, 'ether')} RAPM, To: ${toAddress}`);

        //성공 시 논스 증가시킨다
        return nonce + 1;
    } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.message.includes('ETIMEDOUT')) {
            setTimeout(sendEth, 3000); // 3초 후 재시도
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
        setTimeout(sendTransaction, 100); 
    };
    sendTransaction();
})();
