/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CountersImpl, CountersImplInterface } from "../CountersImpl";

const _abi = [
  {
    constant: false,
    inputs: [],
    name: "decrement",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "current",
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
    inputs: [],
    name: "increment",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061019d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632baeceb7146100465780639fa6a6e314610050578063d09de08a1461006e575b600080fd5b61004e610078565b005b610058610084565b6040518082815260200191505060405180910390f35b610076610095565b005b61008260006100a1565b565b600061009060006100c4565b905090565b61009f60006100d2565b565b6100b9600182600001546100e890919063ffffffff16565b816000018190555050565b600081600001549050919050565b6001816000016000828254019250508190555050565b600082821115610160576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b60008284039050809150509291505056fea165627a7a723058209c4ab46f48ffb988059c191992ae3d1f81de818a2f7116ab56fa2df054d6ace30029";

type CountersImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CountersImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CountersImpl__factory extends ContractFactory {
  constructor(...args: CountersImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CountersImpl> {
    return super.deploy(overrides || {}) as Promise<CountersImpl>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CountersImpl {
    return super.attach(address) as CountersImpl;
  }
  connect(signer: Signer): CountersImpl__factory {
    return super.connect(signer) as CountersImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CountersImplInterface {
    return new utils.Interface(_abi) as CountersImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CountersImpl {
    return new Contract(address, _abi, signerOrProvider) as CountersImpl;
  }
}
