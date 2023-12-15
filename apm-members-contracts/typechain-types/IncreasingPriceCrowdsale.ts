/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IncreasingPriceCrowdsaleInterface extends utils.Interface {
  functions: {
    "hasClosed()": FunctionFragment;
    "finalRate()": FunctionFragment;
    "rate()": FunctionFragment;
    "weiRaised()": FunctionFragment;
    "isOpen()": FunctionFragment;
    "closingTime()": FunctionFragment;
    "wallet()": FunctionFragment;
    "initialRate()": FunctionFragment;
    "openingTime()": FunctionFragment;
    "buyTokens(address)": FunctionFragment;
    "getCurrentRate()": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "hasClosed", values?: undefined): string;
  encodeFunctionData(functionFragment: "finalRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(functionFragment: "weiRaised", values?: undefined): string;
  encodeFunctionData(functionFragment: "isOpen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "closingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "wallet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "openingTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "buyTokens", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getCurrentRate",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "hasClosed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weiRaised", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "closingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wallet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initialRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openingTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buyTokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {
    "TimedCrowdsaleExtended(uint256,uint256)": EventFragment;
    "TokensPurchased(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TimedCrowdsaleExtended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokensPurchased"): EventFragment;
}

export type TimedCrowdsaleExtendedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { prevClosingTime: BigNumber; newClosingTime: BigNumber }
>;

export type TimedCrowdsaleExtendedEventFilter =
  TypedEventFilter<TimedCrowdsaleExtendedEvent>;

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

export interface IncreasingPriceCrowdsale extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IncreasingPriceCrowdsaleInterface;

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
    hasClosed(overrides?: CallOverrides): Promise<[boolean]>;

    finalRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    weiRaised(overrides?: CallOverrides): Promise<[BigNumber]>;

    isOpen(overrides?: CallOverrides): Promise<[boolean]>;

    closingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    wallet(overrides?: CallOverrides): Promise<[string]>;

    initialRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    openingTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCurrentRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  hasClosed(overrides?: CallOverrides): Promise<boolean>;

  finalRate(overrides?: CallOverrides): Promise<BigNumber>;

  rate(overrides?: CallOverrides): Promise<BigNumber>;

  weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

  isOpen(overrides?: CallOverrides): Promise<boolean>;

  closingTime(overrides?: CallOverrides): Promise<BigNumber>;

  wallet(overrides?: CallOverrides): Promise<string>;

  initialRate(overrides?: CallOverrides): Promise<BigNumber>;

  openingTime(overrides?: CallOverrides): Promise<BigNumber>;

  buyTokens(
    beneficiary: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCurrentRate(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    hasClosed(overrides?: CallOverrides): Promise<boolean>;

    finalRate(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<boolean>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<string>;

    initialRate(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokens(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    getCurrentRate(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TimedCrowdsaleExtended(uint256,uint256)"(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;
    TimedCrowdsaleExtended(
      prevClosingTime?: null,
      newClosingTime?: null
    ): TimedCrowdsaleExtendedEventFilter;

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
    hasClosed(overrides?: CallOverrides): Promise<BigNumber>;

    finalRate(overrides?: CallOverrides): Promise<BigNumber>;

    rate(overrides?: CallOverrides): Promise<BigNumber>;

    weiRaised(overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(overrides?: CallOverrides): Promise<BigNumber>;

    closingTime(overrides?: CallOverrides): Promise<BigNumber>;

    wallet(overrides?: CallOverrides): Promise<BigNumber>;

    initialRate(overrides?: CallOverrides): Promise<BigNumber>;

    openingTime(overrides?: CallOverrides): Promise<BigNumber>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCurrentRate(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    hasClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finalRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    weiRaised(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOpen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    closingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    openingTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyTokens(
      beneficiary: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCurrentRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
