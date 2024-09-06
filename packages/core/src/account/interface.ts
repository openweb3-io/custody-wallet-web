
export interface Account {
  currency: string;  
  balance: string;
  fiat_currency: string;
  fiat_balance: string;
  rate: number;
}

export interface IAccountApi {
  getAccounts(): Promise<Account[]>;
}