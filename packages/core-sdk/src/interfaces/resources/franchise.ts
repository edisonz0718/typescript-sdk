/**
 * Core data model for franchise.
 *
 * @public
 */
export interface Franchise {
  franchiseId: string;
  franchiseName: string;
  ownerAddress: string;
  tokenUri: string;
}

/**
 * Request interface for franchise.get method.
 *
 * @public
 */
export interface GetFranchiseRequest {
  franchiseId: string;
}
/**
 * Response interface for franchise.get method.
 *
 * @public
 */
export interface GetFranchiseResponse {
  franchise: Franchise;
}

/**
 * Request interface for franchise.create method.
 *
 * @public
 */
export interface CreateFranchiseRequest {
  franchiseName: string;
  franchiseSymbol: string;
  franchiseDescription: string;
}
/**
 * Response interface for franchise.create method.
 *
 * @public
 */
export interface CreateFranchiseResponse {
  txHash: string;
}