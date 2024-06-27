// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BasicAuction {
    address public owner;             // The owner of the auction
    address public highestBidder;     // The highest bidder
    uint256 public highestBid;        // The highest bid amount
    bool public auctionStarted;       // Flag to indicate if the auction has started
    bool public ended;                // Flag to indicate if the auction has ended

    constructor() {
        owner = msg.sender; // Set the contract creator as the owner
    }

    // Function to start the auction
    function startAuction() external {
        // Ensure only the owner can start the auction
        require(msg.sender == owner, "Only the owner can start the auction");
        // Ensure the auction has not already ended
        require(!ended, "Auction has already ended");

        auctionStarted = true;
    }

    // Function to place a bid
    function bid(uint256 amount) external {
        // Ensure the auction has started
        require(auctionStarted, "Auction not started");
        // Ensure the auction is still ongoing
        require(!ended, "Auction already ended");
        // Ensure the bid is higher than the current highest bid
        require(amount > highestBid, "There already is a higher or equal bid");

        // Update the highest bid and bidder
        highestBidder = msg.sender;
        highestBid = amount;

        // Check that the bid amount is not negative (using assert for demonstration)
        assert(highestBid >= 0);
    }

    // Function to end the auction
    function endAuction() external {
        // Ensure only the owner can end the auction
        require(msg.sender == owner, "Only the owner can end the auction");
        // Ensure the auction has started
        require(auctionStarted, "Auction not started");

        ended = true;
    }

    // Function to cancel the auction by the owner
    function cancelAuction() external {
        // Ensure only the owner can cancel the auction
        require(msg.sender == owner, "Only the owner can cancel the auction");
        
        // Revert the auction if the owner decides to cancel it
        revert("Auction cancelled by the owner");
    }
}
