/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ERC165CheckerMockInterface extends utils.Interface {
  functions: {
    "supportsAllInterfaces(address,bytes4[])": FunctionFragment;
    "supportsERC165(address)": FunctionFragment;
    "supportsInterface(address,bytes4)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsAllInterfaces",
    values: [string, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsERC165",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsAllInterfaces",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsERC165",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC165CheckerMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC165CheckerMockInterface;

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
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  supportsAllInterfaces(
    account: string,
    interfaceIds: BytesLike[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsERC165(account: string, overrides?: CallOverrides): Promise<boolean>;

  supportsInterface(
    account: string,
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsAllInterfaces(
      account: string,
      interfaceIds: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsERC165(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      account: string,
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
