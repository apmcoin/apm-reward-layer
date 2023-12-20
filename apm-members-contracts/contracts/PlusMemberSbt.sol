pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721.sol";
import "./ManagerRole.sol";

contract PlusMemberSBT is ERC721, ManagerRole {
    using SafeMath for uint256;

    uint256 private _tokenIds; // 토큰 ID 카운터

    constructor() public ERC721() {}

    function mintMultiple(address[] memory to, uint256[] memory tokenIds) public onlyManager {
        require(to.length == tokenIds.length, "ApMMembersPlusSBT: to and tokenIds length mismatch");
        for (uint256 i = 0; i < to.length; i++) {
            _mint(to[i], tokenIds[i]);
        }
    }

    function burnMultiple(uint256[] memory tokenIds) public onlyManager {
        for (uint256 i = 0; i < tokenIds.length; i++) {
            _burn(tokenIds[i]);
        }
    }

    function mintNext(address to) public onlyManager returns (uint256) {
        uint256 newTokenId = _tokenIds.add(1);
        _tokenIds = newTokenId;
        _mint(to, newTokenId);
        return newTokenId;
    }

    function burn(address owner, uint256 tokenId) public onlyManager {
      _burn(owner, tokenId);
    }

    function currentTokenId() public view returns (uint256) {
        return _tokenIds;
    }
}