#!/bin/bash
cd ~/.local/share/openethereum/chains
pm2 start openethereum --name rapm-node -- --config node.toml