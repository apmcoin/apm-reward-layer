const { Web3 } = require('web3');

// 임의의 개인 키 및 주소 생성
const generateKeyAndAddress = () => {
    const web3 = new Web3();
    const account = web3.eth.accounts.create(web3.utils.randomHex(32));
    console.log(`Private Key: ${account.privateKey}`);
    console.log(`Address: ${account.address}`);
}

generateKeyAndAddress();
