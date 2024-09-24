import { PageQuery, Page } from '../base/base_api';

export interface Account {
  currency: string;
  available_balance: string;
  locked_balance: string;
  available_balance_fiat_currency: string;
  available_balance_fiat_amount: string;
  rate: number;
}

export interface GetAccountsRequest extends PageQuery {}

export interface IAccountApi {
  getAccounts(params: GetAccountsRequest): Promise<Page<Account>>;
}
