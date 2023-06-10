import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import { Language } from './enum';
export const LANG_CACHE_KEY = 'NFT_LANG_KEY';
export const supportedLngs = ['zh-CN', 'en-US'];

export const getInitLang = () => {
  const langCache = localStorage.getItem(LANG_CACHE_KEY);
  if (langCache) return langCache;
  window.localStorage.setItem(LANG_CACHE_KEY, Language.en);
  return Language.en;
};
export const initLang = getInitLang();

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang, () => {
    window.localStorage.setItem(LANG_CACHE_KEY, lang);
  });
};

// 初始化
export const initI18n = () => {
  return i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      //默认语言
      lng: initLang,
      ns: ['common'],
      supportedLngs,
      debug: false,
      backend: {
        loadPath: `${window.location.origin}${import.meta.env.VITE_BASE}/locales/{{lng}}/{{ns}}.json`,
      },
    });
};

export default initI18n;
