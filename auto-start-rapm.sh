#!/bin/bash
cd ~/.local/share/openethereum/chains
pm2 start openethereum --name apm-reward-layer-node -- --config node.toml