pragma solidity ^0.4.0;

contract Contract {
 address public owner;

 constructor() public {
   //Set owner to who creates the contract
   owner = msg.sender;
 }
}
