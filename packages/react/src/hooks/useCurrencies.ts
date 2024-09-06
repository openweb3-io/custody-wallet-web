import { useWalletContext } from "../providers/WalletProvider"
import { useQuery } from '@tanstack/react-query';
import { QueryKey } from './keys';
import { Currency } from "@custody-wallet-web/core";


export const useCurrencies = () => {
  const { client } = useWalletContext();

  return useQuery<Currency[]>({
    queryKey: [QueryKey.currencies],
    queryFn: () => {
      return client.currencyApi.getCurrencies();
    },
  });
}