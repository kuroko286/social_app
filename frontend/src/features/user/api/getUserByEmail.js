import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";

export const getUserByEmail = (bodyData, config, queryKey) => {
  return api.post("reset/email", bodyData);
};

export const useGetUserByEmail = () => {
  return useMutation(getUserByEmail);
};
