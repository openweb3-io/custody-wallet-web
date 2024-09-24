import { BaseApi } from '../base/base_api';
import { IOrderApi, Order, PayOrderRequest } from './interface';

export class OrderApi extends BaseApi implements IOrderApi {
  async get(id: string): Promise<Order> {
    const res = await this.rpc.request<Order>({
      method: 'GET',
      url: `/orders/${id}`
    });
    return res.data;
  }

  async pay(data: PayOrderRequest): Promise<Order> {
    const res = await this.rpc.request<Order>({
      method: 'POST',
      url: `/orders/${data.id}/pay`,
      data
    });
    return res.data;
  }
}
