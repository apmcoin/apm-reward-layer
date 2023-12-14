require('dotenv').config();
const { ethers } = require('ethers');
const layerHashBridgeContractAbi = require('./abi/LayerHashBridge.json');
const logger = require('./logger'); // Import the logger module

// Environment variables setup
const rapmRpcUrl = process.env.RAPM_RPC_URL; // RAPM RPC URL
const baseRpcUrl = process.env.BASE_RPC_URL; // Coinbase base chain RPC URL
const privateKey = process.env.PRIVATE_KEY; // Private key for the wallet
const layerHashBridgeContractAddress = process.env.LAYER_HASH_BRIDGE_CONTRACT_ADDRESS; // LayerHashBridge contract address

// Initialize ethers providers
const rapmProvider = new ethers.providers.JsonRpcProvider(rapmRpcUrl);
const baseProvider = new ethers.providers.JsonRpcProvider(baseRpcUrl);
// Create a wallet and connect it to the base chain provider
const wallet = new ethers.Wallet(privateKey, baseProvider);

// Create a contract instance
const layerHashBridgeContract = new ethers.Contract(layerHashBridgeContractAddress, layerHashBridgeContractAbi, wallet);

// Function to record the block hash
async function recordBlockHash() {
    try {
        // Get the latest block number from rapm
        const latestBlockNumber = await rapmProvider.getBlockNumber();
        const latestBlock = await rapmProvider.getBlock(latestBlockNumber);
        const latestBlockHash = latestBlock.hash;

        // Check if this block hash has already been recorded
        const existingHash = await layerHashBridgeContract.getBlockHash(latestBlockNumber);
        if(existingHash === latestBlockHash) {
            logger.info(`Block hash for block number ${latestBlockNumber} already recorded. Skipping.`);
            return;
        }

        // Record the block hash on the Coinbase base chain
        const tx = await layerHashBridgeContract.recordBlockHash(latestBlockNumber, latestBlockHash);
        const receipt = await tx.wait();

        logger.info(`Block hash recorded: Block Number ${latestBlockNumber}, Hash ${latestBlockHash}, Tx Hash: ${receipt.transactionHash}`);
    } catch (error) {
        logger.error(`Error recording block hash: ${error}`);
    }
}

// Schedule the block hash recording at regular intervals
const intervalInHours = 1; // Recording interval in hours
setInterval(recordBlockHash, intervalInHours * 60 * 60 * 1000);

// Execute immediately
recordBlockHash();
