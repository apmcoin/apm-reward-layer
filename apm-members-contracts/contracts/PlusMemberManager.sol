pragma solidity 0.5.6;

import "./ManagerRole.sol";
import "./PlusMemberSbt.sol";
import "./UserFactory.sol";

contract PlusMemberManager is ManagerRole {
    using SafeMath for uint256;

    PlusMemberSBT plusMemberSbt;
    UserFactory userFactory;

    mapping(bytes32 => uint256) private plusMembers;
    uint256 private plusMemberCount;

    event PlusMemberAdded(bytes32 userId);
    event PlusMemberRemoved(bytes32 userId);

    constructor(address _plusMemberSbt, address _userFactory) public {
      plusMemberSbt = PlusMemberSBT(_plusMemberSbt);
      userFactory = UserFactory(_userFactory);
    }

    function addPlusMember(bytes32 userId) public onlyManager returns(uint256 tokenId) {
        require(plusMembers[userId] != 0, "Member already exists");
        tokenId = plusMemberSbt.mintNext(userFactory.getUserCA(userId));
        plusMembers[userId] = tokenId;
        plusMemberCount = plusMemberCount.add(1);

        emit PlusMemberAdded(userId);
    }

    function removePlusMember(bytes32 userId) public onlyManager {
        require(plusMembers[userId] == 0, "Member does not exist");
        plusMemberSbt.burn(userFactory.getUserCA(userId), plusMembers[userId]);
        delete plusMembers[userId];
        plusMemberCount = plusMemberCount.sub(1);

        emit PlusMemberRemoved(userId);
    }

    function getPlusMemberCount() public view returns (uint256) {
        return plusMemberCount;
    }

    function isPlusMember(bytes32 userId) public view returns (bool) {
        return plusMembers[userId] != 0 ? true : false;
    }
}
