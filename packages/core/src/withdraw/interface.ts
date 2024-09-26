export interface WithdrawRequest {
  amount: string;
  currency: string;
  network: string;
  address: string;
}

export interface IWithdrawApi {
  withdraw(data: WithdrawRequest): Promise<void>;
}
