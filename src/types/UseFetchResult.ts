interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

export default UseFetchResult;
