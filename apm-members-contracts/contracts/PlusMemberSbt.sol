pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721Full.sol";
import "./ManagerRole.sol";

contract PlusMemberSbt is ERC721Full, ManagerRole {
    using SafeMath for uint256;

    string private _name = "MembersPlusSBT";
    string private _symbol = "PLUS";

    uint256 private currentTokenId; // 토큰 ID 카운터
    uint256 private plusMemberCount;
    mapping(address => uint256) private tokenIds;

    event PlusMemberAdded(address indexed userCA, uint256 tokenId);
    event PlusMemberRemoved(address userCA);

    constructor() public ERC721Full(_name, _symbol) {}

    function setDetailed(string memory name, string memory symbol) public onlyManager {
      _setDetailed(name, symbol);
    }

    function setBaseTokenUri(string memory uri) public onlyManager {
      _setBaseURI(uri);
    }

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

    function mintNext(address userCA) public onlyManager returns (uint256 newTokenId) {
      require(tokenIds[userCA] == 0, "PlusMemberSbt: Member already exists");

      newTokenId = currentTokenId.add(1);
      _mint(userCA, newTokenId);

      tokenIds[userCA] = newTokenId;
      currentTokenId = newTokenId;
      plusMemberCount = plusMemberCount.add(1);
 
      emit PlusMemberAdded(userCA, newTokenId);
    }

    function burn(address userCA) public onlyManager {
      require(tokenIds[userCA] != 0, "PlusMemberSbt: Member does not exist");

      _burn(userCA, tokenIds[userCA]);

      delete tokenIds[userCA];
      plusMemberCount = plusMemberCount.sub(1);
    
      emit PlusMemberRemoved(userCA);
    }

    function mintMultiple(address[] memory userCAs) public onlyManager {
      for (uint256 i = 0; i < userCAs.length; i++) {
        mintNext(userCAs[i]);
      }
    }

    function burnMultiple(address[] memory userCAs) public onlyManager {
      for (uint256 i = 0; i < userCAs.length; i++) {
        burn(userCAs[i]);
      }
    }
}
