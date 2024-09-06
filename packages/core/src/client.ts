import { AccountApi, IAccountApi } from './account';
import { ICurrencyApi } from './currency';
import { CurrencyApi } from './currency/currency_api';
import { DepositAddressApi } from './deposit_address/deposit_address_api';
import { IDepositAddressApi } from './deposit_address/interface';
import { IWalletClient } from './interface';
import { RPC } from './rpc/rpc';
import { ITransactionApi } from './transaction';
import { TransactionApi } from './transaction/transaction_api';
import { EventEmitter } from 'eventemitter3';
import EventSourcePolyfill from 'eventsource';


export interface WalletEvent {
  eventType: string;
  payload: any;
}

export interface WalletClientOptions {
  baseUrl: string;
}

export class WalletClient extends EventEmitter implements IWalletClient {
  private options: WalletClientOptions;
  private closeConnection: (() => void) | null = null;

  private rpc: RPC;
  private _accountApi: IAccountApi;
  private _currencyApi: ICurrencyApi;
  private _transactionApi: ITransactionApi;
  private _depositAddressApi: IDepositAddressApi;  

  constructor(options: WalletClientOptions) {
    super();
    this.options = options;

    this.rpc = new RPC({});
    this._accountApi = new AccountApi(this.rpc);
    this._currencyApi = new CurrencyApi(this.rpc);
    this._transactionApi = new TransactionApi(this.rpc);
    this._depositAddressApi = new DepositAddressApi(this.rpc);

    this.watch();
  }

  get accountApi(): IAccountApi { return this._accountApi; }

  get currencyApi(): ICurrencyApi { return this._currencyApi; }

  get transactionApi(): ITransactionApi { return this._transactionApi; }

  get depositAddressApi(): IDepositAddressApi { return this._depositAddressApi; }

  watch() {
    const url = this.options.baseUrl + '/watch';
    
    const handleEvent = (event: WalletEvent) => {
      this.on(event.eventType, event.payload);
    }
    
    this.closeConnection = watchEvents({ 
      url,
      handleEvent,
    });
  }

  unwatch() {
    if (this.closeConnection) {
      console.info('Close connection.');
      this.closeConnection();
    }
  }
}

const watchEvents = ({
  url,
  handleEvent,
}: {
  url: string;
  handleEvent: (event: WalletEvent) => void;
}) => {
  const eventSource = new EventSourcePolyfill(url);

  const onMessage = (params: MessageEvent<string>) => {
    // 处理事件并分发
    const { event } = JSON.parse(params.data);

    handleEvent(event);
  }

  const onOpen = () => {
    console.log("sse connect: opened");
  };

  const onError = (event: Event) => {
    console.log('sse connect: error', event);
  };

  eventSource.addEventListener('message', onMessage);
  eventSource.addEventListener('open', onOpen);
  eventSource.addEventListener('error', onError);
  return () => {
    eventSource.removeEventListener('message', onMessage);
    eventSource.removeEventListener('open', onOpen);
    eventSource.removeEventListener('error', onError);

    eventSource.close();
  };
}