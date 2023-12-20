pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721.sol";
import "./ManagerRole.sol";

contract MembersCoupon is ERC721, ManagerRole {
  using SafeMath for uint256;

  uint256 private tokenCount; // 토큰 ID 카운터

  constructor() public ERC721() {}

  function mintNext(address to) public onlyManager returns(uint256) {
    uint256 newTokenId = tokenCount.add(1);
    tokenCount = newTokenId;
    _mint(to, newTokenId);
    return newTokenId;
  }

  function burn(address to, uint256 tokenId) public onlyManager {
    _burn(to, tokenId);
  }
}