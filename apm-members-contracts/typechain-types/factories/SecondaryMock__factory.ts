/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SecondaryMock, SecondaryMockInterface } from "../SecondaryMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "recipient",
        type: "address",
      },
    ],
    name: "transferPrimary",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "onlyPrimaryMock",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "primary",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "recipient",
        type: "address",
      },
    ],
    name: "PrimaryTransferred",
    type: "event",
  },
];

const _bytecode =
  "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1610422806100d76000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632348238c14610046578063846224251461008a578063c6dbdf6114610094575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506100de565b005b6100926102d0565b005b61009c610377565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610183576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806103cb602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610209576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806103a1602a913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806103cb602c913960400191505060405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509056fe5365636f6e646172793a206e6577207072696d61727920697320746865207a65726f20616464726573735365636f6e646172793a2063616c6c6572206973206e6f7420746865207072696d617279206163636f756e74a165627a7a72305820eec47dc206eb4cb36af0305171cbbed503695501d6f29407b8c59f0b756ba27b0029";

type SecondaryMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SecondaryMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SecondaryMock__factory extends ContractFactory {
  constructor(...args: SecondaryMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SecondaryMock> {
    return super.deploy(overrides || {}) as Promise<SecondaryMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SecondaryMock {
    return super.attach(address) as SecondaryMock;
  }
  connect(signer: Signer): SecondaryMock__factory {
    return super.connect(signer) as SecondaryMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SecondaryMockInterface {
    return new utils.Interface(_abi) as SecondaryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SecondaryMock {
    return new Contract(address, _abi, signerOrProvider) as SecondaryMock;
  }
}
