pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract PlusMemberManager is ManagerRole {
    mapping(bytes32 => bool) private plusMembers;
    mapping(bytes32 => uint256) private memberIndex; // Track index of each member in memberList
    bytes32[] private memberList;

    event PlusMemberAdded(bytes32 uuid);
    event PlusMemberRemoved(bytes32 uuid);

    function addPlusMember(bytes32 uuid) public onlyManager {
        require(!plusMembers[uuid], "Member already exists");
        plusMembers[uuid] = true;
        memberIndex[uuid] = memberList.length;
        memberList.push(uuid);
        emit PlusMemberAdded(uuid);
    }

    function removePlusMember(bytes32 uuid) public onlyManager {
        require(plusMembers[uuid], "Member does not exist");
        plusMembers[uuid] = false;

        // Remove member from memberList
        uint256 index = memberIndex[uuid];
        bytes32 lastMember = memberList[memberList.length - 1];
        memberList[index] = lastMember; // Move the last member to the removed spot
        memberIndex[lastMember] = index;
        memberList.length--; // Reduce the array length

        emit PlusMemberRemoved(uuid);
    }

    function getPlusMemberCount() public view returns (uint256) {
        return memberList.length;
    }

    function isPlusMember(bytes32 uuid) public view returns (bool) {
        return plusMembers[uuid];
    }
}
