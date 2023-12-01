#!/bin/bash
cd ~/.local/share/openethereum/chains
pm2 start openethereum --name openethereum -- --config node.toml