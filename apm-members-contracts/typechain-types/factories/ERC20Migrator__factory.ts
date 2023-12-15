/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Migrator, ERC20MigratorInterface } from "../ERC20Migrator";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "newToken_",
        type: "address",
      },
    ],
    name: "beginMigration",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "legacyToken",
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
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "migrateAll",
    outputs: [],
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
    name: "migrate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "newToken",
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
    inputs: [
      {
        name: "legacyToken",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051602080610e3c8339810180604052602081101561003057600080fd5b8101908080519060200190929190505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156100c7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180610e0d602f913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610cf6806101176000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063104d26141461005c57806313155455146100a05780635a8cadb1146100ea578063ad68ebf71461012e578063c42bd05a1461017c575b600080fd5b61009e6004803603602081101561007257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101c6565b005b6100a8610444565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61012c6004803603602081101561010057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061046d565b005b61017a6004803603604081101561014457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610679565b005b610184610858565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461026d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610c006028913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610c75602c913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1663aa271e1a306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561037057600080fd5b505afa158015610384573d6000803e3d6000fd5b505050506040513d602081101561039a57600080fd5b8101908080519060200190929190505050610400576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610c286029913960400191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561050d57600080fd5b505afa158015610521573d6000803e3d6000fd5b505050506040513d602081101561053757600080fd5b8101908080519060200190929190505050905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84306040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b15801561061e57600080fd5b505afa158015610632573d6000803e3d6000fd5b505050506040513d602081101561064857600080fd5b8101908080519060200190929190505050905060006106678383610882565b90506106738482610679565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610721576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610c516024913960400191505060405180910390fd5b61076f8230836000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661089b909392919063ffffffff16565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561081857600080fd5b505af115801561082c573d6000803e3d6000fd5b505050506040513d602081101561084257600080fd5b8101908080519060200190929190505050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008183106108915781610893565b825b905092915050565b61099b848573ffffffffffffffffffffffffffffffffffffffff166323b872dd905060e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506109a1565b50505050565b6109c08273ffffffffffffffffffffffffffffffffffffffff16610bec565b610a32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610a815780518252602082019150602081019050602083039250610a5e565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610ae3576040519150601f19603f3d011682016040523d82523d6000602084013e610ae8565b606091505b509150915081610b60576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b600081511115610be657808060200190516020811015610b7f57600080fd5b8101908080519060200190929190505050610be5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610ca1602a913960400191505060405180910390fd5b5b50505050565b600080823b90506000811191505091905056fe45524332304d69677261746f723a206d6967726174696f6e20616c7265616479207374617274656445524332304d69677261746f723a206e6f742061206d696e74657220666f72206e657720746f6b656e45524332304d69677261746f723a206d6967726174696f6e206e6f74207374617274656445524332304d69677261746f723a206e657720746f6b656e20697320746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a165627a7a723058208e4c95ad3f8c83574b032913e779cda52abefba8d64af5ab8ac57aab887989cd002945524332304d69677261746f723a206c656761637920746f6b656e20697320746865207a65726f2061646472657373";

type ERC20MigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20MigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Migrator__factory extends ContractFactory {
  constructor(...args: ERC20MigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    legacyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Migrator> {
    return super.deploy(legacyToken, overrides || {}) as Promise<ERC20Migrator>;
  }
  getDeployTransaction(
    legacyToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(legacyToken, overrides || {});
  }
  attach(address: string): ERC20Migrator {
    return super.attach(address) as ERC20Migrator;
  }
  connect(signer: Signer): ERC20Migrator__factory {
    return super.connect(signer) as ERC20Migrator__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20MigratorInterface {
    return new utils.Interface(_abi) as ERC20MigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Migrator {
    return new Contract(address, _abi, signerOrProvider) as ERC20Migrator;
  }
}
