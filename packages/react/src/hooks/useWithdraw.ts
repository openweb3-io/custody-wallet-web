import { useMutation } from '@tanstack/react-query';
import { WithdrawRequest } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';

export const useWithdraw = () => {
  const { client } = useWalletContext();

  return useMutation({
    mutationFn: async (req: WithdrawRequest) => {
      return await client.withdrawApi.withdraw(req);
    }
  });
};
