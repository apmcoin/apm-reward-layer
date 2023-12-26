pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721.sol";
import "./ManagerRole.sol";

contract PlusMemberSbt is ERC721, ManagerRole {
    using SafeMath for uint256;

    uint256 private currentTokenId; // 토큰 ID 카운터
    uint256 private plusMemberCount;
    mapping(address => uint256) private tokenIds;
    string private baseURI;

    event PlusMemberAdded(address indexed userCA, uint256 tokenId);
    event PlusMemberRemoved(address userCA);

    constructor() public ERC721() {
        baseURI = ""; // Initialize with an empty baseURI
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

    // Set the base URI for all tokens, only callable by the manager
    function setBaseURI(string memory newBaseURI) public onlyManager {
        baseURI = newBaseURI;
    }

    // Override tokenURI function from ERC721 to construct and return the token's URI
    function tokenURI(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "PlusMemberSbt: URI query for nonexistent token");
        return string(abi.encodePacked(baseURI, "/", uint256ToString(tokenId)));
    }

    // Helper function to convert uint256 to string
    function uint256ToString(uint256 value) private pure returns (string memory) {
        // Implementation of uint256 to string conversion
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        uint256 index = digits - 1;
        temp = value;
        while (temp != 0) {
            buffer[index--] = byte(uint8(48 + temp % 10));
            temp /= 10;
        }
        return string(buffer);
    }
}
