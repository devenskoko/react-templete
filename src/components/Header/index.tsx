import RiReactjsFill from '~icons/ri/reactjs-fill';
import HeroiconsSolidMagnifyingGlass from '~icons/heroicons-solid/magnifying-glass';
import IcBaselineLanguage from '~icons/ic/baseline-language';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Input, MenuProps } from 'antd';
import { Language } from '@/utils/enum';
import { changeLanguage } from '@/utils/i18n';
import { showConnectModal } from '../ConnectModal';
export default function Header() {
  const { t } = useTranslation();
  const items: MenuProps['items'] = [
    { key: Language.zh, label: '中文简体' },
    { key: Language.tw, label: '中文繁體' },
    { key: Language.en, label: 'English' },
    { key: Language.jp, label: '日本語' },
    { key: Language.tk, label: 'T ürkiye dili' },
  ];

  const handleMenuClick: MenuProps['onClick'] = (item: any) => {
    changeLanguage(item.key);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  const linkWallet = () => {
    showConnectModal();
  };
  return (
    <header className="h-72px flex items-center justify-between px-32px">
      <Link to="/" className="flex items-center">
        <RiReactjsFill className="w-40px h-40px"></RiReactjsFill>
        <span className="text-26px font-bold ml-2">NFT</span>
      </Link>
      <div className="flex-1 px-20">
        <Input placeholder="Search items, collections, and accounts" prefix={<HeroiconsSolidMagnifyingGlass />} />
      </div>
      <div className="flex-center">
        <Dropdown menu={menuProps} className="mx-6" placement="bottom">
          <IcBaselineLanguage></IcBaselineLanguage>
        </Dropdown>
        <Button type="primary" className="linkWallet" onClick={linkWallet}>
          {t('Connect Wallet')}
        </Button>
      </div>
    </header>
  );
}
