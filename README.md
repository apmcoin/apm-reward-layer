# rAPM - apM Reward Layer
Off-chain reward bridging mainnet designed for real world business

- OpenEthereum based POA Mainnet (Can enable on-chain consensus on a contract base)
- No mining rewards, earn and utilize rAPM (like ETH) by bridging APM Tokens on the Ethereum mainnet
- Only authorized business users can access nodes directly. End users are utilized through end user services such as [apM Members](https://apm-members.com/).

Since APMs are fixed assets that are no longer being issued, the RAPM used to record them is stuck on the mainnet and out of circulation for a period of time.


## Detail Infomation
- [Building Core](./core/README.md)
- [Validator Setup Ref](https://openethereum.github.io/Validator-Set-Tutorial-1)
- [RAPM Chainspec](./chainspec/genesis.json)


## Default Setup (#for Ubuntu 20.x)
```
# Setup
git clone https://github.com/apmcoin/apm-reward-layer/
chmod u+x ~/apm-reward-layer/release/openethereum


# Global link
sudo ln -s ~/apm-reward-layer/release/openethereum /usr/local/bin/

# Testing
openethereum --chain dev --jsonrpc-apis personal

cd apm-reward-layer
cp ~/apm-reward-layer/rapm.json ~/.local/share/openethereum/chains/rapm.json
```

## Validator Setup
```
# Copy and Edit Validator toml file
cd apm-reward-layer
cp validator-node.toml.sample ~/.local/share/openethereum/chains/node.toml


# Create EVM Account
openethereum --config validator-node.toml --chain rapm.json account new

# Update the generated public address to rapm.json
# Git Sync

# Update the generated json account file pwds key using vi
vi node.pwds

# Update the engine-siner and paassword to validator toml
# vi ~/.local/share/openethereum/chains/node.toml

```


## Validator Node Running Test
```
cd ~/.local/share/openethereum/chains
openethereum --config node.toml

# if you first run, Update Bootnode info to toml file and sync
```

## RPC Node Setuo & Running Test
```
# Setup
cp ~/apm-reward-layer/rpc-node.toml.sample ~/.local/share/openethereum/chains/node.toml

# Run
cd ~/.local/share/openethereum/chains
openethereum --config node.toml
```

## Node Auto restart (using PM2)
```
cd ~/apm-reward-layer

sudo apt update
sudo apt install nodejs
sudo apt install npm
sudo npm install pm2 -g

pm2 start openethereum --name rapm-node -- --config ~/.local/share/openethereum/chains/node.toml
pm2 save
pm2 startup
```

## Tail log
```
pm2 monit

//for cloud monitoring
pm2 pluc
```

## Infomation
The address `0x5d8A27c3806edA6D0C78Ac1f77fd242f6B58AFDF`is the vault for connecting the apM Reward Layer mainnet to the ERC-20 apM on public mainnet.
You can find more information directly in the Genesis configuration file.

## License
[LICENSE](./openethereum/LICENSE)
