import EventEmitter from 'eventemitter3';
import { IAccountApi } from './account';
import { ICurrencyApi } from './currency';
import { IDepositAddressApi } from './deposit_address';
import { ITransactionApi } from './transaction';
import { IOrderApi } from './order';
import { IWithdrawApi } from './withdraw';
import { IDepositApi } from './deposit';

export enum EventTypes {
  ACCOUNT_CHANGED = 'account_changed'
}

export type AccountChangedEvent = {
  balance: string;
};

export type EventPayload = {
  [EventTypes.ACCOUNT_CHANGED]: AccountChangedEvent;
};

export interface IWalletClient {
  emit<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    ...args: EventEmitter.EventArgs<EventPayload, T>
  ): boolean;

  /**
   * Add a listener for a given event.
   */
  on<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn: EventEmitter.EventListener<EventTypes, T>,
    context?: any
  ): this;

  off<T extends EventEmitter.EventNames<EventTypes>>(
    event: T,
    fn?: EventEmitter.EventListener<EventTypes, T>,
    context?: any,
    once?: boolean
  ): this;

  get accountApi(): IAccountApi;
  get transactionApi(): ITransactionApi;
  get currencyApi(): ICurrencyApi;
  get depositApi(): IDepositApi;
  get depositAddressApi(): IDepositAddressApi;
  get orderApi(): IOrderApi;
  get withdrawApi(): IWithdrawApi;
}
