import { useQuery } from '@tanstack/react-query';
import { GetTransactionsRequest, List, Transaction } from '@openweb3-io/custody-wallet-js';
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
