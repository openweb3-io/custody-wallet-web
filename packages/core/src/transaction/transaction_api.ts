import { BaseApi, List } from '../base/base_api';
import { GetTransactionsRequest, ITransactionApi, Transaction } from './interface';

const getTransactionsDefaultParams: GetTransactionsRequest = { limit: 50 };

export class TransactionApi extends BaseApi implements ITransactionApi {
  async getTransactions(params: GetTransactionsRequest): Promise<List<Transaction>> {
    const res = await this.rpc.request<List<Transaction>>({
      method: 'GET',
      url: '/transactions',
      params: { getTransactionsDefaultParams, ...params }
    });
    return res.data;
  }

  async getTransaction(id: string): Promise<Transaction> {
    const res = await this.rpc.request<Transaction>({
      method: 'GET',
      url: `/transactions/${id}`
    });
    return res.data;
  }
}
