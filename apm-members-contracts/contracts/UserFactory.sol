pragma solidity 0.5.6;

import "./rapm-contracts/math/SafeMath.sol";
import "./ManagerRole.sol";
import "./AbstractUser.sol";

contract UserFactory is ManagerRole {
  using SafeMath for uint256;

  mapping(bytes32 => address) private users;
  uint256 private userCount;

  event UserCreated(bytes32 indexed userId, address userCA);

  function createUser(bytes32 userId) public onlyManager {
    require(users[userId] == address(0), "UserFactory: userId already exists");

    // userCA 생성
    address userCA = address(new AbstractUser(userId));
    users[userId] = userCA;
    userCount = userCount.add(1);

    emit UserCreated(userId, userCA);
  }

  function getUserCA(bytes32 userId) public view returns(address userCA) {
    userCA = users[userId];
    require(userCA != address(0), "UserFactory: userId does not exist");
  }
}