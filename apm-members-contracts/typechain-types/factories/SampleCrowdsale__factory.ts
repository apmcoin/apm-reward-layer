/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SampleCrowdsale,
  SampleCrowdsaleInterface,
} from "../SampleCrowdsale";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "hasClosed",
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
    inputs: [],
    name: "rate",
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
    name: "cap",
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
    name: "goal",
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
    name: "weiRaised",
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
    name: "isOpen",
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
    inputs: [],
    name: "closingTime",
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
    name: "finalize",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "capReached",
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
    inputs: [],
    name: "wallet",
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
    name: "goalReached",
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
    inputs: [],
    name: "finalized",
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
    inputs: [],
    name: "openingTime",
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
        name: "refundee",
        type: "address",
      },
    ],
    name: "claimRefund",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "buyTokens",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "token",
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
        name: "openingTime",
        type: "uint256",
      },
      {
        name: "closingTime",
        type: "uint256",
      },
      {
        name: "rate",
        type: "uint256",
      },
      {
        name: "wallet",
        type: "address",
      },
      {
        name: "cap",
        type: "uint256",
      },
      {
        name: "token",
        type: "address",
      },
      {
        name: "goal",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [],
    name: "CrowdsaleFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "prevClosingTime",
        type: "uint256",
      },
      {
        indexed: false,
        name: "newClosingTime",
        type: "uint256",
      },
    ],
    name: "TimedCrowdsaleExtended",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "purchaser",
        type: "address",
      },
      {
        indexed: true,
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensPurchased",
    type: "event",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405160e08062002a9d833981018060405260e08110156200003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050508087878588888760016000819055506000831162000106576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43726f776473616c653a2072617465206973203000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200018e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062002a786025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000216576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018062002a2b6024913960400191505060405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506000811162000319576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43617070656443726f776473616c653a2063617020697320300000000000000081525060200191505060405180910390fd5b8060058190555050428210156200037c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180620029c16033913960400191505060405180910390fd5b818111620003d6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180620029f46037913960400191505060405180910390fd5b816006819055508060078190555050506000600860006101000a81548160ff0219169083151502179055506000811162000478576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f526566756e6461626c6543726f776473616c653a20676f616c2069732030000081525060200191505060405180910390fd5b620004886200059a60201b60201c565b6040516200049690620005c4565b808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050604051809103906000f080158015620004e9573d6000803e3d6000fd5b50600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060098190555050828111156200058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602981526020018062002a4f6029913960400191505060405180910390fd5b50505050505050620005d2565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6112b4806200170d83390190565b61112b80620005e26000396000f3fe6080604052600436106100f35760003560e01c80634f9359451161008a578063b7a8807c11610059578063b7a8807c1461032e578063bffa55d514610359578063ec8ac4d8146103aa578063fc0c546a146103ee576100f3565b80634f9359451461024a578063521eb273146102795780637d3d6522146102d0578063b3f05b97146102ff576100f3565b80634042b66f116100c65780634042b66f146101ae57806347535d7b146101d95780634b6753bc146102085780634bb278f314610233576100f3565b80631515bc2b146100fe5780632c4e722e1461012d578063355274ea146101585780634019388314610183575b6100fc33610445565b005b34801561010a57600080fd5b506101136105a2565b604051808215151515815260200191505060405180910390f35b34801561013957600080fd5b506101426105ae565b6040518082815260200191505060405180910390f35b34801561016457600080fd5b5061016d6105b8565b6040518082815260200191505060405180910390f35b34801561018f57600080fd5b506101986105c2565b6040518082815260200191505060405180910390f35b3480156101ba57600080fd5b506101c36105cc565b6040518082815260200191505060405180910390f35b3480156101e557600080fd5b506101ee6105d6565b604051808215151515815260200191505060405180910390f35b34801561021457600080fd5b5061021d6105f1565b6040518082815260200191505060405180910390f35b34801561023f57600080fd5b506102486105fb565b005b34801561025657600080fd5b5061025f61072c565b604051808215151515815260200191505060405180910390f35b34801561028557600080fd5b5061028e610740565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102dc57600080fd5b506102e561076a565b604051808215151515815260200191505060405180910390f35b34801561030b57600080fd5b5061031461077e565b604051808215151515815260200191505060405180910390f35b34801561033a57600080fd5b50610343610795565b6040518082815260200191505060405180910390f35b34801561036557600080fd5b506103a86004803603602081101561037c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079f565b005b6103ec600480360360208110156103c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610445565b005b3480156103fa57600080fd5b50610403610916565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60016000808282540192505081905550600080549050600034905061046a8382610940565b6000610475826109c8565b905061048c826004546109e690919063ffffffff16565b60048190555061049c8482610a6e565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051808381526020018281526020019250505060405180910390a36105138483610a7c565b61051b610a80565b6105258483610b3c565b5050600054811461059e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b5050565b60006007544211905090565b6000600354905090565b6000600554905090565b6000600954905090565b6000600454905090565b600060065442101580156105ec57506007544211155b905090565b6000600754905090565b600860009054906101000a900460ff1615610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602781526020018061106c6027913960400191505060405180910390fd5b6106696105a2565b6106db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f46696e616c697a61626c6543726f776473616c653a206e6f7420636c6f73656481525060200191505060405180910390fd5b6001600860006101000a81548160ff0219169083151502179055506106fe610b40565b7f9270cc390c096600a1c17c44345a1ba689fafd99d97487b10cfccf86cf73183660405160405180910390a1565b60006005546107396105cc565b1015905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006009546107776105cc565b1015905090565b6000600860009054906101000a900460ff16905090565b6000600654905090565b6107a761077e565b6107fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806110de6022913960400191505060405180910390fd5b61080461076a565b1561085a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806110936021913960400191505060405180910390fd5b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166351cff8d9826040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b1580156108fb57600080fd5b505af115801561090f573d6000803e3d6000fd5b5050505050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6109486105d6565b6109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f54696d656443726f776473616c653a206e6f74206f70656e000000000000000081525060200191505060405180910390fd5b6109c48282610ce3565b5050565b60006109df60035483610d8290919063ffffffff16565b9050919050565b600080828401905083811015610a64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b610a788282610e08565b5050565b5050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f340fa0134336040518363ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019150506000604051808303818588803b158015610b2157600080fd5b505af1158015610b35573d6000803e3d6000fd5b5050505050565b5050565b610b4861076a565b15610c5657600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166343d726d66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610bb757600080fd5b505af1158015610bcb573d6000803e3d6000fd5b50505050600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639af6549a6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610c3957600080fd5b505af1158015610c4d573d6000803e3d6000fd5b50505050610cd9565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638c52dc416040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610cc057600080fd5b505af1158015610cd4573d6000803e3d6000fd5b505050505b610ce1610f47565b565b610ced8282610f49565b600554610d0a82610cfc6105cc565b6109e690919063ffffffff16565b1115610d7e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f43617070656443726f776473616c653a2063617020657863656564656400000081525060200191505060405180910390fd5b5050565b600080831415610d955760009050610e02565b6000828402905082848281610da657fe5b0414610dfd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061104b6021913960400191505060405180910390fd5b809150505b92915050565b610e10610916565b73ffffffffffffffffffffffffffffffffffffffff166340c10f1983836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b158015610e9657600080fd5b505af1158015610eaa573d6000803e3d6000fd5b505050506040513d6020811015610ec057600080fd5b8101908080519060200190929190505050610f43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f4d696e74656443726f776473616c653a206d696e74696e67206661696c65640081525060200191505060405180910390fd5b5050565b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fcf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806110b4602a913960400191505060405180910390fd5b6000811415611046576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43726f776473616c653a20776569416d6f756e7420697320300000000000000081525060200191505060405180910390fd5b505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7746696e616c697a61626c6543726f776473616c653a20616c72656164792066696e616c697a6564526566756e6461626c6543726f776473616c653a20676f616c207265616368656443726f776473616c653a2062656e656669636961727920697320746865207a65726f2061646472657373526566756e6461626c6543726f776473616c653a206e6f742066696e616c697a6564a165627a7a723058207d73dccc5fd470b59e8d9d7c54f82642fd6cffae20231515e14aa2d9a4b332880029608060405234801561001057600080fd5b506040516020806112b48339810180604052602081101561003057600080fd5b8101908080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561018b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611287602d913960400191505060405180910390fd5b80600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600260006101000a81548160ff021916908360028111156101eb57fe5b021790555050611087806102006000396000f3fe60806040526004361061009c5760003560e01c80638c52dc41116100645780638c52dc411461021a5780639af6549a14610231578063c19d93fb14610248578063c6dbdf6114610281578063e3a9db1a146102d8578063f340fa011461033d5761009c565b80632348238c146100a157806338af3eed146100f257806343d726d61461014957806351cff8d914610160578063685ca194146101b1575b600080fd5b3480156100ad57600080fd5b506100f0600480360360208110156100c457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610381565b005b3480156100fe57600080fd5b50610107610573565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015557600080fd5b5061015e61059d565b005b34801561016c57600080fd5b506101af6004803603602081101561018357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610711565b005b3480156101bd57600080fd5b50610200600480360360208110156101d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061077b565b604051808215151515815260200191505060405180910390f35b34801561022657600080fd5b5061022f6107ad565b005b34801561023d57600080fd5b50610246610922565b005b34801561025457600080fd5b5061025d610a21565b6040518082600281111561026d57fe5b60ff16815260200191505060405180910390f35b34801561028d57600080fd5b50610296610a38565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e457600080fd5b50610327600480360360208110156102fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a61565b6040518082815260200191505060405180910390f35b61037f6004803603602081101561035357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aaa565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610426576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ffe602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156104ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610fd4602a913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610642576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ffe602c913960400191505060405180910390fd5b6000600281111561064f57fe5b600260009054906101000a900460ff16600281111561066a57fe5b146106c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526029815260200180610fab6029913960400191505060405180910390fd5b60028060006101000a81548160ff021916908360028111156106de57fe5b02179055507f088672c3a6e342f7cd94a65ba63b79df24a8973927b4d05d803c44bbf787d12f60405160405180910390a1565b61071a8161077b565b61076f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180610f786033913960400191505060405180910390fd5b61077881610b34565b50565b60006001600281111561078a57fe5b600260009054906101000a900460ff1660028111156107a557fe5b149050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610852576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ffe602c913960400191505060405180910390fd5b6000600281111561085f57fe5b600260009054906101000a900460ff16600281111561087a57fe5b146108d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061102a6032913960400191505060405180910390fd5b6001600260006101000a81548160ff021916908360028111156108ef57fe5b02179055507f599d8e5a83cffb867d051598c4d70e805d59802d8081c1c7d6dffc5b6aca2b8960405160405180910390a1565b60028081111561092e57fe5b600260009054906101000a900460ff16600281111561094957fe5b1461099f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180610f156038913960400191505060405180910390fd5b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc3073ffffffffffffffffffffffffffffffffffffffff16319081150290604051600060405180830381858888f19350505050158015610a1e573d6000803e3d6000fd5b50565b6000600260009054906101000a900460ff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006002811115610ab757fe5b600260009054906101000a900460ff166002811115610ad257fe5b14610b28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610f4d602b913960400191505060405180910390fd5b610b3181610cfb565b50565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610bd9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ffe602c913960400191505060405180910390fd5b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610ca8573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5826040518082815260200191505060405180910390a25050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610da0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180610ffe602c913960400191505060405180910390fd5b6000349050610df781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e8c90919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c4826040518082815260200191505060405180910390a25050565b600080828401905083811015610f0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b809150509291505056fe526566756e64457363726f773a2062656e65666963696172792063616e206f6e6c79207769746864726177207768696c6520636c6f736564526566756e64457363726f773a2063616e206f6e6c79206465706f736974207768696c6520616374697665436f6e646974696f6e616c457363726f773a207061796565206973206e6f7420616c6c6f77656420746f207769746864726177526566756e64457363726f773a2063616e206f6e6c7920636c6f7365207768696c65206163746976655365636f6e646172793a206e6577207072696d61727920697320746865207a65726f20616464726573735365636f6e646172793a2063616c6c6572206973206e6f7420746865207072696d617279206163636f756e74526566756e64457363726f773a2063616e206f6e6c7920656e61626c6520726566756e6473207768696c6520616374697665a165627a7a723058201bcd61294a9631cf2d4c4d9efc23543d563756bf31643024c3fd307aa3a67be60029526566756e64457363726f773a2062656e656669636961727920697320746865207a65726f206164647265737354696d656443726f776473616c653a206f70656e696e672074696d65206973206265666f72652063757272656e742074696d6554696d656443726f776473616c653a206f70656e696e672074696d65206973206e6f74206265666f726520636c6f73696e672074696d6543726f776473616c653a20746f6b656e20697320746865207a65726f206164647265737353616d706c6543726f776453616c653a20676f616c2069732067726561746572207468616e2063617043726f776473616c653a2077616c6c657420697320746865207a65726f2061646472657373";

type SampleCrowdsaleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SampleCrowdsaleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SampleCrowdsale__factory extends ContractFactory {
  constructor(...args: SampleCrowdsaleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    openingTime: BigNumberish,
    closingTime: BigNumberish,
    rate: BigNumberish,
    wallet: string,
    cap: BigNumberish,
    token: string,
    goal: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SampleCrowdsale> {
    return super.deploy(
      openingTime,
      closingTime,
      rate,
      wallet,
      cap,
      token,
      goal,
      overrides || {}
    ) as Promise<SampleCrowdsale>;
  }
  getDeployTransaction(
    openingTime: BigNumberish,
    closingTime: BigNumberish,
    rate: BigNumberish,
    wallet: string,
    cap: BigNumberish,
    token: string,
    goal: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      openingTime,
      closingTime,
      rate,
      wallet,
      cap,
      token,
      goal,
      overrides || {}
    );
  }
  attach(address: string): SampleCrowdsale {
    return super.attach(address) as SampleCrowdsale;
  }
  connect(signer: Signer): SampleCrowdsale__factory {
    return super.connect(signer) as SampleCrowdsale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SampleCrowdsaleInterface {
    return new utils.Interface(_abi) as SampleCrowdsaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SampleCrowdsale {
    return new Contract(address, _abi, signerOrProvider) as SampleCrowdsale;
  }
}
