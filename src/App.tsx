import { Suspense } from 'react';
import NProgress from './components/NProgress';
import Footer from '@/components/Footer';
import authRouters from './router/authRouters';
import Header from '@/components/Header';
import Web3Provider from '@/components/WalletConnect';
function App() {
  return (
    <Web3Provider>
      <div className="h-full flex flex-col-center">
        <Header></Header>
        <Suspense fallback={<NProgress />}>{authRouters()}</Suspense>
        <Footer></Footer>
      </div>
    </Web3Provider>
  );
}

export default App;
