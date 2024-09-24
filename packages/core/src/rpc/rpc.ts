import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RPCRequest = AxiosRequestConfig;

export type RPCResponse = AxiosResponse;

export interface RPCOptions {
  baseURL?: string;
}

export class RPC {
  private options: RPCOptions;
  private _accessToken?: string;

  constructor(options: RPCOptions) {
    this.options = options;
    this._accessToken = '';
  }

  get accessToken(): string | undefined {
    return this._accessToken;
  }

  set accessToken(token: string | undefined) {
    this._accessToken = token;
  }

  async request<T = any, R = AxiosResponse<T>, D = any>(config: AxiosRequestConfig<D>): Promise<R> {
    const mergedConfig: AxiosRequestConfig<D> = {
      ...this.options,
      ...(this._accessToken
        ? { headers: { Authorization: `Bearer ${this._accessToken}` } }
        : undefined),
      ...config
    };
    return axios.request(mergedConfig);
  }
}
