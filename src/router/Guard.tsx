import { useLocation, Navigate } from 'react-router-dom';
import nprogress from 'nprogress';
let lastPathname = '';
export default function RequireAuth(props: any) {
  const children = props.children;
  const login = true;
  const location = useLocation();

  const pathname = location.pathname;
  if (pathname !== lastPathname) {
    nprogress.start();
    setTimeout(() => {
      nprogress.done();
    }, 0);
    lastPathname = pathname;
  }
  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
