pragma solidity 0.5.6;

import "./ManagerRole.sol";

contract BusRideManager is ManagerRole {
    struct BusRide {
        bytes32 userUuid;
        uint location; // Location now an integer
        uint256 timestamp;
    }

    BusRide[] public rides;
    mapping(uint => string) public locationDescriptions;

    event RideRecorded(bytes32 userUuid, uint location, uint256 timestamp);

    function recordRide(bytes32 userUuid, uint location, uint256 timestamp) public onlyManager {
        rides.push(BusRide({
            userUuid: userUuid,
            location: location,
            timestamp: timestamp
        }));
        emit RideRecorded(userUuid, location, timestamp);
    }

    function setLocationDescription(uint location, string memory description) public onlyManager {
        locationDescriptions[location] = description;
    }

    function getLocationDescription(uint location) public view returns (string memory) {
        return locationDescriptions[location];
    }

    function getRideCount() public view returns (uint256) {
        return rides.length;
    }
}
