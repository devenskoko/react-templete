import { useNavigate } from 'react-router-dom';
export default function index() {
  // 路由跳转
  const router = useNavigate();
  const toRedux = () => router('/toolkit');
  return (
    <>
      <button onClick={toRedux}>toRedux</button>
    </>
  );
}
