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
chmod u+x ~/apm-reward-layer/release/openethereum


# Global link
sudo ln -s ~/apm-reward-layer/release/openethereum /usr/local/bin/

# Testing
openethereum --chain dev --jsonrpc-apis personal

# Add Chain Infomation
cp ~/apm-reward-layer/rapm.json ~/.local/share/openethereum/chains


# (validator only) pub key to update rapm.jeon and git sync
openethereum --config validator-node.toml --chain ~/apm-reward-layer/rapm.json ~/.local/s account new
cd ~/.local/share/openethereum/chains/
vi node.pwds
# save pwds key
vi node.toml
cp ~/apm-reward-layer/validator-node.toml ~/.local/share/openethereum/chains/node.toml
vi node.pwds
# add pub address to engine-signer
# add password = ["node.pwds"]

#Run
openethereum --config ~/.local/share/openethereum/chains/node.toml

# (genesis only) Update Bootnode
```


## License
[LICENSE](./openethereum/LICENSE)
