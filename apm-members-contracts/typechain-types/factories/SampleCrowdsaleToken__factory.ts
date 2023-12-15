/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SampleCrowdsaleToken,
  SampleCrowdsaleTokenInterface,
} from "../SampleCrowdsaleToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "sender",
        type: "address",
      },
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280601681526020017f53616d706c652043726f776473616c6520546f6b656e000000000000000000008152506040518060400160405280600381526020017f534354000000000000000000000000000000000000000000000000000000000081525060126200009133620000e760201b60201c565b8260049080519060200190620000a99291906200030c565b508160059080519060200190620000c29291906200030c565b5080600660006101000a81548160ff021916908360ff160217905550505050620003bb565b620001028160036200014860201b620014941790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6200015a82826200022c60201b60201c565b15620001ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018062001b246022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200034f57805160ff191683800117855562000380565b8280016001018555821562000380579182015b828111156200037f57825182559160200191906001019062000362565b5b5090506200038f919062000393565b5090565b620003b891905b80821115620003b45760008160009055506001016200039a565b5090565b90565b61175980620003cb6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d7146104a0578063a9059cbb14610506578063aa271e1a1461056c578063dd62ed3e146105c8576100f5565b806370a082311461037757806395d89b41146103cf578063983b2d56146104525780639865027514610496576100f5565b806323b872dd116100d357806323b872dd14610201578063313ce5671461028757806339509351146102ab57806340c10f1914610311576100f5565b806306fdde03146100fa578063095ea7b31461017d57806318160ddd146101e3575b600080fd5b610102610640565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610142578082015181840152602081019050610127565b50505050905090810190601f16801561016f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101c96004803603604081101561019357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106e2565b604051808215151515815260200191505060405180910390f35b6101eb6106f9565b6040518082815260200191505060405180910390f35b61026d6004803603606081101561021757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610703565b604051808215151515815260200191505060405180910390f35b61028f6107b4565b604051808260ff1660ff16815260200191505060405180910390f35b6102f7600480360360408110156102c157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107cb565b604051808215151515815260200191505060405180910390f35b61035d6004803603604081101561032757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610870565b604051808215151515815260200191505060405180910390f35b6103b96004803603602081101561038d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108e4565b6040518082815260200191505060405180910390f35b6103d761092c565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104175780820151818401526020810190506103fc565b50505050905090810190601f1680156104445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104946004803603602081101561046857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ce565b005b61049e610a38565b005b6104ec600480360360408110156104b657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a43565b604051808215151515815260200191505060405180910390f35b6105526004803603604081101561051c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ae8565b604051808215151515815260200191505060405180910390f35b6105ae6004803603602081101561058257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aff565b604051808215151515815260200191505060405180910390f35b61062a600480360360408110156105de57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b1c565b6040518082815260200191505060405180910390f35b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106d85780601f106106ad576101008083540402835291602001916106d8565b820191906000526020600020905b8154815290600101906020018083116106bb57829003601f168201915b5050505050905090565b60006106ef338484610ba3565b6001905092915050565b6000600254905090565b6000610710848484610d9a565b6107a984336107a485600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461103690919063ffffffff16565b610ba3565b600190509392505050565b6000600660009054906101000a900460ff16905090565b6000610866338461086185600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110bf90919063ffffffff16565b610ba3565b6001905092915050565b600061087b33610aff565b6108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806116726030913960400191505060405180910390fd5b6108da8383611147565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109c45780601f10610999576101008083540402835291602001916109c4565b820191906000526020600020905b8154815290600101906020018083116109a757829003601f168201915b5050505050905090565b6109d733610aff565b610a2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806116726030913960400191505060405180910390fd5b610a3581611302565b50565b610a413361135c565b565b6000610ade3384610ad985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461103690919063ffffffff16565b610ba3565b6001905092915050565b6000610af5338484610d9a565b6001905092915050565b6000610b158260036113b690919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061170a6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610caf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806116506022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e20576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806116e56025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061162d6023913960400191505060405180910390fd5b610ef7816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461103690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f8a816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110bf90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000828211156110ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b60008082840190508381101561113d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156111ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6111ff816002546110bf90919063ffffffff16565b600281905550611256816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546110bf90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b61131681600361149490919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b61137081600361156f90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561143d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806116c36022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61149e82826113b6565b15611511576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61157982826113b6565b6115ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806116a26021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a165627a7a72305820aa5750ea4c32b9b08e8f585e1bc4bb130ae4ed72c9d950855d32fe6d83b47cf90029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type SampleCrowdsaleTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleCrowdsaleTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleCrowdsaleToken__factory extends ContractFactory {
  constructor(...args: SampleCrowdsaleTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SampleCrowdsaleToken> {
    return super.deploy(overrides || {}) as Promise<SampleCrowdsaleToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SampleCrowdsaleToken {
    return super.attach(address) as SampleCrowdsaleToken;
  }
  connect(signer: Signer): SampleCrowdsaleToken__factory {
    return super.connect(signer) as SampleCrowdsaleToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleCrowdsaleTokenInterface {
    return new utils.Interface(_abi) as SampleCrowdsaleTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleCrowdsaleToken {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SampleCrowdsaleToken;
  }
}
