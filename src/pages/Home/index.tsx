import logoSvg from '@/assets/svg/logo.svg';
export default function index() {
  const { t } = useTranslation();
  const featureList = [
    {
      name: 'Vite',
      href: 'https://github.com/vitejs/vite',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
    },
    {
      name: 'TypeScript',
      href: 'https://github.com/microsoft/TypeScript',
    },
    {
      name: 'Antd',
      href: 'https://ant.design/',
    },
    {
      name: 'Reactrouter',
      href: 'https://reactrouter.com/en/main',
    },
    {
      name: 'React-redux',
      href: 'https://react-redux.js.org/',
    },
    {
      name: 'icones',
      href: 'https://icones.netlify.app/',
    },
    {
      name: 'unocss',
      href: 'https://unocss.dev/',
    },
    {
      name: 'Axios',
      href: 'https://axios-http.com/',
    },
    {
      name: 'I18n',
      href: 'https://react.i18next.com/',
    },
    {
      name: 'Prettier',
      href: 'https://github.com/prettier/prettier',
    },
    {
      name: 'ESLint',
      href: 'https://github.com/eslint/eslint',
    },
    {
      name: 'Airbnb Style',
      href: 'https://github.com/airbnb/javascript',
    },
    {
      name: 'Husky',
      href: 'https://github.com/typicode/husky',
    },
    {
      name: 'NProgress',
      href: 'https://github.com/rstacruz/nprogress',
      isEnd: true,
    },
  ];
  return (
    <div className="container max-w-3xl mx-auto mt-40">
      <div className="h-60 mb-8">
        <div className="w-52 h-52 mx-auto mb-4">
          <img src={logoSvg} alt="" className="w-52 h-52" />
        </div>
      </div>
      <div className="text-center text-md">
        <h1 className="font-serif font-bold text-4xl mb-8">
          {t('hello')} , {t('welcome to')} React Templete
        </h1>
        <p className="mb-10">
          <strong>React Templete</strong>
          {t('includes features')}
        </p>
        <p className="mb-10">
          {featureList.map((item, index) => {
            return (
              <span key={index}>
                <a href={item.href} className="color-#38bdf8" target="_blank" rel="noreferrer">
                  {item.name}
                </a>
                {!item.isEnd && <> | </>}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
