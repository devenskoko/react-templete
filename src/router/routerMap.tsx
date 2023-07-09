import { lazy } from 'react';
import { AuthRouteObject } from 'react-router-auth-plus';

// 快速导入工具函数
const lazyLoad = (moduleName: string) => lazy(() => import(`@/pages/${moduleName}/index.tsx`));
import RequireAuth from '@/router/Guard';
export const Home = lazyLoad('Home');
export const ReduxToolkit = lazyLoad('ReduxToolkit');
export const ReactQuery = lazyLoad('ReactQuery');
export const ErrorPage = lazyLoad('ErrorPage');

const routers: AuthRouteObject[] = [
  {
    path: '/',
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
    meta: {
      title: '',
    },
  },
  {
    path: '/toolkit',
    element: (
      <RequireAuth>
        <ReduxToolkit />
      </RequireAuth>
    ),
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
