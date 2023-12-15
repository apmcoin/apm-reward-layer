/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PullPayment, PullPaymentInterface } from "../PullPayment";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "payee",
        type: "address",
      },
    ],
    name: "withdrawPayments",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "dest",
        type: "address",
      },
    ],
    name: "payments",
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
];

export class PullPayment__factory {
  static readonly abi = _abi;
  static createInterface(): PullPaymentInterface {
    return new utils.Interface(_abi) as PullPaymentInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PullPayment {
    return new Contract(address, _abi, signerOrProvider) as PullPayment;
  }
}
