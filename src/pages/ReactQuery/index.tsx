import { getUserList } from '@/api/feature/app';
import { QUERY_USER_LIST } from '@/api/query/query.constant';
import { useQuery } from 'react-query';

export default function index() {
  const { data: users, isLoading: loading } = useQuery(QUERY_USER_LIST, () => getUserList('wang'), {
    select: (res: any) => res.items,
  });
  return <>{loading && <div>loading...</div>}</>;
}
