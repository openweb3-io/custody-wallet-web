import React, { createContext, FC, PropsWithChildren, useContext, useState } from 'react';
import { IWalletClient } from '@openweb3-io/openwallet-core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type WalletContextValue = {
  client: IWalletClient;
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
  const [queryClient] = useState(() => new QueryClient());
  const value = { client };
  return (
    <QueryClientProvider client={queryClient}>
      <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
    </QueryClientProvider>
  );
};
