import { BaseApi, List } from '../base/base_api';
import {
  Currency,
  EstimateAmountRequest,
  EstimatedAmount,
  GetCurrenciesRequest,
  GetCurrencyRequest,
  GetRatesRequest,
  ICurrencyApi,
  RateList
} from './interface';

const getCurrenciesDefaultParams: GetCurrenciesRequest = { limit: 50 };

export class CurrencyApi extends BaseApi implements ICurrencyApi {
  async getCurrencies(params: GetCurrenciesRequest): Promise<List<Currency>> {
    const res = await this.rpc.request<List<Currency>>({
      method: 'GET',
      url: `/currencies`,
      params: { ...getCurrenciesDefaultParams, ...params }
    });
    return res.data;
  }

  async getCurrency(params: GetCurrencyRequest): Promise<Currency> {
    const res = await this.rpc.request<Currency>({
      method: 'GET',
      url: `/currencies/${params.code}`
    });
    return res.data;
  }

  async getRates(data: GetRatesRequest): Promise<RateList> {
    const res = await this.rpc.request<RateList>({
      method: 'POST',
      url: `/rates`,
      data
    });
    return res.data;
  }

  async estimateAmount(params: EstimateAmountRequest): Promise<EstimatedAmount> {
    const res = await this.rpc.request<EstimatedAmount>({
      method: 'GET',
      url: `/rates/estimate`,
      params
    });
    return res.data;
  }
}
