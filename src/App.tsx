import { Suspense } from 'react';
import Footer from '@/components/Footer';
import { useRoutes } from 'react-router-dom';
import routers from './router/routerMap';
import Web3Provider from '@/components/WalletConnect';
import Header from '@/components/Header';
import { Spin } from 'antd';
function App() {
  return (
    <div className="h-full flex flex-col-center">
      <Web3Provider>
        <Header></Header>
        <Suspense fallback={<Spin />}>{useRoutes(routers)}</Suspense>
        <Footer></Footer>
      </Web3Provider>
    </div>
  );
}

export default App;
