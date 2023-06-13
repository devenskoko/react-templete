import { UniversalProvider } from '@walletconnect/universal-provider';
export const walletConnectprovider = await UniversalProvider.init({
  projectId: 'a6cc11517a10f6f12953fd67b1eb67e7',
  metadata: {
    name: 'React App',
    description: 'React App for WalletConnect',
    url: window.location.origin,
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  client: undefined, // optional instance of @walletconnect/sign-client
});
