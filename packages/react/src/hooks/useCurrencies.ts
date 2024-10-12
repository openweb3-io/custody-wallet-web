import { useQuery } from '@tanstack/react-query';
import { Currency, GetCurrenciesRequest, List } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useCurrencies = (params: GetCurrenciesRequest) => {
  const { client } = useWalletContext();

  return useQuery<List<Currency>>({
    queryKey: [QueryKey.currencies, params],
    queryFn: async () => {
      return await client.currencyApi.getCurrencies(params);
    }
  });
};
