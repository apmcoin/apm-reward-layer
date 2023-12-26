pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract AbstractUser is ManagerRole {
  bytes32 private _userId;
  bool private _isActive;
  mapping(bool => mapping(uint256 => bytes32)) private inventory;

  constructor(bytes32 userId) public {
    _userId = userId;
    _isActive = true;
  }

  function getUserId() public view returns(bytes32) {
    return _userId;
  }

  function isActive() public view returns(bool) {
    return _isActive;
  }

  function addItemToInventory(uint256 itemId, bytes32 url) public onlyManager {
    require(_isActive, "AbstractUser: user not active");

    inventory[_isActive][itemId] = url;
  }

  function removeItemToInventory(uint256 itemId) public onlyManager {
    require(_isActive, "AbstractUser: user not active");

    delete inventory[_isActive][itemId];
  }

  function checkInventory(uint256 itemId) public view returns(bytes32) {
    require(_isActive, "AbstractUser: user not active");

    return inventory[_isActive][itemId];
  }

  function destroy() public onlyManager {
    _isActive = false;
  }
}