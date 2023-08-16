import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";

export const sendResetCode = (bodyData, config, queryKey) => {
  return api.post("/reset/codeVerification", bodyData);
};

export const useSendResetCode = () => {
  return useMutation(sendResetCode);
};
