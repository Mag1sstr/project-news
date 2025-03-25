import { useEffect, useState } from "react";

export function useFetch(fetchFunction: any, params?: any) {
  const [data, setData] = useState(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchFunction(params);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return { data, isLoading, error };
}
