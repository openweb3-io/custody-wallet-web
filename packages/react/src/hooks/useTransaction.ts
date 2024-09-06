import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { GetTransactionRequest, Transaction } from "@custody-wallet-web/core";

export const useTransaction = (params: GetTransactionRequest) => {
  const { client } = useWalletContext();

  return useQuery<Transaction>({
    queryKey: [QueryKey.transaction],
    queryFn: async () => {
      return await client.transactionApi.getTransaction(params);
    },
  });
}