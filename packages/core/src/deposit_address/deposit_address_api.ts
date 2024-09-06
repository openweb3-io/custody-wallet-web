import { BaseApi } from "../base/base_api";
import { Address, GetDepositAddressRequest, IDepositAddressApi } from "./interface";

export class DepositAddressApi extends BaseApi implements IDepositAddressApi {  
  async get(params: GetDepositAddressRequest): Promise<Address> {
    const res = await this.rpc.request({
      method: 'GET',
      url: `/deposit_addresses`,
      params,
    })
    
    return res.data;
  }
}