import { useQuery } from '@tanstack/react-query';
import { Account, GetAccountsRequest, Page } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useAccounts = (params: GetAccountsRequest) => {
  const { client } = useWalletContext();

  return useQuery<Page<Account>>({
    queryKey: [QueryKey.accounts, params],
    queryFn: async () => {
      return await client.accountApi.getAccounts(params);
    }
  });
};
