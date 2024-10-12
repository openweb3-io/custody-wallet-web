export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
  COMPLETED = 'COMPLETED'
}

export interface TonConnectCredentials {
  depositAddress: string;
  note: string;
}

export interface Invoice {
  id: string;
  user_id: string;
  channel: string;
  currency: string;
  amount: string;
  credentials: any;
  status: InvoiceStatus;
  created_at: Date;
  expired_at?: Date;
  failed_at?: Date;
  paid_at?: Date;
}

export interface CreateInvoiceRequest {
  channel: string;
  amount: string;
  currency: string;
  note?: string;
}

export interface IDepositApi {
  createInvoice(data: CreateInvoiceRequest): Promise<Invoice>;
}
