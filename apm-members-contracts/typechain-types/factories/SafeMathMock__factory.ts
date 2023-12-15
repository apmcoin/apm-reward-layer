/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SafeMathMock, SafeMathMockInterface } from "../SafeMathMock";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "div",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "sub",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "mul",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "a",
        type: "uint256",
      },
      {
        name: "b",
        type: "uint256",
      },
    ],
    name: "mod",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610539806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063771602f71461005c578063a391c15b146100a8578063b67d77c5146100f4578063c8a4ac9c14610140578063f43f523a1461018c575b600080fd5b6100926004803603604081101561007257600080fd5b8101908080359060200190929190803590602001909291905050506101d8565b6040518082815260200191505060405180910390f35b6100de600480360360408110156100be57600080fd5b8101908080359060200190929190803590602001909291905050506101ec565b6040518082815260200191505060405180910390f35b61012a6004803603604081101561010a57600080fd5b810190808035906020019092919080359060200190929190505050610200565b6040518082815260200191505060405180910390f35b6101766004803603604081101561015657600080fd5b810190808035906020019092919080359060200190929190505050610214565b6040518082815260200191505060405180910390f35b6101c2600480360360408110156101a257600080fd5b810190808035906020019092919080359060200190929190505050610228565b6040518082815260200191505060405180910390f35b60006101e4838361023c565b905092915050565b60006101f883836102c4565b905092915050565b600061020c8383610353565b905092915050565b600061022083836103dc565b905092915050565b60006102348383610462565b905092915050565b6000808284019050838110156102ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600080821161033b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b600082848161034657fe5b0490508091505092915050565b6000828211156103cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b6000808314156103ef576000905061045c565b600082840290508284828161040057fe5b0414610457576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806104ed6021913960400191505060405180910390fd5b809150505b92915050565b6000808214156104da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f536166654d6174683a206d6f64756c6f206279207a65726f000000000000000081525060200191505060405180910390fd5b8183816104e357fe5b0690509291505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a165627a7a72305820182d5f2f6fdd043bb9ae9ac9233f829af95e0051a2dda4c7aaa4ebcf5f840e4e0029";

type SafeMathMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SafeMathMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SafeMathMock__factory extends ContractFactory {
  constructor(...args: SafeMathMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SafeMathMock> {
    return super.deploy(overrides || {}) as Promise<SafeMathMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SafeMathMock {
    return super.attach(address) as SafeMathMock;
  }
  connect(signer: Signer): SafeMathMock__factory {
    return super.connect(signer) as SafeMathMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SafeMathMockInterface {
    return new utils.Interface(_abi) as SafeMathMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SafeMathMock {
    return new Contract(address, _abi, signerOrProvider) as SafeMathMock;
  }
}