import { useState, useCallback } from "react";

// hook for handle mutate data in server - use for post,put,patch,delete request.
export const useMutation = (mutateFn, config, queryKey) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const mutate = useCallback(
    async (bodyData) => {
      setLoading(true);
      setError(null);
      setResponseData(null);
      try {
        const { data } = await mutateFn(bodyData, config, queryKey);
        setResponseData(data);
        setError(null);
        setLoading(false);
        return data;
      } catch (error) {
        setError(error.response.data.message);
        setResponseData(null);
        setLoading(false);
      }
    },
    [mutateFn, queryKey]
  );
  return { responseData, error, loading, mutate };
};
