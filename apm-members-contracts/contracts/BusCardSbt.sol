pragma solidity ^0.5.6;

import "./rapm-contracts/token/ERC721/ERC721Full.sol";
import "./ManagerRole.sol";

contract BusCard is ERC721Full, ManagerRole {
    using SafeMath for uint256;

    string private _name = "BusCard";
    string private _symbol = "BUS";

    uint256 private currentTokenId; // 토큰 ID 카운터
    uint256 private busCardCount;
    mapping(address => uint256) private tokenIds;

    uint256 private totalRideCount;
    mapping(uint256 => uint256) private fromRideCount;
    mapping(uint256 => uint256) private userRideCount;

    constructor() public ERC721Full(_name, _symbol) {}

    function getTotalRideCount() public view returns(uint256) {
      return totalRideCount;
    }

    function getFromRideCount(uint256 from) public view returns(uint256) {
      return fromRideCount[from];
    }

    function getUserRideCount(address userCA) public view returns(uint256) {
      return userRideCount[getTokenId(userCA)];
    }

    function rideBus(address userCA, uint256 from, uint256 userType, uint256 timestmap) public onlyManager {
      if (!hasBusCard(userCA)) {
        _mintNext(userCA);
      }

      totalRideCount = totalRideCount.add(1);
      fromRideCount[from] = fromRideCount[from].add(1);
      userRideCount[getTokenId(userCA)] = userRideCount[getTokenId(userCA)].add(1);

      emit Rided(userCA, from, userType, timestmap);
    }


    /**기본 코드 */
    function _mintNext(address userCA) private returns (uint256 newTokenId) {
      require(tokenIds[userCA] == 0, "BusCard: already exists");

      newTokenId = currentTokenId.add(1);
      _mint(userCA, newTokenId);

      tokenIds[userCA] = newTokenId;
      currentTokenId = newTokenId;
      busCardCount = busCardCount.add(1);
 
      emit BusCardAdded(userCA, newTokenId);
    }

    function burn(address userCA) public onlyManager {
      require(tokenIds[userCA] != 0, "BusCard: does not exist");

      _burn(userCA, tokenIds[userCA]);

      delete tokenIds[userCA];
      busCardCount = busCardCount.sub(1);
    
      emit BusCardRemoved(userCA);
    }

    function setDetailed(string memory name, string memory symbol) public onlyManager {
      _setDetailed(name, symbol);
    }

    function setBaseTokenUri(string memory uri) public onlyManager {
      _setBaseURI(uri);
    }

    function getCurrentTokenId() public view returns (uint256) {
      return currentTokenId;
    }

    function getBusCardCount() public view returns (uint256) {
      return busCardCount;
    }

    function hasBusCard(address userCA) public view returns (bool) {
        return tokenIds[userCA] != 0 ? true : false;
    }

    function getTokenId(address userCA) public view returns (uint256) {
      return tokenIds[userCA];
    }

    event BusCardAdded(address indexed userCA, uint256 tokenId);
    event BusCardRemoved(address userCA);
    event Rided(address indexed userCA, uint256 from, uint256 userType, uint256 timestmap);
}