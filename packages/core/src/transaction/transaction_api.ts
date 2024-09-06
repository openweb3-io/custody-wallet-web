import { BaseApi } from "../base/base_api";
import { GetTransactionRequest, GetTransactionsRequest, GetTransactionsResponse, ITransactionApi, Transaction } from "./interface";

export class TransactionApi extends BaseApi implements ITransactionApi {
  async getTransactions(req: GetTransactionsRequest): Promise<GetTransactionsResponse> {
    const res = await this.rpc.request({
      method: 'GET',
      url: '/transactions',
      params: req,
    });
    return res.data;
  }

  async getTransaction(req: GetTransactionRequest): Promise<Transaction> {
    const res = await this.rpc.request({
      method: 'GET',
      url: `/transactions/${req.id}`,
      params: req,
    });
    return res.data;
  }

}