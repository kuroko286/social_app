import { useEffect, useState } from "react";
import axios from "axios";

export const useGet = (url, config, transform) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(url, config);
        // maybe transform data here by transform function.
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchApi();
  }, [url, config]);
  return { data, error, loading };
};
