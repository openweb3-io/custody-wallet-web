import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PayOrderRequest } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const usePayOrder = () => {
  const { client } = useWalletContext();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (req: PayOrderRequest) => {
      return await client.orderApi.pay(req);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.order, data.id] });
    }
  });
};
