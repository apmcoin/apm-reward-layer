/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BusRideManager,
  BusRideManagerInterface,
} from "../BusRideManager";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "locationDescriptions",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "userUuid",
        type: "bytes32",
      },
      {
        name: "location",
        type: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "recordRide",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "location",
        type: "uint256",
      },
      {
        name: "description",
        type: "string",
      },
    ],
    name: "setLocationDescription",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "rides",
    outputs: [
      {
        name: "userUuid",
        type: "bytes32",
      },
      {
        name: "location",
        type: "uint256",
      },
      {
        name: "timestamp",
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
        name: "location",
        type: "uint256",
      },
    ],
    name: "getLocationDescription",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getRideCount",
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
        indexed: false,
        name: "userUuid",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "location",
        type: "uint256",
      },
      {
        indexed: false,
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "RideRecorded",
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
  "0x608060405234801561001057600080fd5b50610cfa806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80635205f112116100665780635205f1121461028a57806360d2dd98146102da5780638959a5d114610381578063ac18de431461039f578063f3ae2415146103e357610093565b80630bec3b3a146100985780632d06177a1461013f5780632f95d317146101835780634dd651c3146101c5575b600080fd5b6100c4600480360360208110156100ae57600080fd5b810190808035906020019092919050505061043f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101045780820151818401526020810190506100e9565b50505050905090810190601f1680156101315780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101816004803603602081101561015557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104ef565b005b6101c36004803603606081101561019957600080fd5b810190808035906020019092919080359060200190929190803590602001909291905050506105b2565b005b610288600480360360408110156101db57600080fd5b81019080803590602001909291908035906020019064010000000081111561020257600080fd5b82018360208201111561021457600080fd5b8035906020019184600183028401116401000000008311171561023657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506106d0565b005b6102b6600480360360208110156102a057600080fd5b8101908080359060200190929190505050610765565b60405180848152602001838152602001828152602001935050505060405180910390f35b610306600480360360208110156102f057600080fd5b810190808035906020019092919050505061079c565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561034657808201518184015260208101905061032b565b50505050905090810190601f1680156103735780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610389610851565b6040518082815260200191505060405180910390f35b6103e1600480360360208110156103b557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061085e565b005b610425600480360360208110156103f957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610921565b604051808215151515815260200191505060405180910390f35b60026020528060005260406000206000915090508054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104e75780601f106104bc576101008083540402835291602001916104e7565b820191906000526020600020905b8154815290600101906020018083116104ca57829003601f168201915b505050505081565b61050333600061093e90919063ffffffff16565b610558576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610c7b6032913960400191505060405180910390fd5b61056c816000610a1c90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f3b4a40cccf2058c593542587329dd385be4f0b588db5471fbd9598e56dd7093a60405160405180910390a250565b6105c633600061093e90919063ffffffff16565b61061b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610c7b6032913960400191505060405180910390fd5b6001604051806060016040528085815260200184815260200183815250908060018154018082558091505090600182039060005260206000209060030201600090919290919091506000820151816000015560208201518160010155604082015181600201555050507fb757cb823b936ded67e5cf97efd13085f85e37965989c9570b43e4f0b6b4805783838360405180848152602001838152602001828152602001935050505060405180910390a1505050565b6106e433600061093e90919063ffffffff16565b610739576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610c7b6032913960400191505060405180910390fd5b80600260008481526020019081526020016000209080519060200190610760929190610bb4565b505050565b6001818154811061077257fe5b90600052602060002090600302016000915090508060000154908060010154908060020154905083565b6060600260008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108455780601f1061081a57610100808354040283529160200191610845565b820191906000526020600020905b81548152906001019060200180831161082857829003601f168201915b50505050509050919050565b6000600180549050905090565b61087233600061093e90919063ffffffff16565b6108c7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526032815260200180610c7b6032913960400191505060405180910390fd5b6108db816000610af790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fef69f7d97228658c92417be1b16b19058315de71fecb435d07b7d23728b6bd3160405160405180910390a250565b600061093782600061093e90919063ffffffff16565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109c5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610cad6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a26828261093e565b15610a99576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b610b01828261093e565b610b56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610c5a6021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610bf557805160ff1916838001178555610c23565b82800160010185558215610c23579182015b82811115610c22578251825591602001919060010190610c07565b5b509050610c309190610c34565b5090565b610c5691905b80821115610c52576000816000905550600101610c3a565b5090565b9056fe526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c654d616e61676572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d616e6167657220726f6c65526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373a165627a7a72305820cf9366fa3afb7aa92f7f35b773eed5e76c164f8cb83370dec0b2f21f3715911e0029";

type BusRideManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BusRideManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BusRideManager__factory extends ContractFactory {
  constructor(...args: BusRideManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BusRideManager> {
    return super.deploy(overrides || {}) as Promise<BusRideManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BusRideManager {
    return super.attach(address) as BusRideManager;
  }
  connect(signer: Signer): BusRideManager__factory {
    return super.connect(signer) as BusRideManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BusRideManagerInterface {
    return new utils.Interface(_abi) as BusRideManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BusRideManager {
    return new Contract(address, _abi, signerOrProvider) as BusRideManager;
  }
}