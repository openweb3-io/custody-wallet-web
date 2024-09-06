import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { Account, EventTypes, IWalletClient, AccountChangedEvent } from '@custody-wallet-web/core';
import { useAccounts } from '../hooks';

export type WalletContextProps = {
  client: IWalletClient;
  accounts: Account[];
  setAccounts: (accounts: Account[]) => void;
}

export const WalletContext = createContext<WalletContextProps>({} as any);

export const useWalletContext = () => useContext(WalletContext);

export type WalletProviderProps = {
  client: IWalletClient;
}

export const WalletProvider: FC<PropsWithChildren<WalletProviderProps>> = ({
  client,
  children,
}) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { data: _accounts, isSuccess } = useAccounts();

  useEffect(() => {
    if (!isSuccess) return;

    setAccounts(_accounts);
  }, [_accounts]);

  useEffect(() => {
    const accountChanged = (ev: AccountChangedEvent) => {      
      setAccounts
    }

    client.on(EventTypes.ACCOUNT_CHANGED, accountChanged)

    return () => {
      client.off(EventTypes.ACCOUNT_CHANGED, accountChanged);
    }
  },[client]);

  const value = {
    client,
    accounts, 
    setAccounts,
  }

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
}