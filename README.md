Solidity Token Contract Example
This Solidity program implements a basic token contract with functionalities for minting and burning tokens. It includes public variables for token details, a mapping of addresses to token balances, and functions to increase (mint) or decrease (burn) the token supply and adjust balances accordingly.

Requirements
Token Details:

Public variables store the details about the coin, including Token Name, Token Abbreviation, and Total Supply.
Address Balances Mapping:

Utilizes a mapping of addresses to uint to maintain balances of tokens for each address.
Mint Function:

Includes a mint function that takes an address and a value as parameters. It increases the total supply by the specified value and adds the value to the balance of the specified address.
Burn Function:

Implements a burn function that takes an address and a value as parameters. It decreases the total supply by the specified value and deducts the value from the balance of the specified address. The function includes conditionals to ensure the balance of the address is sufficient to burn the specified amount.
Getting Started
Executing Program
To deploy and interact with the Solidity token contract using Remix IDE, follow these steps:

Open Remix IDE:

Open your web browser and navigate to Remix.
Create a New File:

In Remix IDE, create a new file by clicking on the "+" icon in the left-hand sidebar.
Save the file with a .sol extension (e.g., MyToken.sol).
Copy and Paste the Code:

Copy the provided Solidity code into the newly created file.

Compile the Contract:

Click on the "Solidity Compiler" tab in the left-hand sidebar.
Ensure the "Compiler" version is set to a compatible version (e.g., 0.8.18).
Compile the MyToken.sol file by clicking the "Compile MyToken.sol" button.
Deploy the Contract:

Go to the "Deploy & Run Transactions" tab in the left-hand sidebar.
Select MyToken contract from the dropdown menu.
Click on the "Deploy" button to deploy the contract to the Remix JavaScript VM or connect to an Ethereum network for deployment.
Interact with the Contract:

After deployment, interact with the contract by using the provided functions:
Mint Tokens: Call the mint function with an address and value to mint new tokens.
Burn Tokens: Call the burn function with an address and value to burn existing tokens, ensuring the balance is sufficient.

Author:
Neeraj Jaiswal.