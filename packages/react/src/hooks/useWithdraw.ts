import { useMutation } from '@tanstack/react-query';
import { WithdrawRequest } from '@openweb3-io/custody-wallet-js';
import { useWalletContext } from '../providers/WalletProvider';

export const useWithdraw = (req: WithdrawRequest) => {
  const { client } = useWalletContext();

  return useMutation<void>({
    mutationFn: async () => {
      return await client.withdrawApi.withdraw(req);
    }
  });
};