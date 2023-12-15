/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignatureBouncerMock,
  SignatureBouncerMockInterface,
} from "../SignatureBouncerMock";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "removeSigner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "onlyWithValidSignatureAndMethod",
    outputs: [],
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
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "checkValidSignature",
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
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "checkValidSignatureAndMethod",
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
    inputs: [
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "onlyWithValidSignature",
    outputs: [],
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
    name: "isSigner",
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
    inputs: [
      {
        name: "",
        type: "bytes",
      },
    ],
    name: "theWrongMethod",
    outputs: [],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "account",
        type: "address",
      },
      {
        name: "",
        type: "bytes",
      },
      {
        name: "",
        type: "uint256",
      },
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "checkValidSignatureAndData",
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
    inputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "signature",
        type: "bytes",
      },
    ],
    name: "onlyWithValidSignatureAndData",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "onlySignerMock",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "tooShortMsgData",
    outputs: [],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "renounceSigner",
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
    name: "addSigner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
    name: "SignerAdded",
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
    name: "SignerRemoved",
    type: "event",
  },
];

const _bytecode =
  "0x60806040526100133361001860201b60201c565b610236565b61003081600061007660201b6111671790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f47d1c22a25bb3a5d4e481b9b1e6944c2eade3181a0a20b495ed61d35b5323f2460405160405180910390a250565b610086828261015760201b60201c565b156100f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156101df576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620018016022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6115bb80620002466000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638263ac0c1161008c578063b44e2ab911610066578063b44e2ab9146107e4578063ca422c43146107ee578063e5c8b03d146107f8578063eb12d61e14610802576100cf565b80638263ac0c146104d0578063997027e81461058b578063b20bdb681461071f576100cf565b80630e316ab7146100d45780636123f7ba1461011857806368b51ac7146101d35780636b802108146102c65780636d5b9427146103b95780637df73e2714610474575b600080fd5b610116600480360360208110156100ea57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610846565b005b6101d16004803603602081101561012e57600080fd5b810190808035906020019064010000000081111561014b57600080fd5b82018360208201111561015d57600080fd5b8035906020019184600183028401116401000000008311171561017f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610852565b005b6102ac600480360360408110156101e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561022657600080fd5b82018360208201111561023857600080fd5b8035906020019184600183028401116401000000008311171561025a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506108b6565b604051808215151515815260200191505060405180910390f35b61039f600480360360408110156102dc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019064010000000081111561031957600080fd5b82018360208201111561032b57600080fd5b8035906020019184600183028401116401000000008311171561034d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506108ca565b604051808215151515815260200191505060405180910390f35b610472600480360360208110156103cf57600080fd5b81019080803590602001906401000000008111156103ec57600080fd5b8201836020820111156103fe57600080fd5b8035906020019184600183028401116401000000008311171561042057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506108de565b005b6104b66004803603602081101561048a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610942565b604051808215151515815260200191505060405180910390f35b610589600480360360208110156104e657600080fd5b810190808035906020019064010000000081111561050357600080fd5b82018360208201111561051557600080fd5b8035906020019184600183028401116401000000008311171561053757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061095f565b005b610705600480360360808110156105a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001906401000000008111156105de57600080fd5b8201836020820111156105f057600080fd5b8035906020019184600183028401116401000000008311171561061257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291908035906020019064010000000081111561067f57600080fd5b82018360208201111561069157600080fd5b803590602001918460018302840111640100000000831117156106b357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610962565b604051808215151515815260200191505060405180910390f35b6107e26004803603604081101561073557600080fd5b81019080803590602001909291908035906020019064010000000081111561075c57600080fd5b82018360208201111561076e57600080fd5b8035906020019184600183028401116401000000008311171561079057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610978565b005b6107ec6109dd565b005b6107f6610a3d565b005b610800610aaf565b005b6108446004803603602081101561081857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610aba565b005b61084f81610b24565b50565b8061085d3382610b30565b6108b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806115206039913960400191505060405180910390fd5b5050565b60006108c28383610ccc565b905092915050565b60006108d68383610b30565b905092915050565b806108e93382610ccc565b61093e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806114f2602e913960400191505060405180910390fd5b5050565b6000610958826000610d6c90919063ffffffff16565b9050919050565b50565b600061096e8583610e4a565b9050949350505050565b806109833382610e4a565b6109d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806115596037913960400191505060405180910390fd5b505050565b6109e633610942565b610a3b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806114c26030913960400191505060405180910390fd5b565b60405180602001604052806000815250610a573382610e4a565b610aac576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806115596037913960400191505060405180910390fd5b50565b610ab833610b24565b565b610ac333610942565b610b18576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806114c26030913960400191505060405180910390fd5b610b2181611048565b50565b610b2d816110a2565b50565b6000606060046040519080825280601f01601f191660200182016040528015610b685781602001600182028038833980820191505090505b50905060008090505b8151811015610bd95760003682818110610b8757fe5b9050013560f81c60f81b828281518110610b9d57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610b71565b50610cc3308583604051602001808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182805190602001908083835b60208310610c805780518252602082019150602081019050602083039250610c5d565b6001836020036101000a038019825116818451168082178552505050505050905001935050505060405160208183030381529060405280519060200120846110fc565b91505092915050565b6000610d643084604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014019250505060405160208183030381529060405280519060200120836110fc565b905092915050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610df3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114a06022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006060600036905011610ea9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061145c6023913960400191505060405180910390fd5b6060806000369050036040519080825280601f01601f191660200182016040528015610ee45781602001600182028038833980820191505090505b50905060008090505b8151811015610f555760003682818110610f0357fe5b9050013560f81c60f81b828281518110610f1957fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053508080600101915050610eed565b5061103f308583604051602001808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140182805190602001908083835b60208310610ffc5780518252602082019150602081019050602083039250610fd9565b6001836020036101000a038019825116818451168082178552505050505050905001935050505060405160208183030381529060405280519060200120846110fc565b91505092915050565b61105c81600061116790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f47d1c22a25bb3a5d4e481b9b1e6944c2eade3181a0a20b495ed61d35b5323f2460405160405180910390a250565b6110b681600061124290919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f3525e22824a8a7df2c9a6029941c824cf95b6447f1e13d5128fd3826d35afe8b60405160405180910390a250565b60008061111a8361110c866112ff565b61135790919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561115e575061115d81610942565b5b91505092915050565b6111718282610d6c565b156111e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61124c8282610d6c565b6112a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061147f6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008160405160200180807f19457468657265756d205369676e6564204d6573736167653a0a333200000000815250601c01828152602001915050604051602081830303815290604052805190602001209050919050565b6000604182511461136b5760009050611455565b60008060006020850151925060408501519150606085015160001a90507f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08260001c11156113bf5760009350505050611455565b601b8160ff16141580156113d75750601c8160ff1614155b156113e85760009350505050611455565b60018682858560405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611445573d6000803e3d6000fd5b5050506020604051035193505050505b9291505056fe5369676e6174757265426f756e6365723a206461746120697320746f6f2073686f7274526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65526f6c65733a206163636f756e7420697320746865207a65726f20616464726573735369676e6572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865205369676e657220726f6c655369676e6174757265426f756e6365723a20696e76616c6964207369676e617475726520666f722063616c6c65725369676e6174757265426f756e6365723a20696e76616c6964207369676e617475726520666f722063616c6c657220616e64206d6574686f645369676e6174757265426f756e6365723a20696e76616c6964207369676e617475726520666f722063616c6c657220616e642064617461a165627a7a72305820b250cece1fc8d54b9087d4734c348f299d194ea070049ef7a53be6c344a100120029526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373";

type SignatureBouncerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignatureBouncerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignatureBouncerMock__factory extends ContractFactory {
  constructor(...args: SignatureBouncerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBouncerMock> {
    return super.deploy(overrides || {}) as Promise<SignatureBouncerMock>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SignatureBouncerMock {
    return super.attach(address) as SignatureBouncerMock;
  }
  connect(signer: Signer): SignatureBouncerMock__factory {
    return super.connect(signer) as SignatureBouncerMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureBouncerMockInterface {
    return new utils.Interface(_abi) as SignatureBouncerMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureBouncerMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SignatureBouncerMock;
  }
}