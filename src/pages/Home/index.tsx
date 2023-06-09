import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function index() {
  // 路由跳转
  const router = useNavigate();
  const toRedux = () => router('/toolkit');
  return (
    <>
      <Button type="primary" onClick={toRedux}>
        toRedux
      </Button>
    </>
  );
}
