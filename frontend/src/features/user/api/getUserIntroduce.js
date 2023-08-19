import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";

export const getUserIntroduce = (config, userId) => {
  return api.get(`/users/introduce/${userId}`, config);
};

export const useGetUserIntroduce = (userId) => {
  return useGet(getUserIntroduce, {}, userId);
};
