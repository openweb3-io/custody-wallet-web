import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

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
    try {
      return await axios.request(mergedConfig);
    } catch (e) {
      if (e instanceof AxiosError && e.response) {
        throw new Error(e.response.data.error);
      } else {
        throw e;
      }
    }
  }
}
