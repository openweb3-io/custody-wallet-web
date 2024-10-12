import { useQuery } from '@tanstack/react-query';
import { Currency, GetCurrencyRequest } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';
import { QueryKey } from './keys';

export const useCurrency = (params: GetCurrencyRequest) => {
  const { client } = useWalletContext();

  return useQuery<Currency>({
    queryKey: [QueryKey.currency, params.code],
    queryFn: async () => {
      return await client.currencyApi.getCurrency(params);
    }
  });
};
