pragma solidity 0.5.6;

import "./rapm-contracts/math/SafeMath.sol";
import "./ManagerRole.sol";
import "./AbstractUser.sol";

contract UserFactory is ManagerRole {
  using SafeMath for uint256;

  address managerContract;
  uint256 userCount;
  mapping(bytes32 => AbstractUser) userList;

  event UserCreated(bytes32 indexed userId);

  constructor(address _managerContract) public {
    managerContract = _managerContract;
  }

  function createUser(bytes32 userId) public onlyManager {
    userList[userId] = new AbstractUser(userId, managerContract);
    userCount = userCount.add(1);
    emit UserCreated(userId);
  }
}