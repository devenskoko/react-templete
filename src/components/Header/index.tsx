import RiReactjsFill from '~icons/ri/reactjs-fill';
import HeroiconsSolidMagnifyingGlass from '~icons/heroicons-solid/magnifying-glass';
import { Link } from 'react-router-dom';
import { Input } from 'antd';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useNetwork } from 'wagmi';
import MyLanguage from '../Language';
export default function Header() {
  const { address, connector } = useAccount();
  const { chain } = useNetwork();

  useEffect(() => {
    console.log(address, connector, chain);
    if (address && !chain) {
      console.log('address && !chain', address, chain);
      return;
    }
    if (!address && !chain) {
      // 都为空，则登录失败
    } else if (address && chain) {
      // 都不为空，则登录成功
    }
  }, [address, connector, chain]);

  return (
    <header className="h-72px w-full flex items-center justify-between px-32px">
      <Link to="/" className="flex items-center">
        <RiReactjsFill className="w-40px h-40px"></RiReactjsFill>
        <span className="text-26px font-bold ml-2">NFT</span>
      </Link>
      <div className="flex-1 px-20">
        <Input placeholder="Search items, collections, and accounts" prefix={<HeroiconsSolidMagnifyingGlass />} />
      </div>
      <div className="flex-center">
        <MyLanguage></MyLanguage>
        <ConnectButton></ConnectButton>
      </div>
    </header>
  );
}
