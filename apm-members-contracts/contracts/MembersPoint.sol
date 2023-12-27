pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC20/ERC20.sol";
import "./ManagerRole.sol";

contract MembersPoint is ERC20, ManagerRole {
  string private _name = "a.point";
  string private _symbol = "POINT";
   uint8 private _decimals = 18;

  event MembersPointIssued(address userCA, uint256 amount);
  event MembersPointCollected(address userCA, uint256 amount);
    
  constructor() public ERC20() {}

  function setDetailed(string memory newName, string memory newSymbol) public onlyManager{
    _name = newName;
    _symbol = newSymbol;
  }

  function mint(address userCA, uint256 amount) public onlyManager {
    _mint(userCA, amount);

    emit MembersPointIssued(userCA, amount);
  }

  function burn(address userCA, uint256 amount) public onlyManager {
    _burn(userCA, amount);

    emit MembersPointCollected(userCA, amount);
  }

  function name() public view returns (string memory) {
    return _name;
  }

  function symbol() public view returns (string memory) {
    return _symbol;
  }

  function decimals() public view returns (uint8) {
    return _decimals;
  }
}