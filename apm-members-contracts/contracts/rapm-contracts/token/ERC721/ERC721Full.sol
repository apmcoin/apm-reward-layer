pragma solidity ^0.5.0;

import "./ERC721.sol";
import "./ERC721Enumerable.sol";
import "./ERC721MetadataWithBaseUri.sol";

/**
 * @title Full ERC721 Token
 * This implementation includes all the required and some optional functionality of the ERC721 standard
 * Moreover, it includes approve all functionality using operator terminology
 * @dev see https://eips.ethereum.org/EIPS/eip-721
 */
contract ERC721Full is ERC721, ERC721Enumerable, ERC721MetadataWithBaseUri {
    constructor (string memory name, string memory symbol) public ERC721MetadataWithBaseUri(name, symbol) {
        // solhint-disable-previous-line no-empty-blocks
    }
}
