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
  PostDeliveryCrowdsaleImpl,
  PostDeliveryCrowdsaleImplInterface,
} from "../PostDeliveryCrowdsaleImpl";

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
    constant: false,
    inputs: [
      {
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "withdrawTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "token",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b5060405160a08062001b04833981018060405260a08110156200003357600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050508484848484600160008190555060008311620000f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43726f776473616c653a2072617465206973203000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018062001adf6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141562000200576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018062001abb6024913960400191505060405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505042821015620002e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603381526020018062001a516033913960400191505060405180910390fd5b81811162000341576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603781526020018062001a846037913960400191505060405180910390fd5b816005819055508060068190555050506040516200035f90620003c8565b604051809103906000f0801580156200037c573d6000803e3d6000fd5b50600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505050620003d6565b610623806200142e83390190565b61104880620003e66000396000f3fe60806040526004361061009c5760003560e01c80634b6753bc116100645780634b6753bc146101ac578063521eb273146101d757806370a082311461022e578063b7a8807c14610293578063ec8ac4d8146102be578063fc0c546a146103025761009c565b80631515bc2b146100a75780632c4e722e146100d65780634042b66f1461010157806347535d7b1461012c57806349df728c1461015b575b6100a533610359565b005b3480156100b357600080fd5b506100bc6104b6565b604051808215151515815260200191505060405180910390f35b3480156100e257600080fd5b506100eb6104c2565b6040518082815260200191505060405180910390f35b34801561010d57600080fd5b506101166104cc565b6040518082815260200191505060405180910390f35b34801561013857600080fd5b506101416104d6565b604051808215151515815260200191505060405180910390f35b34801561016757600080fd5b506101aa6004803603602081101561017e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104f1565b005b3480156101b857600080fd5b506101c1610730565b6040518082815260200191505060405180910390f35b3480156101e357600080fd5b506101ec61073a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561023a57600080fd5b5061027d6004803603602081101561025157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610764565b6040518082815260200191505060405180910390f35b34801561029f57600080fd5b506102a86107ad565b6040518082815260200191505060405180910390f35b610300600480360360208110156102d457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610359565b005b34801561030e57600080fd5b506103176107b7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b60016000808282540192505081905550600080549050600034905061037e83826107e1565b600061038982610869565b90506103a08260045461088790919063ffffffff16565b6004819055506103b0848261090f565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051808381526020018281526020019250505060405180910390a361042784836109d4565b61042f6109d8565b6104398483610a43565b505060005481146104b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b5050565b60006006544211905090565b6000600354905090565b6000600454905090565b600060055442101580156104ec57506006544211155b905090565b6104f96104b6565b61054e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610fd26021913960400191505060405180910390fd5b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050600081116105eb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180610f4f6038913960400191505060405180910390fd5b6000600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663beabacc86106766107b7565b84846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561071457600080fd5b505af1158015610728573d6000803e3d6000fd5b505050505050565b6000600654905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600554905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6107e96104d6565b61085b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f54696d656443726f776473616c653a206e6f74206f70656e000000000000000081525060200191505060405180910390fd5b6108658282610a47565b5050565b600061088060035483610b4890919063ffffffff16565b9050919050565b600080828401905083811015610905576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b61096181600760008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461088790919063ffffffff16565b600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109d0600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1682610bce565b5050565b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610a40573d6000803e3d6000fd5b50565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610acd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610fa8602a913960400191505060405180910390fd5b6000811415610b44576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43726f776473616c653a20776569416d6f756e7420697320300000000000000081525060200191505060405180910390fd5b5050565b600080831415610b5b5760009050610bc8565b6000828402905082848281610b6c57fe5b0414610bc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610f876021913960400191505060405180910390fd5b809150505b92915050565b610c1b8282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610c1f9092919063ffffffff16565b5050565b610ceb838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610cf0565b505050565b610d0f8273ffffffffffffffffffffffffffffffffffffffff16610f3b565b610d81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310610dd05780518252602082019150602081019050602083039250610dad565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610e32576040519150601f19603f3d011682016040523d82523d6000602084013e610e37565b606091505b509150915081610eaf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b600081511115610f3557808060200190516020811015610ece57600080fd5b8101908080519060200190929190505050610f34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180610ff3602a913960400191505060405180910390fd5b5b50505050565b600080823b90506000811191505091905056fe506f737444656c697665727943726f776473616c653a2062656e6566696369617279206973206e6f742064756520616e7920746f6b656e73536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7743726f776473616c653a2062656e656669636961727920697320746865207a65726f2061646472657373506f737444656c697665727943726f776473616c653a206e6f7420636c6f7365645361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a165627a7a72305820ec849170aae8b348c41cf99d289b59c4281e0c0df4e8e32ea58c70d56cde18dc00296080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a161054c806100d76000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80632348238c14610046578063beabacc81461008a578063c6dbdf61146100f8575b600080fd5b6100886004803603602081101561005c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610142565b005b6100f6600480360360608110156100a057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610334565b005b6101006104a1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806104f5602c913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561026d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806104cb602a913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f4101e71e974f68df5e9730cc223280b41654676bbb052cdcc735c3337e64d2d96000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146103d9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806104f5602c913960400191505060405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561046057600080fd5b505af1158015610474573d6000803e3d6000fd5b505050506040513d602081101561048a57600080fd5b810190808051906020019092919050505050505050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690509056fe5365636f6e646172793a206e6577207072696d61727920697320746865207a65726f20616464726573735365636f6e646172793a2063616c6c6572206973206e6f7420746865207072696d617279206163636f756e74a165627a7a72305820120dd351b13844183d3b9f84891c77f9c79c778df7d3c0b2c403f554621bed71002954696d656443726f776473616c653a206f70656e696e672074696d65206973206265666f72652063757272656e742074696d6554696d656443726f776473616c653a206f70656e696e672074696d65206973206e6f74206265666f726520636c6f73696e672074696d6543726f776473616c653a20746f6b656e20697320746865207a65726f206164647265737343726f776473616c653a2077616c6c657420697320746865207a65726f2061646472657373";

type PostDeliveryCrowdsaleImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PostDeliveryCrowdsaleImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PostDeliveryCrowdsaleImpl__factory extends ContractFactory {
  constructor(...args: PostDeliveryCrowdsaleImplConstructorParams) {
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
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PostDeliveryCrowdsaleImpl> {
    return super.deploy(
      openingTime,
      closingTime,
      rate,
      wallet,
      token,
      overrides || {}
    ) as Promise<PostDeliveryCrowdsaleImpl>;
  }
  getDeployTransaction(
    openingTime: BigNumberish,
    closingTime: BigNumberish,
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      openingTime,
      closingTime,
      rate,
      wallet,
      token,
      overrides || {}
    );
  }
  attach(address: string): PostDeliveryCrowdsaleImpl {
    return super.attach(address) as PostDeliveryCrowdsaleImpl;
  }
  connect(signer: Signer): PostDeliveryCrowdsaleImpl__factory {
    return super.connect(signer) as PostDeliveryCrowdsaleImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PostDeliveryCrowdsaleImplInterface {
    return new utils.Interface(_abi) as PostDeliveryCrowdsaleImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PostDeliveryCrowdsaleImpl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PostDeliveryCrowdsaleImpl;
  }
}
