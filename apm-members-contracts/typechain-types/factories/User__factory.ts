/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BytesLike,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { User, UserInterface } from "../User";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "managerContract",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "userId",
    outputs: [
      {
        name: "",
        type: "bytes32",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "userInventory",
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
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "addItemToInventory",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "itemId",
        type: "uint256",
      },
    ],
    name: "checkInventory",
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
    inputs: [
      {
        name: "_userId",
        type: "bytes32",
      },
      {
        name: "_managerContract",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405160408061043f8339810180604052604081101561003057600080fd5b8101908080519060200190929190805190602001909291905050508160008190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505061039b806100a46000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632710ac801461005c57806358975919146100a657806375740f37146100c4578063ce6004e51461010a578063e9f998ce14610138575b600080fd5b61006461017e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6100ae6101a4565b6040518082815260200191505060405180910390f35b6100f0600480360360208110156100da57600080fd5b81019080803590602001909291905050506101aa565b604051808215151515815260200191505060405180910390f35b6101366004803603602081101561012057600080fd5b81019080803590602001909291905050506101ca565b005b6101646004803603602081101561014e57600080fd5b8101908080359060200190929190505050610345565b604051808215151515815260200191505060405180910390f35b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60005481565b60026020528060005260406000206000915054906101000a900460ff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3ae2415336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561026957600080fd5b505afa15801561027d573d6000803e3d6000fd5b505050506040513d602081101561029357600080fd5b8101908080519060200190929190505050610316576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f557365723a2063616c6c6572206973206e6f7461206d616e616765720000000081525060200191505060405180910390fd5b60016002600083815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60006002600083815260200190815260200160002060009054906101000a900460ff16905091905056fea165627a7a7230582084478f94a3d49360566988f7d4ae06ee8e837886343e00e4d80bd6de69ea1a120029";

type UserConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class User__factory extends ContractFactory {
  constructor(...args: UserConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _userId: BytesLike,
    _managerContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<User> {
    return super.deploy(
      _userId,
      _managerContract,
      overrides || {}
    ) as Promise<User>;
  }
  getDeployTransaction(
    _userId: BytesLike,
    _managerContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _userId,
      _managerContract,
      overrides || {}
    );
  }
  attach(address: string): User {
    return super.attach(address) as User;
  }
  connect(signer: Signer): User__factory {
    return super.connect(signer) as User__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserInterface {
    return new utils.Interface(_abi) as UserInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): User {
    return new Contract(address, _abi, signerOrProvider) as User;
  }
}