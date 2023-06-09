import { useRoutes } from 'react-router-dom';
import './App.scss';
import routers from './routes/routerConfig';
import { Suspense } from 'react';
import NProgress from './components/NProgress';

function App() {
  const elements = useRoutes(routers);
  return <Suspense fallback={<NProgress />}>{elements}</Suspense>;
}

export default App;
