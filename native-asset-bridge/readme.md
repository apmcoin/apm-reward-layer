# APM - RAPM Birdge Contracts

### RAPM 메인넷은 기업용 Protected 메인넷입니다. 허가된 참여자 외의 ETH - RAPM 간 자산 전송 시도는 복구가 불가능 할 수 있습니다.

## Ethereum Mainnet
NativeBridgeFromEthereum
`0xF1c986B1794CaB1d5DF316dE21a0ae2eD896d02C`

1. 이동을 원하는 EOA의 [ERC-20 APM 토큰 계약](https://etherscan.io/token/0xc8c424b91d8ce0137bab4b832b7f7d154156ba6c#code)에서 브릿지 계약 `0xF1c986B1794CaB1d5DF316dE21a0ae2eD896d02C`에 이동 수량 `Approve`

2. [브릿지 계약](https://etherscan.io/address/0xF1c986B1794CaB1d5DF316dE21a0ae2eD896d02C#code) 에서 `checkTokenAllowance` 후 `sendToRAPM`

3. 검증 노드의 승인을 대기합니다. 승인이 완료되면 RAPM 메인넷의 지정 주소로 네이티브 토큰이 전송됩니다


## RAPM(apM Reward Layer) Mainnet
NativeBridgeFromRAPM
`0x0bA8200F2Ad65393C2aaF6eD57009b0a520e9510`

1. RAPM 메인넷의 `RAPMReceived`로 받은 네이티브 자산을 ETH 노드 검증자가 `NativeBridgeFromEthereum`를 통해 ETH 메인넷으로 재전송합니다

2. ETH메인넷의 `NativeBridgeFromEthereum`에서`sendToRAPM` 된 ETH ERC-20 APM 자산을 RAPM 메인넷의 노드 검증자가 RAPM Navite RAPM으로 `transferRAPM` 합니다


