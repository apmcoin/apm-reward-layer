/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ManagerRole, ManagerRoleInterface } from "../ManagerRole";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "addManager",
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
    ],
    name: "removeManager",
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
    name: "isManager",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "account",
        type: "address",
      },
    ],
    name: "ManagerAdded",
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
    name: "ManagerRemoved",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105e4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632d06177a14610046578063ac18de431461008a578063f3ae2415146100ce575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061012a565b005b6100cc600480360360208110156100a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101ed565b005b610110600480360360208110156100e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102b0565b604051808215151515815260200191505060405180910390f35b61013e3360006102cd90919063ffffffff16565b610193576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806105656032913960400191505060405180910390fd5b6101a78160006103ab90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f3b4a40cccf2058c593542587329dd385be4f0b588db5471fbd9598e56dd7093a60405160405180910390a250565b6102013360006102cd90919063ffffffff16565b610256576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806105656032913960400191505060405180910390fd5b61026a81600061048690919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fef69f7d97228658c92417be1b16b19058315de71fecb435d07b7d23728b6bd3160405160405180910390a250565b60006102c68260006102cd90919063ffffffff16565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610354576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806105976022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6103b582826102cd565b15610428576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61049082826102cd565b6104e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806105446021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654d616e61676572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d616e6167657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a72305820248e4d002cd21cfa0841e7761f6b96f9adfc1580044fe6cd6f45c775e4f34e100029";

type ManagerRoleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerRoleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ManagerRole__factory extends ContractFactory {
  constructor(...args: ManagerRoleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ManagerRole> {
    return super.deploy(overrides || {}) as Promise<ManagerRole>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ManagerRole {
    return super.attach(address) as ManagerRole;
  }
  connect(signer: Signer): ManagerRole__factory {
    return super.connect(signer) as ManagerRole__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerRoleInterface {
    return new utils.Interface(_abi) as ManagerRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ManagerRole {
    return new Contract(address, _abi, signerOrProvider) as ManagerRole;
  }
}
