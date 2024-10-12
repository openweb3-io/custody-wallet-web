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
  amount: string;
  avatar?: string;
  currency: string;
  direction: TransactionDirection;
  created_at: Date;
  gateway: string;
  network?: string;
  status: TransactionStatus;
  wallet_id?: string;
  from_address?: string;
  to_address?: string;
}

export interface GetTransactionsRequest extends ListQuery {
  gateway?: string;
}

export interface ITransactionApi {
  getTransactions(params: GetTransactionsRequest): Promise<List<Transaction>>;

  getTransaction(id: string): Promise<Transaction>;
}
