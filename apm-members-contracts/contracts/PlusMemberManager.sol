pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract PlusMemberManager is ManagerRole {
    mapping(bytes32 => bool) private plusMembers;
    mapping(bytes32 => uint256) private memberIndex; // Track index of each member in memberList
    bytes32[] private memberList;

    event PlusMemberAdded(bytes32 userId);
    event PlusMemberRemoved(bytes32 userId);

    function addPlusMember(bytes32 userId) public onlyManager {
        require(!plusMembers[userId], "Member already exists");
        plusMembers[userId] = true;
        memberIndex[userId] = memberList.length;
        memberList.push(userId);
        emit PlusMemberAdded(userId);
    }

    function removePlusMember(bytes32 userId) public onlyManager {
        require(plusMembers[userId], "Member does not exist");
        plusMembers[userId] = false;

        // Remove member from memberList
        uint256 index = memberIndex[userId];
        bytes32 lastMember = memberList[memberList.length - 1];
        memberList[index] = lastMember; // Move the last member to the removed spot
        memberIndex[lastMember] = index;
        memberList.length--; // Reduce the array length

        emit PlusMemberRemoved(userId);
    }

    function getPlusMemberCount() public view returns (uint256) {
        return memberList.length;
    }

    function isPlusMember(bytes32 userId) public view returns (bool) {
        return plusMembers[userId];
    }
}
