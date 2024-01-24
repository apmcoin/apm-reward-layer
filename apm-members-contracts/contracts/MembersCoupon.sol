pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721Full.sol";
import "./ManagerRole.sol";

contract MembersCoupon is ERC721Full, ManagerRole {
  using SafeMath for uint256;

  string private _name = "MembersCoupon";
  string private _symbol = "COUPON";

  uint256 private currentTokenId;
  uint256 private totalCount;

  event MembersCouponIssued(address indexed userCA, uint256 tokenId );
  event MembersCouponCollected(address indexed userCA, uint256 tokenId);

  constructor() public ERC721Full(_name, _symbol) {}

  function setDetailed(string memory name, string memory symbol) public onlyManager {
    _setDetailed(name, symbol);
  }

  function setBaseTokenUri(string memory uri) public onlyManager {
    _setBaseURI(uri);
  }

  function getCurrentTokenId() public view returns(uint256) {
    return currentTokenId;
  }

  function getTotalCount() public view returns(uint256) {
    return totalCount;
  }

  function mintNext(address userCA) public onlyManager returns(uint256 newTokenId) {
    newTokenId = currentTokenId.add(1);
    _mint(userCA, newTokenId);

    currentTokenId = newTokenId;
    totalCount = totalCount.add(1);

    emit MembersCouponIssued(userCA, newTokenId);
  }

  function burn(address userCA, uint256 tokenId) public onlyManager {
    _burn(userCA, tokenId);
    totalCount = totalCount.sub(1);

    emit MembersCouponCollected(userCA, tokenId);
  }

  function mintMultiple(address[] memory userCAs) public onlyManager {
    for (uint256 i = 0; i < userCAs.length; i++) {
      mintNext(userCAs[i]);
    }
  }
}