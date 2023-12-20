pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract AbstractUser is ManagerRole {
  bytes32 private userId;
  bool private isActive;
  mapping(bool => mapping(uint256 => bytes32)) private inventory;

  constructor(bytes32 _userId) public {
    userId = _userId;
    isActive = true;
  }

  function addItemToInventory(uint256 itemId, bytes32 url) public onlyManager {
    inventory[isActive][itemId] = url;
  }

  function removeItemToInventory(uint256 itemId) public onlyManager {
    delete inventory[isActive][itemId];
  }

  function checkInventory(uint256 itemId) public view returns (bytes32) {
    return inventory[isActive][itemId];
  }

  function destroy() public onlyManager {
    isActive = false;

  }
}