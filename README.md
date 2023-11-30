# rAPM - apM Reward Layer
Off-chain reward bridging mainnet designed for real world business

- OpenEthereum based POA Mainnet 
- No mining rewards, earn and utilize rAPM (like ETH) by bridging APM Tokens on the Ethereum mainnet
- Only authorized business users can access nodes directly. End users are utilized through end user services such as [apM Members](https://apm-members.com/).

Since APMs are fixed assets that are no longer being issued, the RAPM used to record them is stuck on the mainnet and out of circulation for a period of time.


## Detail Infomation
- [Building Core](./core/README.md)
- [Validator Setup Ref](https://openethereum.github.io/Validator-Set-Tutorial-1)
- [RAPM Chainspec](./chainspec/genesis.json)


## Start script (#for Ubuntu 20.x)
```
# Setup
git clone https://github.com/apmcoin/apm-reward-layer/
cd apm-reward-layer/release/
chmod u+x openethereum


# Global link
sudo ln -s ~/apm-reward-layer/release/openethereum /usr/local/bin/


# Testing
openethereum --chain dev --jsonrpc-apis personal


# Run node


cd ~/apm-reward-layer/
cp chain/rapm.json ~/.local/share/openethereum/chains
cp config.toml.example ~/.local/share/openethereum/chains/node.toml config.toml

cd ~/.local/share/openethereum/chains/node.toml

cp 

~/.local/share/openethereum/chains
cd ~/apm-reward-layer/






```


## License
[LICENSE](./openethereum/LICENSE)
