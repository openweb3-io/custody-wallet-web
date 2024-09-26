import { BaseApi } from '../base/base_api';
import { CreateInvoiceRequest, IDepositApi, Invoice } from './interface';

export class DepositApi extends BaseApi implements IDepositApi {
  async createInvoice(data: CreateInvoiceRequest): Promise<Invoice> {
    const res = await this.rpc.request<Invoice>({
      method: 'POST',
      url: `wallets/deposit/createInvoice`,
      data
    });
    return res.data;
  }
}
