import { List, ListQuery } from '../base/base_api';

export enum TransactionDirection {
  IN = 'IN',
  OUT = 'OUT'
}

export enum TransactionStatus {
  SUCCEED = 'SUCCEED',
  FAILED = 'FAILED',
  PENDING = 'PENDING'
}

export interface Transaction {
  id: string;
  currency: string;
  network?: string;
  amount: string;
  direction: TransactionDirection;
  status: TransactionStatus;
  gateway: string;
  created_at: Date;
}

export interface GetTransactionsRequest extends ListQuery {
  gateway?: string;
}

export interface ITransactionApi {
  getTransactions(params: GetTransactionsRequest): Promise<List<Transaction>>;

  getTransaction(id: string): Promise<Transaction>;
}
