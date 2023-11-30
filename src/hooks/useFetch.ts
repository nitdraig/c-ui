// src/hooks/useFetch.ts
import { useEffect, useState } from "react";
import UseFetchResult from "../types/UseFetchResult";

interface UseFetchProps<T> {
  url: string;
  options?: RequestInit;
}

const useFetch = <T>({ url, options }: UseFetchProps<T>): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          console.error("Error desconocido:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
