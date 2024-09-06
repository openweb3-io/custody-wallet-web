import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { Currency, GetCurrencyRequest } from "@custody-wallet-web/core";


export const useCurrency = (params: GetCurrencyRequest) => {
  const { client } = useWalletContext();

  return useQuery<Currency>({
    queryKey: [QueryKey.currency],
    queryFn: () => {
      return client.currencyApi.getCurrency(params);
    },
  });
}