import { Tooltip } from 'antd';
import IconMdiHomeSearchOutline from '~icons/mdi/home-search-outline';
import IconLaLanguage from '~icons/la/language';
import RiReactjsFill from '~icons/ri/reactjs-fill';
import GrommetIconsGithub from '~icons/grommet-icons/github';
import { Link } from 'react-router-dom';
import { changeLanguage, getInitLang, supportedLngs } from '@/utils/i18n';
export default function index() {
  const { t } = useTranslation();
  const toggleLocales = () => {
    const lang = getInitLang();
    const locales = supportedLngs;
    const locale = locales[Number(!locales.indexOf(lang))];
    changeLanguage(locale as any);
  };
  return (
    <div className="flex-center">
      <Tooltip title={t('home')}>
        <Link to="/" className="mx-2">
          <IconMdiHomeSearchOutline></IconMdiHomeSearchOutline>
        </Link>
      </Tooltip>
      <Tooltip title={t('change lang')}>
        <span className="mx-2 cursor-pointer" onClick={toggleLocales}>
          <IconLaLanguage></IconLaLanguage>
        </span>
      </Tooltip>
      <Tooltip title={t('to redux')}>
        <Link to="/toolkit" className="mx-2">
          <RiReactjsFill></RiReactjsFill>
        </Link>
      </Tooltip>
      <Tooltip title={t('github')}>
        <a
          className="icon-btn mx-2"
          href="https://github.com/devenskoko/react-templete"
          target="_blank"
          title="GitHub"
          rel="noreferrer"
        >
          <GrommetIconsGithub></GrommetIconsGithub>
        </a>
      </Tooltip>
    </div>
  );
}
