pragma solidity 0.5.6;

import "./rapm-contracts/access/roles/OwnableRole.sol";

contract NativeBridgeFromRAPM is OwnableRole {

    // Fallback function to receive RAPM. It is called automatically when RAPM is sent to this contract.
    function() external payable {
        require(msg.value > 0, "No RAPM received");
    }

    // Function to transfer RAPM to another address. Can only be called by the owner.
    function transferRAPM(address payable to, uint256 amount) public onlyOwner {
        require(address(this).balance >= amount, "Insufficient RAPM balance");
        to.transfer(amount);
    }

    // Function to check the current RAPM balance of the contract.
    function getRAPMBalance() public view returns (uint256) {
        return address(this).balance;
    }
}