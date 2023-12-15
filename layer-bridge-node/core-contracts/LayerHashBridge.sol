// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "./openzeppelin-contracts/access/AccessControl.sol";

//상위 레이어 앵커링을 위한 브릿지 노드 계약
contract LayerBridgeNode is AccessControl {
    bytes32 public constant WRITER_ROLE = keccak256("WRITER_ROLE");
    event BlockHashRecorded(uint256 indexed blockNumber, bytes32 blockHash);

    mapping(uint256 => bytes32) public blockHashes;
    address[] private writers;

    constructor() {
        grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        grantRole(WRITER_ROLE, msg.sender); // API KEY USER
    }

    function recordBlockHash(uint256 blockNumber, bytes32 blockHash) public onlyRole(WRITER_ROLE) {
        blockHashes[blockNumber] = blockHash;
        emit BlockHashRecorded(blockNumber, blockHash);
    }

    function getBlockHash(uint256 blockNumber) public view returns (bytes32) {
        return blockHashes[blockNumber];
    }

    // Writer 목록에 주소 추가 및 권한 부여
    function grantWriteAccess(address writer) public onlyRole(DEFAULT_ADMIN_ROLE) {
        grantRole(WRITER_ROLE, writer);
        writers.push(writer);
    }

    // Writer 목록에서 주소 제거 및 권한 취소
    function revokeWriteAccess(address writer) public onlyRole(DEFAULT_ADMIN_ROLE) {
        revokeRole(WRITER_ROLE, writer);
        removeWriter(writer);
    }

    // Writer 목록 조회
    function getWriters() public view returns (address[] memory) {
        return writers;
    }

    // Writer 목록에서 주소 제거 (내부 함수)
    function removeWriter(address writer) internal {
        uint length = writers.length;
        for (uint i = 0; i < length; i++) {
            if (writers[i] == writer) {
                writers[i] = writers[length - 1];
                writers.pop();
                break;
            }
        }
    }
}
