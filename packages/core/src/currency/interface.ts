import { List, ListQuery } from '../base/base_api';

export interface Network {
  id: string;
  code: string;
  network: string;
  name: string;
  min_deposit_amount: string;
  min_withdraw_amount: string;
  max_withdraw_amount: string;
  can_deposit: boolean;
  can_withdraw: boolean;
  can_transfer: boolean;
  contract_address?: string;
  need_memo: boolean;
  min_fee?: string;
  max_fee?: string;
  min_fee_for_ct_addr?: string;
  max_fee_for_ct_addr?: string;
  min_confirmations: number;
  min_collect_amount?: string;
}

export interface Currency {
  id: string;
  code: string;
  symbol: string;
  logo?: string;
  name?: string;
  min_deposit_amount: string;
  min_withdraw_amount: string;
  max_withdraw_amount: string;
  can_deposit: boolean;
  can_withdraw: boolean;
  can_transfer: boolean;
  precision: number;
  decimals: number;
  rated: boolean;
  contract_address?: string;
  need_memo: boolean;
  min_fee?: string;
  max_fee?: string;
  min_fee_for_ct_addr?: string;
  max_fee_for_ct_addr?: string;
  networks: Network[];
  created_at?: Date;
  updated_at?: Date;
}

export interface GetCurrenciesRequest extends ListQuery {}

export interface GetCurrencyRequest {
  code: string;
}

export interface RatePair {
  base_currency: string;
  to_currency: string;
}

export interface GetRatesRequest {
  pairs: RatePair[];
}

export interface Rate {
  pair: RatePair;
  rate: number;
}

export interface RateList {
  rates: Rate[];
}

export interface EstimateAmountRequest extends RatePair {
  base_amount: string;
}

export interface EstimatedAmount extends RatePair {
  base_amount: string;
  to_amount: string;
}

export interface ICurrencyApi {
  getCurrencies(params: GetCurrenciesRequest): Promise<List<Currency>>;

  getCurrency(params: GetCurrencyRequest): Promise<Currency>;

  getRates(data: GetRatesRequest): Promise<RateList>;

  estimateAmount(params: EstimateAmountRequest): Promise<EstimatedAmount>;
}
