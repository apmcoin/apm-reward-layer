pragma solidity 0.5.6;

import "./rapm-contracts/access/Roles.sol";

contract ManagerRole {
    using Roles for Roles.Role;

    Roles.Role private managers;

    event ManagerAdded(address indexed account);
    event ManagerRemoved(address indexed account);

    modifier onlyManager() {
        require(managers.has(msg.sender), "ManagerRole: caller does not have the Manager role");
        _;
    }

    function addManager(address account) public onlyManager {
        managers.add(account);
        emit ManagerAdded(account);
    }

    function removeManager(address account) public onlyManager {
        managers.remove(account);
        emit ManagerRemoved(account);
    }

    function isManager(address account) public view returns (bool) {
        return managers.has(account);
    }
}
