import { useMutation } from '@tanstack/react-query';
import { CreateInvoiceRequest, Invoice } from '@openweb3-io/openwallet-core';
import { useWalletContext } from '../providers/WalletProvider';

export const useCreateInvoice = (req: CreateInvoiceRequest) => {
  const { client } = useWalletContext();

  return useMutation<Invoice>({
    mutationFn: async () => {
      return await client.depositApi.createInvoice(req);
    }
  });
};
