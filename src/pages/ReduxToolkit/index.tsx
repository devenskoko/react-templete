import { useRootDispatch, useRootSelector } from '@/store/hooks';
import { decremented, getUserData, incremented, selectAppSlice, setCount } from '@/store/slices/appSlice';
import { Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';
export default function index() {
  const { t } = useTranslation();
  const { count } = useRootSelector(selectAppSlice);
  const dispatch = useRootDispatch();
  const inputHandle = (e: any) => {
    const value = parseFloat(e.target.value);
    dispatch(setCount(value));
  };
  return (
    <>
      <Button type="primary" onClick={() => dispatch(decremented())}>
        -
      </Button>
      <Input className="border-2" type="text" onChange={(e) => inputHandle(e)} value={count} />
      <Button type="primary" onClick={() => dispatch(incremented())}>
        +
      </Button>
      <Button type="primary" onClick={() => dispatch(getUserData())}>
        {t('hello')}
      </Button>
    </>
  );
}
