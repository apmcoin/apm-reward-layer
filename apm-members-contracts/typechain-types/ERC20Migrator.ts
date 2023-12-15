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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC20MigratorInterface extends utils.Interface {
  functions: {
    "beginMigration(address)": FunctionFragment;
    "legacyToken()": FunctionFragment;
    "migrateAll(address)": FunctionFragment;
    "migrate(address,uint256)": FunctionFragment;
    "newToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "beginMigration",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "legacyToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "migrateAll", values: [string]): string;
  encodeFunctionData(
    functionFragment: "migrate",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "newToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "beginMigration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "legacyToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "migrateAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newToken", data: BytesLike): Result;

  events: {};
}

export interface ERC20Migrator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC20MigratorInterface;

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
    beginMigration(
      newToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    legacyToken(overrides?: CallOverrides): Promise<[string]>;

    migrateAll(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    migrate(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    newToken(overrides?: CallOverrides): Promise<[string]>;
  };

  beginMigration(
    newToken_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  legacyToken(overrides?: CallOverrides): Promise<string>;

  migrateAll(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  migrate(
    account: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  newToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    beginMigration(newToken_: string, overrides?: CallOverrides): Promise<void>;

    legacyToken(overrides?: CallOverrides): Promise<string>;

    migrateAll(account: string, overrides?: CallOverrides): Promise<void>;

    migrate(
      account: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    newToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    beginMigration(
      newToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    legacyToken(overrides?: CallOverrides): Promise<BigNumber>;

    migrateAll(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    migrate(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    newToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    beginMigration(
      newToken_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    legacyToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    migrateAll(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    migrate(
      account: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    newToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
