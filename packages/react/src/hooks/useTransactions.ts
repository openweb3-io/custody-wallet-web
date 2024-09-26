import { useQuery } from '@tanstack/react-query';
import { GetTransactionsRequest, List, Transaction } from '@custody-wallet-web/core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useTransactions = (params: GetTransactionsRequest) => {
  const { client } = useWalletContext();

  return useQuery<List<Transaction>>({
    queryKey: [QueryKey.transactions, params],
    queryFn: async () => {
      return await client.transactionApi.getTransactions(params);
    }
  });
};
