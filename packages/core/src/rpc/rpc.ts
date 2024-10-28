import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BalanceNotEnoughError, InsufficientGasError, WalletError } from '../error';

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
        throw parseError(e.response.data.error);
      } else {
        throw e;
      }
    }
  }
}

function parseError(message: string): WalletError {
  if (message.indexOf('withdraw amount not enough') >= 0) {
    throw new BalanceNotEnoughError(message);
  }
  if (message.indexOf('EstimateGas failed') >= 0) {
    throw new InsufficientGasError(message);
  }
  throw new WalletError(message);
}
