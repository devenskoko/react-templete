import { lazy } from 'react';
import { MetaMenu, AuthRouteObject } from './interface';

// 快速导入工具函数
const lazyLoad = (moduleName: string) => lazy(() => import(`@/pages/${moduleName}/index.tsx`));

const Home = lazyLoad('Home');
const ReduxToolkit = lazyLoad('ReduxToolkit');
const ReactQuery = lazyLoad('ReactQuery');
const ErrorPage = lazyLoad('ErrorPage');

const routers: AuthRouteObject<MetaMenu>[] = [
  {
    path: '/',
    element: <Home />,
    meta: {
      title: '',
    },
  },
  {
    path: '/toolkit',
    element: <ReduxToolkit />,
    meta: {
      title: '',
    },
  },
  {
    path: '/query',
    element: <ReactQuery />,
    meta: {
      title: '',
    },
  },
  {
    path: '*',
    element: <ErrorPage />,
    meta: {
      title: '',
    },
  },
];

export default routers;
