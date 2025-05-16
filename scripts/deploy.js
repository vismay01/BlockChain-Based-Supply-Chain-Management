const path = require("path");
var contracts = [];

async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is available in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy only the main contract since it inherits from others
  const SupplyChainLifecycle = await ethers.getContractFactory("SupplyChainLifecycle");
  const supplyChainLifecycle = await SupplyChainLifecycle.deploy();
  await supplyChainLifecycle.deployed();

  console.log("SupplyChainLifecycle deployed to:", supplyChainLifecycle.address);
  
  // Store the contract address
  contracts.push({ "SupplyChainLifecycle": supplyChainLifecycle.address });

  // Save frontend files
  saveFrontendFilesJSON("SupplyChainLifecycle");
}

function saveFrontendFilesJSON(contractNameString) {
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "appfrontend", "src", "contracts");

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const contractArtifact = artifacts.readArtifactSync(contractNameString);

  fs.writeFileSync(
    path.join(contractsDir, contractNameString + ".json"),
    JSON.stringify(contractArtifact, null, 2)
  );
}

function storeDeployedAddresses(contracts){
  const fs = require("fs");
  const contractsDir = path.join(__dirname, "..", "appfrontend", "src", "contracts");

  fs.writeFileSync(
    path.join(contractsDir, "contract-addresses.json"),
    JSON.stringify( contracts, undefined, 2)
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
