import 'nprogress/nprogress.css';

import nprogress from 'nprogress';

const NProgress: React.FC = () => {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);
  return <></>;
};

export default NProgress;
