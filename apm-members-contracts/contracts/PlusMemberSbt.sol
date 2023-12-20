pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721.sol";
import "./ManagerRole.sol";

contract PlusMemberSBT is ERC721, ManagerRole {
    using SafeMath for uint256;

    uint256 private currentTokenId; // 토큰 ID 카운터
    uint256 private plusMemberCount;
    mapping(address => uint256) private tokenIds;

    event PlusMemberAdded(address userCA);
    event PlusMemberRemoved(address userCA);

    constructor() public ERC721() {}

    function getCurrentTokenId() public view returns (uint256) {
      return currentTokenId;
    }

    function getPlusMemberCount() public view returns (uint256) {
        return plusMemberCount;
    }

    function isPlusMember(address userCA) public view returns (bool) {
        return tokenIds[userCA] != 0 ? true : false;
    }

    function getTokenId(address userCA) public view returns (uint256) {
      return tokenIds[userCA];
    }

    function mintNext(address to) public onlyManager returns (uint256 newTokenId) {
      require(tokenIds[to] == 0, "PlusMemberSBT: Member already exists");

      newTokenId = currentTokenId.add(1);
      currentTokenId = newTokenId;
      _mint(to, newTokenId);
      plusMemberCount = plusMemberCount.add(1);

      emit PlusMemberAdded(to);
    }

    function burn(address owner) public onlyManager {
      require(tokenIds[owner] != 0, "PlusMemberSBT: Member does not exist");

      _burn(owner, tokenIds[owner]);
      delete tokenIds[owner];
      plusMemberCount = plusMemberCount.sub(1);
    
      emit PlusMemberRemoved(owner);
    }

    function mintMultiple(address[] memory to, uint256[] memory _tokenIds) public onlyManager {
      require(to.length == _tokenIds.length, "PlusMembersSBT: to and tokenIds length mismatch");
      for (uint256 i = 0; i < to.length; i++) {
          _mint(to[i], _tokenIds[i]);
      }
    }

    function burnMultiple(uint256[] memory _tokenIds) public onlyManager {
      for (uint256 i = 0; i < _tokenIds.length; i++) {
          _burn(_tokenIds[i]);
      }
    }
}
