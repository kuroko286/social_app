import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const getSearchHistory = (config, queryKey) => {
  return api.get("/search", config);
};
export const useGetSearchHistory = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
  return useGet(getSearchHistory, config);
};
