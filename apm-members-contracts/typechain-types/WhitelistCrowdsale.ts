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

export interface WhitelistCrowdsaleInterface extends utils.Interface {
  functions: {
    "addWhitelisted(address)": FunctionFragment;
    "removeWhitelisted(address)": FunctionFragment;
    "rate()": FunctionFragment;
    "isWhitelisted(address)": FunctionFragment;
    "weiRaised()": FunctionFragment;
    "renounceWhitelistAdmin()": FunctionFragment;
    "wallet()": FunctionFragment;
    "addWhitelistAdmin(address)": FunctionFragment;
    "isWhitelistAdmin(address)": FunctionFragment;
    "renounceWhitelisted()": FunctionFragment;
    "buyTokens(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceWhitelistAdmin",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelistAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceWhitelisted",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
    "WhitelistedAdded(address)": EventFragment;
    "WhitelistedRemoved(address)": EventFragment;
    "WhitelistAdminAdded(address)": EventFragment;
    "WhitelistAdminRemoved(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistedAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistedRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WhitelistAdminRemoved"): EventFragment;
}

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

export type WhitelistedAddedEvent = TypedEvent<[string], { account: string }>;

export type WhitelistedAddedEventFilter =
  TypedEventFilter<WhitelistedAddedEvent>;

export type WhitelistedRemovedEvent = TypedEvent<[string], { account: string }>;

export type WhitelistedRemovedEventFilter =
  TypedEventFilter<WhitelistedRemovedEvent>;

export type WhitelistAdminAddedEvent = TypedEvent<
  [string],
  { account: string }
>;

export type WhitelistAdminAddedEventFilter =
  TypedEventFilter<WhitelistAdminAddedEvent>;

export type WhitelistAdminRemovedEvent = TypedEvent<
  [string],
  { account: string }
>;

export type WhitelistAdminRemovedEventFilter =
  TypedEventFilter<WhitelistAdminRemovedEvent>;

export interface WhitelistCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WhitelistCrowdsaleInterface;

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
    addWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    renounceWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  addWhitelisted(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWhitelisted(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  isWhitelisted(account: string, overrides?: CallOverrides): Promise<boolean>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  renounceWhitelistAdmin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  wallet(overrides?: CallOverrides): Promise<string>;

  addWhitelistAdmin(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isWhitelistAdmin(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  renounceWhitelisted(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addWhitelisted(account: string, overrides?: CallOverrides): Promise<void>;

    removeWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(account: string, overrides?: CallOverrides): Promise<boolean>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    renounceWhitelistAdmin(overrides?: CallOverrides): Promise<void>;

    wallet(overrides?: CallOverrides): Promise<string>;

    addWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceWhitelisted(overrides?: CallOverrides): Promise<void>;

    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
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

    "WhitelistedAdded(address)"(
      account?: string | null
    ): WhitelistedAddedEventFilter;
    WhitelistedAdded(account?: string | null): WhitelistedAddedEventFilter;

    "WhitelistedRemoved(address)"(
      account?: string | null
    ): WhitelistedRemovedEventFilter;
    WhitelistedRemoved(account?: string | null): WhitelistedRemovedEventFilter;

    "WhitelistAdminAdded(address)"(
      account?: string | null
    ): WhitelistAdminAddedEventFilter;
    WhitelistAdminAdded(
      account?: string | null
    ): WhitelistAdminAddedEventFilter;

    "WhitelistAdminRemoved(address)"(
      account?: string | null
    ): WhitelistAdminRemovedEventFilter;
    WhitelistAdminRemoved(
      account?: string | null
    ): WhitelistAdminRemovedEventFilter;
  };

  estimateGas: {
    addWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWhitelisted(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isWhitelisted(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceWhitelistAdmin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addWhitelistAdmin(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isWhitelistAdmin(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceWhitelisted(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
