import { Modal } from 'antd';
import CiCloseBig from '~icons/ci/close-big';
import Constants, { SupportedChain } from '@/config/constants';
import { SwitchChainRequest } from '@/utils/walletUtils';
import { ethers } from 'ethers';
// import { walletConnectprovider } from '@/utils/walletConnect';
import { UniversalProvider } from '@walletconnect/universal-provider';
import { WalletConnectModal } from '@walletconnect/modal';
const walletConnectModal = new WalletConnectModal({
  projectId: 'a6cc11517a10f6f12953fd67b1eb67e7',
  standaloneChains: ['eip155:5'],
  walletConnectVersion: 2,
});
const { INIT_CHAIN } = Constants;
const { confirm } = Modal;
export default function ConnectModal() {
  const walletList = [
    {
      name: 'MetaMask',
      logo: new URL('@/assets/coin/metaMask.png', import.meta.url).href,
    },
    {
      name: 'CoinBase',
      logo: new URL('@/assets/coin/coinbase.png', import.meta.url).href,
    },
    {
      name: 'WalletConnect',
      logo: new URL('@/assets/coin/wallectConnect.png', import.meta.url).href,
    },
  ];
  const { t } = useTranslation();
  const connectWallets = async (walletName: string) => {
    console.log(walletName, 'walletName');

    if (!(window as any).ethereum && walletName != 'WalletConnect') {
      walletName == 'MetaMask'
        ? window.open('https://metamask.io/download')
        : window.open('https://www.coinbase.com/wallet');
      return;
    }
    if (!(window as any).ethereum?.providers && walletName != 'WalletConnect') {
      if (!(window as any).ethereum.isMetaMask && walletName == 'MetaMask') {
        window.open('https://metamask.io/download');
        return;
      }
      if (!(window as any).ethereum.isCoinbaseWallet && walletName == 'CoinBase') {
        window.open('https://www.coinbase.com/wallet');
        return;
      }
    }

    let web3Provider;
    let singer: any;
    if (walletName == 'WalletConnect') {
      try {
        const walletConnectprovider = await UniversalProvider.init({
          logger: 'info',
          relayUrl: 'wss://relay.walletconnect.com',
          projectId: 'a6cc11517a10f6f12953fd67b1eb67e7',
          metadata: {
            name: 'React App',
            description: 'React App for WalletConnect',
            url: window.location.origin,
            icons: ['https://avatars.githubusercontent.com/u/37784886'],
          },
          client: undefined, // optional instance of @walletconnect/sign-client
        });
        console.log(walletConnectprovider);

        const namespaces = {
          eip155: {
            chains: ['eip155:5'],
            events: ['chainChanged', 'accountsChanged'],
            methods: ['eth_sendTransaction', 'eth_signTransaction', 'eth_sign', 'personal_sign', 'eth_signTypedData'],
          },
        };
        walletConnectprovider.on('display_uri', async (uri: string) => {
          console.log('EVENT', 'QR Code Modal open', uri);
          walletConnectModal?.openModal({ uri });
        });

        walletConnectprovider.on('session_delete', () => {
          console.log('EVENT', 'session_deleted');
        });

        const result = await walletConnectprovider.connect({
          namespaces: namespaces,
        });

        const _accounts = await walletConnectprovider.enable();

        console.log(result, _accounts);

        const web3Provider = new ethers.BrowserProvider(walletConnectprovider);
      } catch (err) {
        console.log(err);
      }
      console.log('WalletConnect');
    } else {
      if ((window as any).ethereum.providers?.length) {
        (window as any).ethereum.providers.forEach(async (p: any) => {
          if (walletName == 'CoinBase' && p.isCoinbaseWallet) singer = p;
          if (walletName == 'MetaMask' && p.isMetaMask) singer = p;
        });
      } else {
        singer = (window as any).ethereum;
      }

      await singer
        .request({
          method: 'eth_requestAccounts',
        })
        .then(async (accounts: string) => {
          console.log(accounts);
          const chainId = await singer.request({ method: 'eth_chainId' });
          if (chainId != INIT_CHAIN) {
            SwitchChainRequest(INIT_CHAIN as SupportedChain, singer).then((res) => {
              console.log(res);
            });
          }
        })
        .catch((e: any) => {
          console.log(e);
        });
    }

    // window.ethereum.selectedAddress  初始判断钱包是否连接
  };
  return (
    <div className="contentWaper px-38px pt-8px">
      <div className="content-title">
        <h3 className="text-32px">{t('welcomeText')}</h3>
        <p className="text-18px mt-8px color-#6e7080">{t('useWallet')}</p>
      </div>
      {walletList.map((item, index) => {
        return (
          <div
            className="flex items-center mt-32px mb-16px cursor-pointer"
            key={index}
            onClick={() => connectWallets(item.name)}
          >
            <img src={item.logo} alt="" />
            <span className="ml-12px text-18px">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
}
export const showConnectModal = () => {
  confirm({
    icon: null,
    wrapClassName: 'connect-modal',
    title: ' ',
    width: 585,
    centered: true,
    closable: true,
    closeIcon: <CiCloseBig />,
    content: <ConnectModal></ConnectModal>,
    footer: null,
  });
};
