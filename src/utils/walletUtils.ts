import { SupportedChain } from '@/config/constants';
import Constants from '@/config/constants';
const { CHAIN_INFO } = Constants;
export const SwitchChainRequest = (chainId: SupportedChain, provider: any) => {
  return new Promise((reslove, reject) => {
    try {
      provider
        .request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: '0x' + chainId.toString(16),
            },
          ],
        })
        .then(() => {
          reslove(true);
        });
    } catch (e: any) {
      if (e.code === 4902) {
        //4902的状态需要添加网络
        provider
          .request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x' + chainId.toString(16),
                chainName: (CHAIN_INFO as any)?.[chainId + '']?.chainName,
                rpcUrls: (CHAIN_INFO as any)?.[chainId + '']?.rpcUrl,
                nativeCurrency: {
                  name: 'Aitd Coin',
                  symbol: 'AITD',
                  decimals: 18,
                },
              },
            ],
          })
          .then(() => {
            reslove(true);
          })
          .catch((e: any) => {
            reject(e);
          });
      } else {
        reject(e);
      }
    }
  });
};
