export enum OrderStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
  COMPLETED = 'COMPLETED'
}

export interface Order {
  id: string;
  uid?: string;
  currency: string;
  amount: string;
  status: OrderStatus;
  note?: string;
  failed_message?: string;
  created_at: Date;
  payed_at?: Date;
  expired_at?: Date;
  failed_at?: Date;
}

export interface PayOrderRequest {
  id: string;
  credentials?: string;
  remark?: string;
}

export interface IOrderApi {
  get(id: string): Promise<Order>;

  pay(data: PayOrderRequest): Promise<Order>;
}
