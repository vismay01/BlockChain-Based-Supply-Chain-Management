# Blockchain-Based Supply Chain Management System

## Project Title: Blockchain-Based Supply Chain Management

**A Major Project Report**
Submitted in partial fulfillment of the requirement for the award of the degree of Bachelor of Technology
in
Computer Science & Engineering

**Submitted by**
* Vismay Singh (211426)
* Dhruv Singh Kashyap (211401)
* Tanu Singh (211467)

**Under the guidance & supervision of**
Dr. Arvind Kumar

Department of Computer Science & Engineering and Information Technology
Jaypee University of Information Technology, Waknaghat, Solan - 173234 (India)
May 2025

## Project Overview

This project aims to develop a decentralized application (dApp) for supply chain management using blockchain technology. The system enhances transparency, traceability, and security in supply chain operations by recording product information and transactions on a distributed, immutable ledger. This approach helps to mitigate issues such as counterfeit products, fraud, and inefficiencies caused by a lack of visibility.

The application is built using Ethereum smart contracts for the core logic, a React.js frontend for user interaction, and utilizes tools like Hardhat for development and deployment.

## Key Features

* **Product Tracking:** Enables tracking of products as they move through the supply chain, from producer to retailer.
* **Role-Based Access:** Supports different roles, including producer, distributor, and retailer, each with specific functionalities.
* **Immutable Records:** Uses blockchain to ensure that all product information and transactions are recorded permanently and cannot be altered.
* **Smart Contract Automation:** Employs smart contracts to automate processes such as product registration, ownership transfer, and status updates.
* **Decentralized System:** Reduces reliance on central authorities and increases trust among stakeholders.
* **User-Friendly Interface:** Provides an intuitive web interface for interacting with the blockchain.

## Technology Stack

* **Blockchain Platform:** Ethereum
* **Smart Contract Language:** Solidity
* **Frontend Framework:** React.js
* **Development Environment:** Hardhat
* **JavaScript Library:** Ethers.js
* **UI Library:  MUI
* **Node.js
* **npm
* **Web3 Provider:** MetaMask

## System Architecture

1.  **Smart Contracts:**
    * Define the business logic for managing the supply chain.
    * Handle product registration, ownership transfer, and status updates.
    * Deployed on the Ethereum blockchain.

2.  **Frontend (React.js):**
    * Provides the user interface for interacting with the smart contracts.
    * Allows users to view product information, track shipments, and manage transactions.
    * Connects to the blockchain through MetaMask.

3.  **MetaMask:**
    * A browser extension that acts as a bridge between the user's browser and the Ethereum blockchain.
    * Manages user accounts and facilitates transaction signing.

4.  **Hardhat:**
    * A development environment that helps to compile, test, and deploy smart contracts.
    * Used for local blockchain setup and contract management.

## Setup and Installation

### Prerequisites

* Node.js (v20.12.0)
* npm (v10.5.0)
* MetaMask browser extension

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone <your_repository_url>
    cd <project_directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    cd appfrontend
    npm install
    ```

3.  **Start Hardhat Local Node:**
    ```bash
    npx hardhat node
    ```
    This command starts a local Ethereum blockchain network.  Keep this terminal window open.

4.  **Deploy Smart Contracts:**
     In a separate terminal:
    ```bash
    npx hardhat run scripts/deploy.js --network localhost
    ```
    This will deploy the smart contracts to the local blockchain.  The contract addresses will be displayed in the terminal.

5.  **Connect MetaMask to Hardhat Local Network:**
    * Open the MetaMask extension in your browser.
    * Click on the network dropdown.
    * Click "Add a network manually".
    * Enter the following details:
        * **Network Name:** Hardhat Local Network
        * **New RPC URL:** http://127.0.0.1:8545/
        * **Chain ID:** 31337
        * **Currency Symbol:** ETH
    * Click "Save".

6.  **Import Accounts into MetaMask:**
    * In the terminal where `npx hardhat node` is running, you will see a list of accounts and their private keys.
    * In MetaMask, click on your account avatar.
    * Select "Import Account".
    * Paste the private key for one of the accounts (e.g., the one you want to use as the producer).
    * Click "Import".
    * Repeat this process to import additional accounts for the distributor and retailer roles.  It is recommended to import each account to a separate MetaMask account.

7.  **Start the Frontend:**
    ```bash
    cd appfrontend
    npm start
    ```
    This will start the React.js application in your browser (usually at http://localhost:3000).

## How to Use the Application

1.  **Connect to MetaMask:** Ensure MetaMask is connected to the "Hardhat Local Network" and that you have imported the accounts for the producer, distributor, and retailer.
2.  **Register/Login:** The application should allow you to register or login using your MetaMask account.  The account you select in MetaMask will determine your role (producer, distributor, or retailer) in the application.
3.  **Interact with the System:**
    * **Producer:** Can create new product batches with relevant details.
    * **Distributor:** Can manage the shipment and transfer of product batches.
    * **Retailer:** Can receive product batches and make them available for sale.
    * All roles can view product and batch details, and track the product's journey through the supply chain.

## Directory Structure


├── contracts/        # Solidity smart contracts
├── scripts/          # Deployment scripts
├── appfrontend/      # React.js frontend application
│   ├── src/          # Source code
│   ├── public/       # Static assets
├── README.md         # Project documentation
├── package.json      # Project dependencies
├── hardhat.config.js # Hardhat configuration


## Smart Contracts

The `contracts/` directory contains the Solidity smart contracts that define the core logic of the supply chain management system.

## Deployment

The `scripts/deploy.js` script is used to deploy the smart contracts to the Ethereum blockchain.  It uses Hardhat to automate the deployment process.

## Frontend

The `appfrontend/` directory contains the React.js code for the user interface.  It allows users to interact with the smart contracts and the blockchain.

## Testing
* Smart contracts are tested using Hardhat's testing framework.  Tests are located in the `test/` directory.
* The frontend can be tested using standard React testing libraries.

## UML Diagrams
*(Add UML diagrams here.  Since I cannot directly create images, describe what diagrams you would include)*

* **Use Case Diagram:** Illustrates the interactions between different roles (Producer, Distributor, Retailer) and the system.
* **Class Diagram:** Shows the structure of the smart contracts, including classes, attributes, and relationships.
* **Sequence Diagram:** Depicts the flow of messages and actions for key processes, such as product registration and ownership transfer.

## Future Enhancements

* Implement more complex supply chain scenarios.
* Add support for more product types and attributes.
* Integrate with other blockchain networks.
* Enhance the user interface with more advanced features.
* Implement security best practices.

## Troubleshooting

* **Ensure Hardhat is configured correctly:** Check the `hardhat.config.js` file for network settings and compiler versions.
* **Verify MetaMask connection:** Make sure MetaMask is connected to the correct network and that you have imported the necessary accounts.
* **Check for contract deployment errors:** Review the output of the deployment script for any error messages.
* **Clear browser cache:** If you encounter issues with the frontend, try clearing your browser's cache.

## Credits

* This project was developed by Vismay Singh, Dhruv Singh Kashyap, and Tanu Singh under the supervision of Dr. Arvind Kumar.

## References

*(Add any relevant references here)*

Video Link:- https://drive.google.com/file/d/1ApO_zL_GvmAkI7qWmcm6UhA317RgS7oP/view?usp=sharing
