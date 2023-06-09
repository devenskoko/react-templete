export interface resData<T> {
  success?: boolean;
  data: T;
  code: number;
  message: string;
}
