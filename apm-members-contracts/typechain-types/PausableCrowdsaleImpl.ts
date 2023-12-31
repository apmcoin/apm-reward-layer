/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface PausableCrowdsaleImplInterface extends utils.Interface {
  functions: {
    "rate()": FunctionFragment;
    "unpause()": FunctionFragment;
    "weiRaised()": FunctionFragment;
    "isPauser(address)": FunctionFragment;
    "wallet()": FunctionFragment;
    "paused()": FunctionFragment;
    "renouncePauser()": FunctionFragment;
    "addPauser(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "buyTokens(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "addPauser", values: [string]): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
    "PauserAdded(address)": EventFragment;
    "PauserRemoved(address)": EventFragment;
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
}

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type PauserAddedEvent = TypedEvent<[string], { account: string }>;

export type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;

export type PauserRemovedEvent = TypedEvent<[string], { account: string }>;

export type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;

export type TokensPurchasedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  {
    purchaser: string;
    beneficiary: string;
    value: BigNumber;
    amount: BigNumber;
  }
>;

export type TokensPurchasedEventFilter = TypedEventFilter<TokensPurchasedEvent>;

export interface PausableCrowdsaleImpl extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PausableCrowdsaleImplInterface;

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
    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    isPauser(account: string, overrides?: CallOverrides): Promise<[boolean]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

  wallet(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renouncePauser(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addPauser(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    rate(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(overrides?: CallOverrides): Promise<void>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<boolean>;

    wallet(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renouncePauser(overrides?: CallOverrides): Promise<void>;

    addPauser(account: string, overrides?: CallOverrides): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "PauserAdded(address)"(account?: string | null): PauserAddedEventFilter;
    PauserAdded(account?: string | null): PauserAddedEventFilter;

    "PauserRemoved(address)"(account?: string | null): PauserRemovedEventFilter;
    PauserRemoved(account?: string | null): PauserRemovedEventFilter;

    "TokensPurchased(address,address,uint256,uint256)"(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
    TokensPurchased(
      purchaser?: string | null,
      beneficiary?: string | null,
      value?: null,
      amount?: null
    ): TokensPurchasedEventFilter;
  };

  estimateGas: {
    rate(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isPauser(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPauser(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renouncePauser(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addPauser(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
