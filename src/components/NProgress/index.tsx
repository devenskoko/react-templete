import 'nprogress/nprogress.css';

import nprogress from 'nprogress';
import { Fragment } from 'react';

const NProgress: React.FC = () => {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);
  return <Fragment />;
};

export default NProgress;
