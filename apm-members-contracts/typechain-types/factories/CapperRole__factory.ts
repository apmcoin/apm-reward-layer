/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { CapperRole, CapperRoleInterface } from "../CapperRole";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "isCapper",
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
    inputs: [],
    name: "renounceCapper",
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
    name: "addCapper",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "CapperAdded",
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
    name: "CapperRemoved",
    type: "event",
  },
];

export class CapperRole__factory {
  static readonly abi = _abi;
  static createInterface(): CapperRoleInterface {
    return new utils.Interface(_abi) as CapperRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CapperRole {
    return new Contract(address, _abi, signerOrProvider) as CapperRole;
  }
}
