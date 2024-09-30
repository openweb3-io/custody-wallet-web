import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Order, PayOrderRequest } from 'custody-wallet-js';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const usePayOrder = (req: PayOrderRequest) => {
  const { client } = useWalletContext();
  const queryClient = useQueryClient();

  return useMutation<Order>({
    mutationFn: async () => {
      return await client.orderApi.pay(req);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.order, data.id] });
    }
  });
};
