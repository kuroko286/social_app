import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const getOwnProfile = (config, queryKey) => {
  return api.get(`/users/profile`, config);
};
export const useGetOwnProfile = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useGet(getOwnProfile, config);
};
