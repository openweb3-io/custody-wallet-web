import { useQuery } from '@tanstack/react-query';
import { Transaction } from 'custody-wallet-js';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useTransaction = (id: string) => {
  const { client } = useWalletContext();

  return useQuery<Transaction>({
    queryKey: [QueryKey.transaction, id],
    queryFn: async () => {
      return await client.transactionApi.getTransaction(id);
    }
  });
};
