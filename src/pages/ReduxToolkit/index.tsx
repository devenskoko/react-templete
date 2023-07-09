import { useRootDispatch, useRootSelector } from '@/store/hooks';
import { decremented, getUserData, incremented, selectAppSlice, setCount } from '@/store/slices/appSlice';
import { Button, Input } from 'antd';

export default function index() {
  const { t } = useTranslation();
  const { count } = useRootSelector(selectAppSlice);
  const dispatch = useRootDispatch();
  const inputHandle = (e: any) => {
    const value = parseFloat(e.target.value);
    dispatch(setCount(value));
  };
  return (
    <div className="flex-center mb-20">
      <div className="flex">
        <Button type="primary" onClick={() => dispatch(decremented())}>
          -
        </Button>
        <div className="w-200px">
          <Input className="border-2" type="text" onChange={(e) => inputHandle(e)} value={count} />
        </div>

        <Button type="primary" onClick={() => dispatch(incremented())}>
          +
        </Button>
      </div>
      <Button type="primary" onClick={() => dispatch(getUserData())}>
        {t('hello')}
      </Button>
    </div>
  );
}
