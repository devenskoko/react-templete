import { useRoutes } from 'react-router-dom';
import './App.scss';
import routers from './routes/routerConfig';
import { Suspense } from 'react';

function App() {
  const elements = useRoutes(routers);
  return <Suspense fallback={null}>{elements}</Suspense>;
}

export default App;
