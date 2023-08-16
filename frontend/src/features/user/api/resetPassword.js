import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";

export const sendResetPassword = (bodyData, config, queryKey) => {
  return api.post("/reset/password", bodyData);
};

export const useSendResetPassword = () => {
  return useMutation(sendResetPassword);
};
