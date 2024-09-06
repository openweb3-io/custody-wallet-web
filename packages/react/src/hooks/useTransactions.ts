import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { GetTransactionsRequest, GetTransactionsResponse } from "@custody-wallet-web/core/dist/transaction";

export const useTransactions = (params: GetTransactionsRequest) => {
  const { client } = useWalletContext();

  return useQuery<GetTransactionsResponse>({
    queryKey: [QueryKey.accounts],
    queryFn: async () => {
      return await client.transactionApi.getTransactions(params);
    },
  });
}