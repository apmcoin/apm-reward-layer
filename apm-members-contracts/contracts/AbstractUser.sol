pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract AbstractUser {
  ManagerRole public managerContract;

  bytes32 public userId;
  mapping(uint256 => bool) public inventory;

  modifier onlyManager() {
    require(managerContract.isManager(msg.sender), "User: caller is not a manager");
    _;
  }

  constructor(bytes32 _userId, address _managerContract) public {
    userId = _userId;
    managerContract = ManagerRole(_managerContract);
  }

  function addItemToInventory(uint256 itemId) public onlyManager {
    inventory[itemId] = true;
  }

  function removeItemToInventory(uint256 itemId) public onlyManager {
    delete inventory[itemId];
  }

  function checkInventory(uint256 itemId) public view returns (bool) {
    return inventory[itemId];
  }
}