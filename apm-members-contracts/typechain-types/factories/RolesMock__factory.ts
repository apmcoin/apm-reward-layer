/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RolesMock, RolesMockInterface } from "../RolesMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
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
    name: "has",
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
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061045a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630a3b0a4f1461004657806321887c3d1461008a57806329092d0e146100e6575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061012a565b005b6100cc600480360360208110156100a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610141565b604051808215151515815260200191505060405180910390f35b610128600480360360208110156100fc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061015e565b005b61013e81600061017590919063ffffffff16565b50565b600061015782600061025090919063ffffffff16565b9050919050565b61017281600061032e90919063ffffffff16565b50565b61017f8282610250565b156101f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156102d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061040d6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6103388282610250565b61038d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806103ec6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a723058209e0a7aa9f76e3864adeb2d92aee26d55353f2c744e802d77223e514fcf95715d0029";

type RolesMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RolesMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RolesMock__factory extends ContractFactory {
  constructor(...args: RolesMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RolesMock> {
    return super.deploy(overrides || {}) as Promise<RolesMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RolesMock {
    return super.attach(address) as RolesMock;
  }
  connect(signer: Signer): RolesMock__factory {
    return super.connect(signer) as RolesMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesMockInterface {
    return new utils.Interface(_abi) as RolesMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RolesMock {
    return new Contract(address, _abi, signerOrProvider) as RolesMock;
  }
}