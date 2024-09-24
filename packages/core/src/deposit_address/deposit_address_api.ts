import { BaseApi } from '../base/base_api';
import { Address, GetDepositAddressRequest, IDepositAddressApi } from './interface';

export class DepositAddressApi extends BaseApi implements IDepositAddressApi {
  async get(params: GetDepositAddressRequest): Promise<Address> {
    const res = await this.rpc.request<Address>({
      method: 'GET',
      url: `/wallets/deposit_address`,
      params
    });
    return res.data;
  }
}
