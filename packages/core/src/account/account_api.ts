import { BaseApi } from "../base/base_api";
import { Account, IAccountApi } from "./interface";


export class AccountApi extends BaseApi implements IAccountApi {
  async getAccounts(): Promise<Account[]> {
    const res = await this.rpc.request({
      method: 'GET',
      url: `/accounts`,
    })
  
    return res.data;
  }
}