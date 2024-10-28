export class WalletError extends Error {}

export class BalanceNotEnoughError extends WalletError {}

export function parseError(message: string): WalletError {
  if (message.indexOf('') >= 0) {
    throw new BalanceNotEnoughError(message);
  }
  throw new WalletError(message);
}
