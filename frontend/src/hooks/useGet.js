import { useEffect, useState } from "react";

// hook for handle get data in server - use for get request.
export const useGet = (queryFn, config, queryKey) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const { data } = await queryFn(config, queryKey);
        // maybe transform data here by transform function.
        setData(data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setData(null);
        setLoading(false);
      }
    };
    fetchApi();
  }, [queryFn, queryKey]);
  return { data, error, loading };
};
