pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract AbstractUser {
  bytes32 public userId;
  ManagerRole public managerContract;
  
  mapping(uint256 => bool) public userInventory;

  modifier onlyManager() {
    require(managerContract.isManager(msg.sender), "User: caller is nota manager");
    _;
  }

  constructor(bytes32 _userId, address _managerContract) public {
    userId = _userId;
    managerContract = ManagerRole(_managerContract);
  }

  function addItemToInventory(uint256 itemId) public onlyManager {
    userInventory[itemId] = true;
  }

  function checkInventory(uint256 itemId) public view returns (bool) {
    return userInventory[itemId];
  }
}