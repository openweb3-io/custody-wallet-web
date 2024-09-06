import { BaseApi } from "../base/base_api";
import { Currency, GetCurrencyRequest, ICurrencyApi } from "./interface";

export class CurrencyApi extends BaseApi implements ICurrencyApi {  
  async getCurrencies(): Promise<Currency[]> {
    const res = await this.rpc.request({
      method: 'GET',
      url: `/currencies`,
    })
    
    return res.data;
  }

  async getCurrency(params: GetCurrencyRequest): Promise<Currency> {
    const res = await this.rpc.request({
      method: 'GET',
      url: `/currencies/${params.code}`,
    })
    
    return res.data;
  }
}