
export interface Address {
  network: string;
  address: string;
}

export interface GetDepositAddressRequest {
  network?: string;
  currency?: string;
}

export interface IDepositAddressApi {
  get(request: GetDepositAddressRequest): Promise<Address>
}