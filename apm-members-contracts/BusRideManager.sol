pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract BusRideManager is ManagerRole {
    struct BusRide {
        bytes32 uuid;
        string location;
        uint256 timestamp;
    }

    BusRide[] public rides;

    event RideRecorded(bytes32 uuid, string location, uint256 timestamp);

    function recordRide(bytes32 uuid, string memory location, uint256 timestamp) public onlyManager {
        rides.push(BusRide({
            uuid: uuid,
            location: location,
            timestamp: timestamp
        }));
        emit RideRecorded(uuid, location, timestamp);
    }

    function getRideCount() public view returns (uint256) {
        return rides.length;
    }
}