pragma solidity 0.5.6;

import "./rapm-contracts/token/ERC20/IERC20.sol";
import "./rapm-contracts/access/roles/OwnableRole.sol";

contract NativeBridgeFromEthereum is OwnableRole {
    IERC20 private APM = IERC20(0xC8C424B91D8ce0137bAB4B832B7F7D154156BA6c);

    // Function to transfer ETH to the RAPM chain.
    // The asset transfer is fully completed only after verification by the nodes.
    function sendToRAPM(uint256 amount) public {
        require(APM.transferFrom(msg.sender, address(this), amount), "Transfer failed");
    }

    // Function to return assets from RAPM to the Ethereum chain.
    // The asset transfer is fully completed only after verification by the nodes.
    function retrieveFromRAPM(address to, uint256 amount) public onlyOwner {
        require(APM.transfer(to, amount), "Transfer failed");
    }

    function emergencyRecoverERC20(IERC20 token, uint256 amount) public onlyOwner {
        require(token.transfer(msg.sender, amount), "Recovery failed");
    }
}
