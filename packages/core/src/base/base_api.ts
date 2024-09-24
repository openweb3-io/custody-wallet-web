import { RPC } from '../rpc/rpc';

export interface PageQuery {
  page?: number;
  size?: number;
}

export interface Page<D> {
  items: D[];
  total: number;
}

export interface ListQuery {
  cursor?: string;
  limit?: number;
}

export interface List<D> {
  items: D[];
  has_next: boolean;
  next_cursor: string;
}

export abstract class BaseApi {
  protected rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }
}
