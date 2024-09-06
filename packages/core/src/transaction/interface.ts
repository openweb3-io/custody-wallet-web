export interface GetTransactionsRequest {

}

export interface GetTransactionsResponse {

}

export enum TransactionDirection {
  IN = 'in',
  OUT = 'out',
}

export interface Transaction {
  direction: TransactionDirection;
  gateway: string;
  network: string;
  currency: string;
  amount: string;
  timestamp: Date;
}

export interface GetTransactionRequest {
  id: string;
}

export interface ITransactionApi {
  getTransactions(req: GetTransactionsRequest): Promise<GetTransactionsResponse>;
  
  getTransaction(req: GetTransactionRequest): Promise<Transaction>;
}
