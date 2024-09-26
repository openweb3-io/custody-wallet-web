import { useQuery } from '@tanstack/react-query';
import { Address, GetDepositAddressRequest } from '@custody-wallet-web/core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useDepositAddress = (params: GetDepositAddressRequest) => {
  const { client } = useWalletContext();

  return useQuery<Address>({
    queryKey: [QueryKey.depositAddress, params],
    queryFn: async () => {
      return await client.depositAddressApi.get(params);
    }
  });
};
