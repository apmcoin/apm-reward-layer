# LayerHashBridgeHandler

This project contains the `LayerHashBridgeHandler.js` script, which bridges between the rAPM network and the base chain by recording block hashes. It uses `pm2` for process management to ensure the script runs continuously and efficiently.

## Requirements

- Node.js
- npm or yarn
- pm2 (Install via `npm install pm2 -g`)
- A `.env` file with the required environment variables: `RAPM_RPC_URL`, `BASE_RPC_URL`, `PRIVATE_KEY`, `LAYER_HASH_BRIDGE_CONTRACT_ADDRESS`
