pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721.sol";
import "./ManagerRole.sol";

contract MembersCoupon is ERC721, ManagerRole {
  using SafeMath for uint256;

  uint256 private currentTokenId;

  event MembersCouponIssued(address userCA);
  event MembersCouponCollected(address userCA);

  constructor() public ERC721() {}

  function mintNext(address userCA) public onlyManager returns(uint256 newTokenId) {
    newTokenId = currentTokenId.add(1);
    currentTokenId = newTokenId;
    _mint(userCA, newTokenId);

    emit MembersCouponIssued(userCA);
  }

  function burn(address userCA, uint256 tokenId) public onlyManager {
    _burn(userCA, tokenId);

    emit MembersCouponCollected(userCA);
  }
}