/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IpAssetRegistry,
  IpAssetRegistryInterface,
} from "../IpAssetRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_parentLicenseId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_licenseHolder",
        type: "address",
      },
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        internalType: "address",
        name: "_revoker",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_commercial",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "_canSublicense",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "contract ITermsProcessor",
            name: "processor",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct IERC5218.TermsProcessorConfig",
        name: "_terms",
        type: "tuple",
      },
    ],
    name: "createLicense",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_commercial",
        type: "bool",
      },
    ],
    name: "getLicenseIdByTokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IpAssetRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IpAssetRegistryInterface {
    return new utils.Interface(_abi) as IpAssetRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IpAssetRegistry {
    return new Contract(address, _abi, signerOrProvider) as IpAssetRegistry;
  }
}