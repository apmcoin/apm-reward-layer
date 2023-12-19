pragma solidity 0.5.6;

import "./ManagerRole.sol";
import "./User.sol";

contract UserManager is ManagerRole {
  address managerContract;

  event UserCreated(bytes32 indexed userId);

  constructor(address _managerContract) public {
    managerContract = _managerContract;
  }

  function createUser(bytes32 userId) public onlyManager {
    User user = new User(userId, managerContract);
    emit UserCreated(userId);
  }
}