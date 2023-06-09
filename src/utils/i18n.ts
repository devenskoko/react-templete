import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// 初始化
export const initI18n = () => {
  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      //默认语言
      lng: 'zh_CN',
      fallbackLng: 'zh_CN',
      debug: false,
      backend: {
        loadPath: `/locales/{{lng}}.json`,
      },
    });
};
export default initI18n;
