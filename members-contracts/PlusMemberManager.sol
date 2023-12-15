pragma solidity 0.5.6;

import "./rapm-contracts/access/Roles.sol";

contract PlusMemberManager {
    using Roles for Roles.Role;

    Roles.Role private owners;
    Roles.Role private managers;
    mapping(bytes32 => bool) private plusMembers;
    mapping(bytes32 => uint256) private memberIndex; // Track index of each member in memberList
    bytes32[] private memberList;

    event ManagerAdded(address indexed account);
    event ManagerRemoved(address indexed account);
    event PlusMemberAdded(bytes32 uuid);
    event PlusMemberRemoved(bytes32 uuid);

    constructor() public {
        owners.add(msg.sender);
    }

    modifier onlyOwner() {
        require(owners.has(msg.sender), "Only owner can call this function.");
        _;
    }

    modifier onlyManager() {
        require(managers.has(msg.sender), "Only manager can call this function.");
        _;
    }

    function addManager(address account) public onlyOwner {
        managers.add(account);
        emit ManagerAdded(account);
    }

    function removeManager(address account) public onlyOwner {
        managers.remove(account);
        emit ManagerRemoved(account);
    }

    function addPlusMembers(bytes32[] memory uuids) public onlyManager {
        for (uint i = 0; i < uuids.length; i++) {
            if (!plusMembers[uuids[i]]) {
                plusMembers[uuids[i]] = true;
                memberIndex[uuids[i]] = memberList.length;
                memberList.push(uuids[i]);
                emit PlusMemberAdded(uuids[i]);
            }
        }
    }

    function removePlusMembers(bytes32[] memory uuids) public onlyManager {
        for (uint i = 0; i < uuids.length; i++) {
            if (plusMembers[uuids[i]]) {
                plusMembers[uuids[i]] = false;

                // Remove member from memberList
                uint256 index = memberIndex[uuids[i]];
                bytes32 lastMember = memberList[memberList.length - 1];
                memberList[index] = lastMember; // Move the last member to the removed spot
                memberIndex[lastMember] = index;
                memberList.length--; // Reduce the array length

                emit PlusMemberRemoved(uuids[i]);
            }
        }
    }

    function getPlusMemberCount() public view returns (uint256) {
        return memberList.length;
    }

    function isOwner(address account) public view returns (bool) {
        return owners.has(account);
    }

    function isManager(address account) public view returns (bool) {
        return managers.has(account);
    }

    function isPlusMember(bytes32 uuid) public view returns (bool) {
        return plusMembers[uuid];
    }

}
