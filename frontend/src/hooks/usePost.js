import { useState, useCallback } from "react";
import api from "@/lib/axios";

export const usePost = (endpoint, config) => {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendPost = useCallback(
    async (bodyData) => {
      setLoading(true);
      setError(null);
      setResponseData(null);
      try {
        const { data } = await api.post(endpoint, bodyData, config);
        setResponseData(data);
        setError(null);
        setLoading(false);
        return data;
      } catch (error) {
        setError(error.response.data.message);
        setResponseData(null);
        setLoading(false);
        throw error;
      }
    },
    [endpoint, config]
  );
  return { responseData, error, loading, sendPost };
};
