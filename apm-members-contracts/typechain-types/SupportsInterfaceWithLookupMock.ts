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

export interface SupportsInterfaceWithLookupMockInterface
  extends utils.Interface {
  functions: {
    "supportsInterface(bytes4)": FunctionFragment;
    "INTERFACE_ID_ERC165()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "INTERFACE_ID_ERC165",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INTERFACE_ID_ERC165",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SupportsInterfaceWithLookupMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SupportsInterfaceWithLookupMockInterface;

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
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    INTERFACE_ID_ERC165(overrides?: CallOverrides): Promise<[string]>;
  };

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  INTERFACE_ID_ERC165(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    INTERFACE_ID_ERC165(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    INTERFACE_ID_ERC165(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    INTERFACE_ID_ERC165(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
