// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract BuyMeCoffee {  

error BuyMeCoffee__NotSuffuscientEhter();
error BuyMeCoffee__NoTips();

    // Event to be emitted when the memo is created
    event NewMemo(
        address indexed from,
        uint256 timeStamp,
        string name,
        string message
    );

    // Meno struc
    struct Memo{
        address from;
        uint256 timeStamp;
        string name;
        string message;
    }
    // List of all the memos from the givers
    Memo [] memos;

    // Address of the deployer
    address payable owner;

    constructor(){
        owner= payable(msg.sender);

    }

    /**
     * @dev buy coffee for the owner
     * @param _name of the giver
     * @param  _message of the giver
     */

    function buyMeCoffee(string memory _name, string memory _message)public payable{
        if(msg.value < 0){
            revert BuyMeCoffee__NotSuffuscientEhter();
        }
       memos.push( Memo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        ));
        // event a log event when a new memo is created
        emit NewMemo(
            msg.sender,
            block.timestamp,
            _name,
            _message
        );
    }

    /**
     * @dev withdraw tips givens by gives
     */
    function withdrawTips() external{
        uint256 tips = address(this).balance;
        if(tips < 0){
            revert BuyMeCoffee__NoTips();
        }
        (bool success,)= owner.call{value:tips}("");
        require(success,"Transfer failed");
    } 

    /////////////////////
    // Getter Functions //
    /////////////////////
    function getMemos() public view returns (Memo[] memory){
        return memos;
    }
}