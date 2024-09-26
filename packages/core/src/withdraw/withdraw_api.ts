import { BaseApi } from '../base/base_api';
import { IWithdrawApi, WithdrawRequest } from './interface';

export class WithdrawApi extends BaseApi implements IWithdrawApi {
  async withdraw(data: WithdrawRequest): Promise<void> {
    await this.rpc.request({
      method: 'POST',
      url: '/wallets/withdraw',
      data
    });
  }
}
