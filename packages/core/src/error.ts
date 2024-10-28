export class WalletError extends Error {}

export class BalanceNotEnoughError extends WalletError {}

export class InsufficientGasError extends WalletError {}
