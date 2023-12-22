// SPDX-License-Identifier: MIT
pragma solidity 0.5.6;

contract RandomNumberContract {
    uint public lastRandomNumber;

    function storeRandomNumber(uint _randomNumber) public {
        lastRandomNumber = _randomNumber;
    }
}
