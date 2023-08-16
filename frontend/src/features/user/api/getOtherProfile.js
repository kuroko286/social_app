import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const getOtherProfile = (config, userId) => {
  return api.get(`/users/${userId}`, config);
};

export const useGetOtherProfile = (userId) => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useGet(getOtherProfile, config, userId);
};
