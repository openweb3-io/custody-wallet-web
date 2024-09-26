import { BaseApi } from '../base/base_api';
import { CreateInvoiceRequest, IInvoiceApi, Invoice } from './interface';

export class InvoiceApi extends BaseApi implements IInvoiceApi {
  async create(data: CreateInvoiceRequest): Promise<Invoice> {
    const res = await this.rpc.request<Invoice>({
      method: 'POST',
      url: `wallets/deposit/createInvoice`,
      data
    });
    return res.data;
  }
}
