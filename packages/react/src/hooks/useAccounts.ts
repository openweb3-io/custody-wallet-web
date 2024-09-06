import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { Account } from "@custody-wallet-web/core";


export const useAccounts = () => {
  const { client } = useWalletContext();

  return useQuery<Account[]>({
    queryKey: [QueryKey.accounts],
    queryFn: async () => {
      return await client.accountApi.getAccounts();
    },
  });
}