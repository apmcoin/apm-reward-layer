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
  IndividuallyCappedCrowdsaleImpl,
  IndividuallyCappedCrowdsaleImplInterface,
} from "../IndividuallyCappedCrowdsaleImpl";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getContribution",
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
    inputs: [
      {
        name: "account",
        type: "address",
      },
    ],
    name: "removeCapper",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
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
        name: "beneficiary",
        type: "address",
      },
      {
        name: "cap",
        type: "uint256",
      },
    ],
    name: "setCap",
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
    constant: true,
    inputs: [
      {
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getCap",
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
    name: "onlyCapperMock",
    outputs: [],
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
  "0x60806040523480156200001157600080fd5b50604051606080620019e7833981018060405260608110156200003357600080fd5b81019080805190602001909291908051906020019092919080519060200190929190505050828282600160008190555060008311620000da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f43726f776473616c653a2072617465206973203000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000162576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180620019c26025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620001ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806200197c6024913960400191505060405180910390fd5b8260038190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505062000287336200029060201b60201c565b505050620004b5565b620002ab816005620002f160201b62000ea51790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167fa7555c95b69d4f5cc847881feb4ab2883a1921319e34fa2043747b793d65b36e60405160405180910390a250565b620003038282620003d560201b60201c565b1562000377576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200045e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620019a06022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6114b780620004c56000396000f3fe6080604052600436106100c25760003560e01c80635d5576f81161007f578063b3aefb7511610059578063b3aefb751461035c578063d1e07bcb146103c1578063ec8ac4d8146103d8578063fc0c546a1461041c576100c2565b80635d5576f81461029957806380ad2cf3146102b05780638dfbcf361461030b576100c2565b806321eff7fc146100cd5780632c4e722e14610132578063395645611461015d5780633f4a6484146101c65780634042b66f14610217578063521eb27314610242575b6100cb33610473565b005b3480156100d957600080fd5b5061011c600480360360208110156100f057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105d0565b6040518082815260200191505060405180910390f35b34801561013e57600080fd5b50610147610619565b6040518082815260200191505060405180910390f35b34801561016957600080fd5b506101ac6004803603602081101561018057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610623565b604051808215151515815260200191505060405180910390f35b3480156101d257600080fd5b50610215600480360360208110156101e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610640565b005b34801561022357600080fd5b5061022c61064c565b6040518082815260200191505060405180910390f35b34801561024e57600080fd5b50610257610656565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102a557600080fd5b506102ae610680565b005b3480156102bc57600080fd5b50610309600480360360408110156102d357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061068b565b005b34801561031757600080fd5b5061035a6004803603602081101561032e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610731565b005b34801561036857600080fd5b506103ab6004803603602081101561037f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079b565b6040518082815260200191505060405180910390f35b3480156103cd57600080fd5b506103d66107e4565b005b61041a600480360360208110156103ee57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610473565b005b34801561042857600080fd5b50610431610844565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600160008082825401925050819055506000805490506000349050610498838261086e565b60006104a382610965565b90506104ba8260045461098390919063ffffffff16565b6004819055506104ca8482610a0b565b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f6faf93231a456e552dbc9961f58d9713ee4f2e69d15f1975b050ef0911053a7b8484604051808381526020018281526020019250505060405180910390a36105418483610a19565b610549610abc565b6105538483610b27565b505060005481146105cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b5050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600354905090565b6000610639826005610b2b90919063ffffffff16565b9050919050565b61064981610c09565b50565b6000600454905090565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61068933610c09565b565b61069433610623565b6106e9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061145c6030913960400191505060405180910390fd5b80600760008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b61073a33610623565b61078f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061145c6030913960400191505060405180910390fd5b61079881610c15565b50565b6000600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107ed33610623565b610842576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603081526020018061145c6030913960400191505060405180910390fd5b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108788282610c6f565b600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461090a82600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098390919063ffffffff16565b1115610961576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806113fb6037913960400191505060405180910390fd5b5050565b600061097c60035483610d7090919063ffffffff16565b9050919050565b600080828401905083811015610a01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b610a158282610df6565b5050565b610a238282610e47565b610a7581600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461098390919063ffffffff16565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610b24573d6000803e3d6000fd5b50565b5050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bb2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806113af6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610c1281610e4b565b50565b610c29816005610ea590919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fa7555c95b69d4f5cc847881feb4ab2883a1921319e34fa2043747b793d65b36e60405160405180910390a250565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cf5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806113d1602a913960400191505060405180910390fd5b6000811415610d6c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43726f776473616c653a20776569416d6f756e7420697320300000000000000081525060200191505060405180910390fd5b5050565b600080831415610d835760009050610df0565b6000828402905082848281610d9457fe5b0414610deb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061138e6021913960400191505060405180910390fd5b809150505b92915050565b610e438282600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16610f809092919063ffffffff16565b5050565b5050565b610e5f81600561105190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f427400d279c506df610224b22ecce89b693fc1865864113f21c8d19c1f0c2a3b60405160405180910390a250565b610eaf8282610b2b565b15610f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61104c838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061110e565b505050565b61105b8282610b2b565b6110b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061136d6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61112d8273ffffffffffffffffffffffffffffffffffffffff16611359565b61119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083106111ee57805182526020820191506020810190506020830392506111cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611250576040519150601f19603f3d011682016040523d82523d6000602084013e611255565b606091505b5091509150816112cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b600081511115611353578080602001905160208110156112ec57600080fd5b8101908080519060200190929190505050611352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180611432602a913960400191505060405180910390fd5b5b50505050565b600080823b90506000811191505091905056fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77526f6c65733a206163636f756e7420697320746865207a65726f206164647265737343726f776473616c653a2062656e656669636961727920697320746865207a65726f2061646472657373496e646976696475616c6c7943617070656443726f776473616c653a2062656e65666963696172792773206361702065786365656465645361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564436170706572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652043617070657220726f6c65a165627a7a7230582029752ea6b2f31e52af96b49c949a8f279acbb6440d1d015b3407ef93bdd0f627002943726f776473616c653a20746f6b656e20697320746865207a65726f2061646472657373526f6c65733a206163636f756e7420697320746865207a65726f206164647265737343726f776473616c653a2077616c6c657420697320746865207a65726f2061646472657373";

type IndividuallyCappedCrowdsaleImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IndividuallyCappedCrowdsaleImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IndividuallyCappedCrowdsaleImpl__factory extends ContractFactory {
  constructor(...args: IndividuallyCappedCrowdsaleImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IndividuallyCappedCrowdsaleImpl> {
    return super.deploy(
      rate,
      wallet,
      token,
      overrides || {}
    ) as Promise<IndividuallyCappedCrowdsaleImpl>;
  }
  getDeployTransaction(
    rate: BigNumberish,
    wallet: string,
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(rate, wallet, token, overrides || {});
  }
  attach(address: string): IndividuallyCappedCrowdsaleImpl {
    return super.attach(address) as IndividuallyCappedCrowdsaleImpl;
  }
  connect(signer: Signer): IndividuallyCappedCrowdsaleImpl__factory {
    return super.connect(signer) as IndividuallyCappedCrowdsaleImpl__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IndividuallyCappedCrowdsaleImplInterface {
    return new utils.Interface(
      _abi
    ) as IndividuallyCappedCrowdsaleImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IndividuallyCappedCrowdsaleImpl {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IndividuallyCappedCrowdsaleImpl;
  }
}