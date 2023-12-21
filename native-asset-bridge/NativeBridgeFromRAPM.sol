pragma solidity 0.5.6;

import "./rapm-contracts/access/roles/OwnableRole.sol";

contract NativeBridgeFromRAPM is OwnableRole {

    // Events for logging
    event RAPMReceived(address indexed sender, uint256 amount);
    event RAPMTransferred(address indexed to, uint256 amount);

    // Fallback function to receive RAPM
    function() external payable {
        require(msg.value > 0, "No RAPM received");
        emit RAPMReceived(msg.sender, msg.value);
    }

    // Function to transfer RAPM to another address
    function transferRAPM(address payable to, uint256 amount) public onlyOwner {
        require(to != address(0), "Invalid address: zero address");
        require(address(this).balance >= amount, "Insufficient RAPM balance");
        to.transfer(amount);
        emit RAPMTransferred(to, amount);
    }

    // Function to check the current RAPM balance of the contract
    function getRAPMBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
