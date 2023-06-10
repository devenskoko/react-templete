import { getAuthRouters } from 'react-router-auth-plus';
import routers from './routerConfig';
import { useRoutes } from 'react-router-dom';
import { Spin } from 'antd';
function authRouters() {
  return useRoutes(
    getAuthRouters({
      routers,
      noAuthElement: (router) => <Spin />,
      render: (element) => {
        return element;
      },
      auth: [],
    }),
  );
}

export default authRouters;
