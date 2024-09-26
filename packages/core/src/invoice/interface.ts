export enum InvoiceStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
  COMPLETED = 'COMPLETED'
}

export interface Invoice {
  id: string;
  channel: string;
  amount: string;
  currency: string;
  status: InvoiceStatus;
  note?: string;
  created_at: Date;
  expired_at?: Date;
  failed_at?: Date;
  payed_at?: Date;
}

export interface CreateInvoiceRequest {
  channel: string;
  amount: string;
  currency: string;
  note?: string;
}

export interface IInvoiceApi {
  create(data: CreateInvoiceRequest): Promise<Invoice>;
}
