import { useQuery } from '@tanstack/react-query';
import { GetDepositAddressRequest } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useDepositAddress = (params: GetDepositAddressRequest) => {
  const { client } = useWalletContext();

  return useQuery({
    queryKey: [QueryKey.depositAddress, params],
    queryFn: async () => {
      return await client.depositAddressApi.get(params);
    }
  });
};
