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

export interface ERC777Interface extends utils.Interface {
  functions: {
    "defaultOperators()": FunctionFragment;
    "name()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "granularity()": FunctionFragment;
    "operatorSend(address,address,uint256,bytes,bytes)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "authorizeOperator(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "send(address,uint256,bytes)": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "isOperatorFor(address,address)": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "revokeOperator(address)": FunctionFragment;
    "operatorBurn(address,uint256,bytes,bytes)": FunctionFragment;
    "burn(uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "defaultOperators",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "granularity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "operatorSend",
    values: [string, string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "authorizeOperator",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperatorFor",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeOperator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "operatorBurn",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burn",
    values: [BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "defaultOperators",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "granularity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorSend",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isOperatorFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "operatorBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;

  events: {
    "Transfer(address,address,uint256)": EventFragment;
    "Approval(address,address,uint256)": EventFragment;
    "Sent(address,address,address,uint256,bytes,bytes)": EventFragment;
    "Minted(address,address,uint256,bytes,bytes)": EventFragment;
    "Burned(address,address,uint256,bytes,bytes)": EventFragment;
    "AuthorizedOperator(address,address)": EventFragment;
    "RevokedOperator(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Burned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuthorizedOperator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RevokedOperator"): EventFragment;
}

export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  { from: string; to: string; value: BigNumber }
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  { owner: string; spender: string; value: BigNumber }
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export type SentEvent = TypedEvent<
  [string, string, string, BigNumber, string, string],
  {
    operator: string;
    from: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
  }
>;

export type SentEventFilter = TypedEventFilter<SentEvent>;

export type MintedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  {
    operator: string;
    to: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
  }
>;

export type MintedEventFilter = TypedEventFilter<MintedEvent>;

export type BurnedEvent = TypedEvent<
  [string, string, BigNumber, string, string],
  {
    operator: string;
    from: string;
    amount: BigNumber;
    data: string;
    operatorData: string;
  }
>;

export type BurnedEventFilter = TypedEventFilter<BurnedEvent>;

export type AuthorizedOperatorEvent = TypedEvent<
  [string, string],
  { operator: string; tokenHolder: string }
>;

export type AuthorizedOperatorEventFilter =
  TypedEventFilter<AuthorizedOperatorEvent>;

export type RevokedOperatorEvent = TypedEvent<
  [string, string],
  { operator: string; tokenHolder: string }
>;

export type RevokedOperatorEventFilter = TypedEventFilter<RevokedOperatorEvent>;

export interface ERC777 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC777Interface;

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
    defaultOperators(overrides?: CallOverrides): Promise<[string[]]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    granularity(overrides?: CallOverrides): Promise<[BigNumber]>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  defaultOperators(overrides?: CallOverrides): Promise<string[]>;

  name(overrides?: CallOverrides): Promise<string>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    holder: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  granularity(overrides?: CallOverrides): Promise<BigNumber>;

  operatorSend(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(tokenHolder: string, overrides?: CallOverrides): Promise<BigNumber>;

  authorizeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  send(
    recipient: string,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOperatorFor(
    operator: string,
    tokenHolder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  allowance(
    holder: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  revokeOperator(
    operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  operatorBurn(
    account: string,
    amount: BigNumberish,
    data: BytesLike,
    operatorData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  burn(
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    defaultOperators(overrides?: CallOverrides): Promise<string[]>;

    name(overrides?: CallOverrides): Promise<string>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorizeOperator(
      operator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeOperator(operator: string, overrides?: CallOverrides): Promise<void>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;

    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Sent(address,address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;
    Sent(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): SentEventFilter;

    "Minted(address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;
    Minted(
      operator?: string | null,
      to?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): MintedEventFilter;

    "Burned(address,address,uint256,bytes,bytes)"(
      operator?: string | null,
      from?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;
    Burned(
      operator?: string | null,
      from?: string | null,
      amount?: null,
      data?: null,
      operatorData?: null
    ): BurnedEventFilter;

    "AuthorizedOperator(address,address)"(
      operator?: string | null,
      tokenHolder?: string | null
    ): AuthorizedOperatorEventFilter;
    AuthorizedOperator(
      operator?: string | null,
      tokenHolder?: string | null
    ): AuthorizedOperatorEventFilter;

    "RevokedOperator(address,address)"(
      operator?: string | null,
      tokenHolder?: string | null
    ): RevokedOperatorEventFilter;
    RevokedOperator(
      operator?: string | null,
      tokenHolder?: string | null
    ): RevokedOperatorEventFilter;
  };

  estimateGas: {
    defaultOperators(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    granularity(overrides?: CallOverrides): Promise<BigNumber>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    defaultOperators(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    granularity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    authorizeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOperatorFor(
      operator: string,
      tokenHolder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      holder: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    revokeOperator(
      operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: BytesLike,
      operatorData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
