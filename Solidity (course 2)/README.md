# Solidity Token Contract Example

This Solidity program implements a basic token contract with functionalities for minting and burning tokens. It demonstrates the foundational concepts of token creation and management in the Ethereum ecosystem.

## Description

This program is a smart contract written in Solidity, designed to manage a custom token with minting and burning capabilities. The contract includes public variables for essential token details, such as the token name, abbreviation, and total supply. It also utilizes a mapping to track the token balances of different addresses. The mint function allows for the creation of new tokens, while the burn function provides a way to decrease the token supply by burning tokens from a specified address.

## Getting Started

### Executing Program

To deploy and interact with the Solidity token contract using Remix IDE, follow these steps:

1. **Open Remix IDE**  
   Navigate to the [Remix website](https://remix.ethereum.org/) in your web browser.

2. **Create a New File**  
   In Remix IDE, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a `.sol` extension (e.g., `MyToken.sol`).

3. **Copy and Paste the Code**  
   Copy the provided Solidity code into the newly created file:

contract MyToken {

    // public variables here
    string public TokenName = "NeerajToken";
    string public TokenAbbrev = "NTKN";
    uint public TotalSupply = 0;

    // mapping variable here
    mapping(address=> uint) public balances;

    // mint function
    function mint (address _address, uint value) public {
        TotalSupply += value;
        balances[_address] += value;
    }

    // burn function
    function burn (address _address, uint value) public {
        if(balances[_address] >= value) {
        TotalSupply -= value;
        balances[_address] -= value;
    }

}
}
# Authors
Neeraj Jaiswal