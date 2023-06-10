import './App.scss';
import { Suspense } from 'react';
import NProgress from './components/NProgress';
import Footer from '@/components/Footer';
import authRouters from './router/AuthRouters';
function App() {
  return (
    <div className="h-full flex flex-col-center">
      <Suspense fallback={<NProgress />}>{authRouters()}</Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
