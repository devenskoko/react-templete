import { Chain } from 'wagmi';

export const aithChain = {
  id: 1319,
  name: 'Aitd Coin',
  network: 'Aitd Coin',
  nativeCurrency: {
    decimals: 18,
    name: 'Aitd Coin',
    symbol: 'AITD',
  },
  rpcUrls: {
    public: { http: ['https://walletrpc.aitd.io'] },
    default: { http: ['https://walletrpc.aitd.io'] },
  },
} as const satisfies Chain;
