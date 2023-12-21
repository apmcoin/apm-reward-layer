/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AbstractUserInterface extends utils.Interface {
  functions: {
    "addManager(address)": FunctionFragment;
    "removeItemToInventory(uint256)": FunctionFragment;
    "addItemToInventory(uint256,bytes32)": FunctionFragment;
    "destroy()": FunctionFragment;
    "removeManager(address)": FunctionFragment;
    "checkInventory(uint256)": FunctionFragment;
    "isManager(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addManager", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeItemToInventory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addItemToInventory",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "destroy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "checkInventory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isManager", values: [string]): string;

  decodeFunctionResult(functionFragment: "addManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeItemToInventory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addItemToInventory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "destroy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkInventory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isManager", data: BytesLike): Result;

  events: {
    "ManagerAdded(address)": EventFragment;
    "ManagerRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ManagerAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ManagerRemoved"): EventFragment;
}

export type ManagerAddedEvent = TypedEvent<[string], { account: string }>;

export type ManagerAddedEventFilter = TypedEventFilter<ManagerAddedEvent>;

export type ManagerRemovedEvent = TypedEvent<[string], { account: string }>;

export type ManagerRemovedEventFilter = TypedEventFilter<ManagerRemovedEvent>;

export interface AbstractUser extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AbstractUserInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeItemToInventory(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addItemToInventory(
      itemId: BigNumberish,
      url: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkInventory(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isManager(account: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  addManager(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeItemToInventory(
    itemId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addItemToInventory(
    itemId: BigNumberish,
    url: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  destroy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeManager(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkInventory(
    itemId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  isManager(account: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addManager(account: string, overrides?: CallOverrides): Promise<void>;

    removeItemToInventory(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addItemToInventory(
      itemId: BigNumberish,
      url: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    destroy(overrides?: CallOverrides): Promise<void>;

    removeManager(account: string, overrides?: CallOverrides): Promise<void>;

    checkInventory(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isManager(account: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ManagerAdded(address)"(account?: string | null): ManagerAddedEventFilter;
    ManagerAdded(account?: string | null): ManagerAddedEventFilter;

    "ManagerRemoved(address)"(
      account?: string | null
    ): ManagerRemovedEventFilter;
    ManagerRemoved(account?: string | null): ManagerRemovedEventFilter;
  };

  estimateGas: {
    addManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeItemToInventory(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addItemToInventory(
      itemId: BigNumberish,
      url: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkInventory(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isManager(account: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeItemToInventory(
      itemId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addItemToInventory(
      itemId: BigNumberish,
      url: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    destroy(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeManager(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkInventory(
      itemId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isManager(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
