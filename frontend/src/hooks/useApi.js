import { useState } from "react";

export const useApi = (fetchApi) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await fetchApi();
      setData(data);
      setSuccess(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return [error, success, loading, data];
};
