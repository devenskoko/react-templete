import './App.scss';
import { Suspense } from 'react';
import NProgress from './components/NProgress';
import authRouters from './router/authRouters';
import Header from '@/components/Header';
function App() {
  return (
    <div className="h-full flex flex-col">
      <Header></Header>
      <Suspense fallback={<NProgress />}>{authRouters()}</Suspense>
    </div>
  );
}

export default App;
