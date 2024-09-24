import { BaseApi, Page } from '../base/base_api';
import { Account, GetAccountsRequest, IAccountApi } from './interface';

const getAccountsDefaultParams: GetAccountsRequest = { page: 0, size: 50 };

export class AccountApi extends BaseApi implements IAccountApi {
  async getAccounts(params: GetAccountsRequest): Promise<Page<Account>> {
    const res = await this.rpc.request<Page<Account>>({
      method: 'GET',
      url: `/accounts`,
      params: { ...getAccountsDefaultParams, ...params }
    });
    return res.data;
  }
}
