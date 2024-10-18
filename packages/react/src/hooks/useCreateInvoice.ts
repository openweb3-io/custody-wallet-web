import { useMutation } from '@tanstack/react-query';
import { CreateInvoiceRequest } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';

export const useCreateInvoice = () => {
  const { client } = useWalletContext();

  return useMutation({
    mutationFn: async (req: CreateInvoiceRequest) => {
      return await client.depositApi.createInvoice(req);
    }
  });
};
