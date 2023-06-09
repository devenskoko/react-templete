import { useRootDispatch, useRootSelector } from '@/store/hooks';
import { decremented, getUserData, incremented, selectAppSlice, setCount } from '@/store/slices/appSlice';

export default function index() {
  const { count } = useRootSelector(selectAppSlice);
  const dispatch = useRootDispatch();
  const inputHandle = (e: any) => {
    const value = parseFloat(e.target.value);
    dispatch(setCount(value));
  };
  return (
    <>
      <button onClick={() => dispatch(decremented())}>-</button>
      <input type="text" onChange={(e) => inputHandle(e)} value={count} />
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(getUserData())}>获取异步数据</button>
    </>
  );
}
