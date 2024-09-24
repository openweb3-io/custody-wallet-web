import { BaseApi, Page } from '../base/base_api';
import { Account, GetAccountsRequest, IAccountApi } from './interface';

const getAccountsDefaultReq: GetAccountsRequest = { page: 0, size: 50 };

export class AccountApi extends BaseApi implements IAccountApi {
  async getAccounts(req: GetAccountsRequest): Promise<Page<Account>> {
    const res = await this.rpc.request<Page<Account>>({
      method: 'GET',
      url: `/accounts`,
      params: { ...getAccountsDefaultReq, ...req }
    });
    return res.data;
  }
}
