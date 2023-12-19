pragma solidity 0.5.6;

import "./rapm-contracts/math/SafeMath.sol";
import "./ManagerRole.sol";
import "./AbstractUser.sol";

contract UserFactory is ManagerRole {
  using SafeMath for uint256;

  uint256 private userCount;
  mapping(bytes32 => address) private userList;

  event UserCreated(bytes32 indexed userId);

  function createUser(bytes32 userId) public onlyManager {
    require(userList[userId] != address(0), "UserFactory: userId already exists");
    userList[userId] = address(new AbstractUser(userId));
    userCount = userCount.add(1);
    emit UserCreated(userId);
  }

  function getUserCA(bytes32 userId) public view returns(address userCA) {
    userCA = userList[userId];
    require(userCA == address(0), "UserFactory: userId does not exist");
  }
}