import { BaseApi } from '../base/base_api';
import { IWithdrawApi, WithdrawRequest, WithdrawResult } from './interface';

export class WithdrawApi extends BaseApi implements IWithdrawApi {
  async withdraw(data: WithdrawRequest): Promise<WithdrawResult> {
    const res = await this.rpc.request({
      method: 'POST',
      url: '/wallets/withdraw',
      data
    });
    return res.data;
  }
}
