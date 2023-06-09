import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// 初始化
export const initI18n = () => {
  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      //默认语言
      lng: 'zh-CN',
      ns: ['common'],
      supportedLngs: ['zh-CN'],
      debug: false,
      backend: {
        loadPath: `${window.location.origin}${import.meta.env.VITE_BASE}/locales/{{lng}}/{{ns}}.json`,
      },
    });
};
export default initI18n;
