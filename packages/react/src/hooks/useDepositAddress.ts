import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { Address, GetDepositAddressRequest } from "@custody-wallet-web/core/dist/deposit_address/interface";


export const useDepositAddress = (params: GetDepositAddressRequest) => {
  const { client } = useWalletContext();

  return useQuery<Address>({
    queryKey: [QueryKey.depositAddress, params],
    queryFn: async () => {
      return await client.depositAddressApi.get(params);
    },
  });
}