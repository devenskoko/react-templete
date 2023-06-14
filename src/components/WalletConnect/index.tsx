import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { aithChain } from '@/config/constants';

// 自定义链  aithChain

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, aithChain, ...(import.meta.env.VITE_TESTNETS === 'true' ? [goerli] : [])],
  [publicProvider()],
);
const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      coinbaseWallet({ chains, appName: 'Coinbase' }),
      metaMaskWallet({ chains }),
      trustWallet({ chains }),
      imTokenWallet({ chains }),
      walletConnectWallet({ chains, projectId: 'a6cc11517a10f6f12953fd67b1eb67e7' }),
    ],
  },
  {
    groupName: 'More',
    wallets: [rainbowWallet({ chains }), argentWallet({ chains }), braveWallet({ chains }), omniWallet({ chains })],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

console.log(publicClient({ chainId: 1319 }));

export default function Web3Provider({ children }: any) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
