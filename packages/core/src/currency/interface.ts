
export interface Network {
  symbol: string;
  name: string;
  icon: string;
}

export interface Currency {
  code: string;
  name: string;
  canWithdraw: boolean;
  canDeposit: boolean;
  decimals: number;
  networks: Network[]
}

export interface GetCurrencyRequest {
  code: string;
}

export interface ICurrencyApi {
  getCurrencies(): Promise<Currency[]>;

  getCurrency(param: GetCurrencyRequest): Promise<Currency>;
}