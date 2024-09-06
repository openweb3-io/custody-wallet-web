import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RPCRequest = AxiosRequestConfig;

export type RPCResponse = AxiosResponse;

export interface RPCOptions {

} 

export class RPC {
  private options;
  constructor(options: RPCOptions) {
    this.options = options;
  }

  async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    // TODO merge options
    return axios.request(config);
  }
}