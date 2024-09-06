import { RPC } from "../rpc/rpc";


export abstract class BaseApi {
  protected rpc: RPC;

  constructor(rpc: RPC) {
    this.rpc = rpc;
  }
}