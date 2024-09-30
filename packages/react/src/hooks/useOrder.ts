import { useQuery } from '@tanstack/react-query';
import { Order } from 'custody-wallet-js';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useOrder = (id: string) => {
  const { client } = useWalletContext();

  return useQuery<Order>({
    queryKey: [QueryKey.order, id],
    queryFn: async () => {
      return await client.orderApi.get(id);
    }
  });
};
