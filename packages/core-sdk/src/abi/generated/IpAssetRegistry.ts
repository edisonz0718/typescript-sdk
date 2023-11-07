/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IERC5218 {
  export type TermsProcessorConfigStruct = {
    processor: string;
    data: BytesLike;
  };

  export type TermsProcessorConfigStructOutput = [string, string] & {
    processor: string;
    data: string;
  };
}

export interface IpAssetRegistryInterface extends utils.Interface {
  functions: {
    "createIPAsset(uint8,string,string,string,address,uint256)": FunctionFragment;
    "createLicense(uint256,uint256,address,string,address,bool,bool,(address,bytes))": FunctionFragment;
    "getLicenseIdByTokenId(uint256,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createIPAsset"
      | "createLicense"
      | "getLicenseIdByTokenId"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createIPAsset",
    values: [BigNumberish, string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createLicense",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      string,
      boolean,
      boolean,
      IERC5218.TermsProcessorConfigStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getLicenseIdByTokenId",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "createIPAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createLicense",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLicenseIdByTokenId",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IpAssetRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IpAssetRegistryInterface;

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
    createIPAsset(
      ipAssetType: BigNumberish,
      name: string,
      _description: string,
      mediaUrl: string,
      to: string,
      parentIpAssetId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    createLicense(
      _tokenId: BigNumberish,
      _parentLicenseId: BigNumberish,
      _licenseHolder: string,
      _uri: string,
      _revoker: string,
      _commercial: boolean,
      _canSublicense: boolean,
      _terms: IERC5218.TermsProcessorConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getLicenseIdByTokenId(
      _tokenId: BigNumberish,
      _commercial: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  createIPAsset(
    ipAssetType: BigNumberish,
    name: string,
    _description: string,
    mediaUrl: string,
    to: string,
    parentIpAssetId: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  createLicense(
    _tokenId: BigNumberish,
    _parentLicenseId: BigNumberish,
    _licenseHolder: string,
    _uri: string,
    _revoker: string,
    _commercial: boolean,
    _canSublicense: boolean,
    _terms: IERC5218.TermsProcessorConfigStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getLicenseIdByTokenId(
    _tokenId: BigNumberish,
    _commercial: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    createIPAsset(
      ipAssetType: BigNumberish,
      name: string,
      _description: string,
      mediaUrl: string,
      to: string,
      parentIpAssetId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createLicense(
      _tokenId: BigNumberish,
      _parentLicenseId: BigNumberish,
      _licenseHolder: string,
      _uri: string,
      _revoker: string,
      _commercial: boolean,
      _canSublicense: boolean,
      _terms: IERC5218.TermsProcessorConfigStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLicenseIdByTokenId(
      _tokenId: BigNumberish,
      _commercial: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    createIPAsset(
      ipAssetType: BigNumberish,
      name: string,
      _description: string,
      mediaUrl: string,
      to: string,
      parentIpAssetId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    createLicense(
      _tokenId: BigNumberish,
      _parentLicenseId: BigNumberish,
      _licenseHolder: string,
      _uri: string,
      _revoker: string,
      _commercial: boolean,
      _canSublicense: boolean,
      _terms: IERC5218.TermsProcessorConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getLicenseIdByTokenId(
      _tokenId: BigNumberish,
      _commercial: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createIPAsset(
      ipAssetType: BigNumberish,
      name: string,
      _description: string,
      mediaUrl: string,
      to: string,
      parentIpAssetId: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    createLicense(
      _tokenId: BigNumberish,
      _parentLicenseId: BigNumberish,
      _licenseHolder: string,
      _uri: string,
      _revoker: string,
      _commercial: boolean,
      _canSublicense: boolean,
      _terms: IERC5218.TermsProcessorConfigStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getLicenseIdByTokenId(
      _tokenId: BigNumberish,
      _commercial: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
