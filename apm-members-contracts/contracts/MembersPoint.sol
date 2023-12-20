pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC20/ERC20.sol";
import "./ManagerRole.sol";

contract MembersPoint is ERC20, ManagerRole {
  constructor() public ERC20() {}

  function mint(address userCA, uint256 amount) public onlyManager {
    _mint(userCA, amount);
  }

  function burn(address userCA, uint256 amount) public onlyManager {
    _burn(userCA, amount);
  }
}