import { useRootDispatch, useRootSelector } from '@/store/hooks';
import { decremented, getUserData, incremented, selectAppSlice, setCount } from '@/store/slices/appSlice';
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
      <button onClick={() => dispatch(decremented())}>-</button>
      <input className="border-2" type="text" onChange={(e) => inputHandle(e)} value={count} />
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(getUserData())}>{t('hello')}</button>
    </>
  );
}
