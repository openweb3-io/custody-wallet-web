import { useMutation } from '@tanstack/react-query';
import { WithdrawRequest, WithdrawResult } from 'custody-wallet-js';
import { useWalletContext } from '../providers/WalletProvider';

export const useWithdraw = (req: WithdrawRequest) => {
  const { client } = useWalletContext();

  return useMutation<WithdrawResult>({
    mutationFn: async () => {
      return await client.withdrawApi.withdraw(req);
    }
  });
};
