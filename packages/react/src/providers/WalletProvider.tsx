import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';
import { Account, EventTypes, IWalletClient, AccountChangedEvent } from 'custody-wallet-js';
import { useAccounts } from '../hooks';

export type WalletContextValue = {
  client: IWalletClient;
  accounts: Account[];
};

export const WalletContext = createContext<WalletContextValue>({} as WalletContextValue);

export const useWalletContext = () => useContext(WalletContext);

export type WalletProviderProps = {
  client: IWalletClient;
};

export const WalletProvider: FC<PropsWithChildren<WalletProviderProps>> = ({
  client,
  children
}) => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const { data: _accounts, isSuccess } = useAccounts({});

  useEffect(() => {
    if (!isSuccess) return;
    setAccounts(_accounts.items);
  }, [_accounts, isSuccess]);

  useEffect(() => {
    const accountChanged = ({ account }: AccountChangedEvent) => {
      setAccounts(prevAccounts => {
        const idx = prevAccounts.findIndex(it => it.currency === account.currency);
        if (idx >= 0) {
          const accts = [...prevAccounts];
          accts[idx] = account;
          return accts;
        } else {
          return [...prevAccounts, account];
        }
      });
    };

    client.on(EventTypes.ACCOUNT_CHANGED, accountChanged);

    return () => {
      client.off(EventTypes.ACCOUNT_CHANGED, accountChanged);
    };
  }, [client]);

  const value = { client, accounts };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};
