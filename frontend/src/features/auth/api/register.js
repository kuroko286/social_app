import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";

export const sendRegisterInformation = (registerData) => {
  return api.post("/register", registerData);
};

export const useRegister = () => {
  return useMutation(sendRegisterInformation);
};
