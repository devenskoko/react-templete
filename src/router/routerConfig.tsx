import { lazy } from 'react';
import { AuthRouteObject } from 'react-router-auth-plus';

// 快速导入工具函数
const lazyLoad = (moduleName: string) => lazy(() => import(`@/pages/${moduleName}/index.tsx`));

const Home = lazyLoad('Home');
const ReduxToolkit = lazyLoad('ReduxToolkit');
const ReactQuery = lazyLoad('ReactQuery');
const ErrorPage = lazyLoad('ErrorPage');
const NetworkSwitcher = lazyLoad('NetworkSwitcher');
const SignMessage = lazyLoad('SignMessage');
const ReadContracts = lazyLoad('ReadContracts');

const routers: AuthRouteObject[] = [
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
    path: '/wagmi',
    element: <NetworkSwitcher />,
    meta: {
      title: '',
    },
  },
  {
    path: '/signMessage',
    element: <SignMessage />,
    meta: {
      title: '',
    },
  },
  {
    path: '/readContracts',
    element: <ReadContracts />,
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
