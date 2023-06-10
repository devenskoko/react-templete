import nprogress from 'nprogress';

const NProgress = () => {
  useEffect(() => {
    nprogress.start();
    return () => {
      nprogress.done();
    };
  }, []);
  return <></>;
};

export default NProgress;
