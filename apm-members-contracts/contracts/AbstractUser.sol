pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract AbstractUser is ManagerRole {
  bytes32 private userId;
  mapping(uint256 => bytes32) private inventory;

  constructor(bytes32 _userId) public {
    userId = _userId;
  }

  function addItemToInventory(uint256 itemId, bytes32 value) public onlyManager {
    inventory[itemId] = value;
  }

  function removeItemToInventory(uint256 itemId) public onlyManager {
    delete inventory[itemId];
  }

  function checkInventory(uint256 itemId) public view returns (bytes32) {
    return inventory[itemId];
  }
}