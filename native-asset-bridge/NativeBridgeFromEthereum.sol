pragma solidity 0.5.6;

import "./rapm-contracts/token/ERC20/IERC20.sol";
import "./rapm-contracts/ownership/Ownable.sol";

contract NativeBridgeFromEthereum is OwnableRole {
    IERC20 private APM = IERC20(0xC8C424B91D8ce0137bAB4B832B7F7D154156BA6c);

    // Events for logging
    event SentToRAPM(address indexed sender, uint256 amount);
    event RetrievedFromRAPM(address indexed to, uint256 amount);
    event EmergencyERC20Recovered(address indexed token, uint256 amount);

    // Function to transfer ETH to the RAPM chain
    function sendToRAPM(uint256 amount) public {
        require(APM.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        emit SentToRAPM(msg.sender, amount);
    }

    // Function to return assets from RAPM to the Ethereum chain
    function retrieveFromRAPM(address to, uint256 amount) public onlyOwner {
        require(to != address(0), "Invalid address: zero address");
        require(APM.transfer(to, amount), "Transfer failed");
        emit RetrievedFromRAPM(to, amount);
    }

    // Function to recover ERC20 tokens
    function emergencyRecoverERC20(IERC20 token, uint256 amount) public onlyOwner {
        require(address(token) != address(0), "Invalid token: zero address");
        require(token.transfer(msg.sender, amount), "Recovery failed");
        emit EmergencyERC20Recovered(address(token), amount);
    }
}
