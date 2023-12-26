/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { UserFactory, UserFactoryInterface } from "../UserFactory";

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
    constant: true,
    inputs: [
      {
        name: "userId",
        type: "bytes32",
      },
    ],
    name: "getUserCA",
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
        name: "userIds",
        type: "bytes32[]",
      },
    ],
    name: "createBulkUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "userId",
        type: "bytes32",
      },
    ],
    name: "removeUser",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "userId",
        type: "bytes32",
      },
    ],
    name: "hasUserCA",
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
        name: "userId",
        type: "bytes32",
      },
    ],
    name: "createUser",
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
    inputs: [],
    name: "getUserCount",
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
        name: "userId",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "userCA",
        type: "address",
      },
    ],
    name: "UserCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "userId",
        type: "bytes32",
      },
    ],
    name: "UserRemoved",
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
  "0x6080604052600060025561002133600061002660201b610b461790919060201c565b6101e5565b610036828261010760201b60201c565b156100a9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561018e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611e2d6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611c39806101f46000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806388385664116100665780638838566414610230578063abf7bfd814610276578063ac18de43146102a4578063b5cb15f7146102e8578063f3ae24151461030657610093565b80632d06177a146100985780633c08763b146100dc578063486dc8501461014a5780635a9054d814610202575b600080fd5b6100da600480360360208110156100ae57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610362565b005b610108600480360360208110156100f257600080fd5b8101908080359060200190929190505050610425565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102006004803603602081101561016057600080fd5b810190808035906020019064010000000081111561017d57600080fd5b82018360208201111561018f57600080fd5b803590602001918460208302840111640100000000831117156101b157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f820116905080830192505050505050509192919290505050610462565b005b61022e6004803603602081101561021857600080fd5b810190808035906020019092919050505061049e565b005b61025c6004803603602081101561024657600080fd5b81019080803590602001909291905050506106d5565b604051808215151515815260200191505060405180910390f35b6102a26004803603602081101561028c57600080fd5b810190808035906020019092919050505061074f565b005b6102e6600480360360208110156102ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061097e565b005b6102f0610a41565b6040518082815260200191505060405180910390f35b6103486004803603602081101561031c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a4b565b604051808215151515815260200191505060405180910390f35b610376336000610a6890919063ffffffff16565b6103cb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611bba6032913960400191505060405180910390fd5b6103df816000610b4690919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f3b4a40cccf2058c593542587329dd385be4f0b588db5471fbd9598e56dd7093a60405160405180910390a250565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60008090505b815181101561049a5761048d82828151811061048057fe5b602002602001015161074f565b8080600101915050610468565b5050565b6104b2336000610a6890919063ffffffff16565b610507576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611bba6032913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156105c0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611b766023913960400191505060405180910390fd5b6001600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166383197ef06040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561063b57600080fd5b505af115801561064f573d6000803e3d6000fd5b505050506001600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905561069f6001600254610c2190919063ffffffff16565b600281905550807fa93796be3e2308b3f9614f44a3675cabfe46b3f799e867359bb1c3bdd7ec1cb060405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff166001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610745576000610748565b60015b9050919050565b610763336000610a6890919063ffffffff16565b6107b8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611bba6032913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610870576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611b546022913960400191505060405180910390fd5b60008160405161087f90610def565b80828152602001915050604051809103906000f0801580156108a5573d6000803e3d6000fd5b509050806001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506109106001600254610caa90919063ffffffff16565b600281905550817fc3255cfde9a7a1cd889cf998a48506b2719cb1312ff3879b5722f24c21708ef382604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25050565b610992336000610a6890919063ffffffff16565b6109e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180611bba6032913960400191505060405180910390fd5b6109fb816000610d3290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fef69f7d97228658c92417be1b16b19058315de71fecb435d07b7d23728b6bd3160405160405180910390a250565b6000600254905090565b6000610a61826000610a6890919063ffffffff16565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610aef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611bec6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610b508282610a68565b15610bc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600082821115610c99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015610d28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b610d3c8282610a68565b610d91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180611b996021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610d5780610dfd8339019056fe608060405234801561001057600080fd5b50604051602080610d578339810180604052602081101561003057600080fd5b810190808051906020019092919050505061005933600061008160201b6108ad1790919060201c565b806001819055506001600260006101000a81548160ff02191690831515021790555050610240565b610091828261016260201b60201c565b15610104576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156101e9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610d356022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610ae68061024f6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806358c273b21161006657806358c273b21461014a57806383197ef014610182578063ac18de431461018c578063e9f998ce146101d0578063f3ae24151461021257610093565b806322f3e2d4146100985780632d06177a146100ba5780632ebcb653146100fe5780633383f0f71461011c575b600080fd5b6100a061026e565b604051808215151515815260200191505060405180910390f35b6100fc600480360360208110156100d057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610285565b005b610106610348565b6040518082815260200191505060405180910390f35b6101486004803603602081101561013257600080fd5b8101908080359060200190929190505050610352565b005b6101806004803603604081101561016057600080fd5b81019080803590602001909291908035906020019092919050505061047b565b005b61018a6105a6565b005b6101ce600480360360208110156101a257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062c565b005b6101fc600480360360208110156101e657600080fd5b81019080803590602001909291905050506106ef565b6040518082815260200191505060405180910390f35b6102546004803603602081101561022857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b2565b604051808215151515815260200191505060405180910390f35b6000600260009054906101000a900460ff16905090565b6102993360006107cf90919063ffffffff16565b6102ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610a676032913960400191505060405180910390fd5b6103028160006108ad90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f3b4a40cccf2058c593542587329dd385be4f0b588db5471fbd9598e56dd7093a60405160405180910390a250565b6000600154905090565b6103663360006107cf90919063ffffffff16565b6103bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610a676032913960400191505060405180910390fd5b600260009054906101000a900460ff1661043d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4162737472616374557365723a2075736572206e6f742061637469766500000081525060200191505060405180910390fd5b60036000600260009054906101000a900460ff1615151515815260200190815260200160002060008281526020019081526020016000206000905550565b61048f3360006107cf90919063ffffffff16565b6104e4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610a676032913960400191505060405180910390fd5b600260009054906101000a900460ff16610566576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4162737472616374557365723a2075736572206e6f742061637469766500000081525060200191505060405180910390fd5b8060036000600260009054906101000a900460ff161515151581526020019081526020016000206000848152602001908152602001600020819055505050565b6105ba3360006107cf90919063ffffffff16565b61060f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610a676032913960400191505060405180910390fd5b6000600260006101000a81548160ff021916908315150217905550565b6106403360006107cf90919063ffffffff16565b610695576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610a676032913960400191505060405180910390fd5b6106a981600061098890919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fef69f7d97228658c92417be1b16b19058315de71fecb435d07b7d23728b6bd3160405160405180910390a250565b6000600260009054906101000a900460ff16610773576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f4162737472616374557365723a2075736572206e6f742061637469766500000081525060200191505060405180910390fd5b60036000600260009054906101000a900460ff161515151581526020019081526020016000206000838152602001908152602001600020549050919050565b60006107c88260006107cf90919063ffffffff16565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610856576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610a996022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6108b782826107cf565b1561092a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61099282826107cf565b6109e7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610a466021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654d616e61676572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d616e6167657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a723058209d61af8a30af9fe54a2898fb0dd7bf0a76a3e517b0e21584b44690bd2ae4e0c10029526f6c65733a206163636f756e7420697320746865207a65726f206164647265737355736572466163746f72793a2075736572496420616c72656164792065786973747355736572466163746f72793a2075736572496420646f6573206e6f7420657869737473526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654d616e61676572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d616e6167657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a723058204d5003df31d5c92dfa25846b3a0304eec1e856ee85d433335cce017394ed9e370029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type UserFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserFactory__factory extends ContractFactory {
  constructor(...args: UserFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserFactory> {
    return super.deploy(overrides || {}) as Promise<UserFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserFactory {
    return super.attach(address) as UserFactory;
  }
  connect(signer: Signer): UserFactory__factory {
    return super.connect(signer) as UserFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserFactoryInterface {
    return new utils.Interface(_abi) as UserFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserFactory {
    return new Contract(address, _abi, signerOrProvider) as UserFactory;
  }
}
