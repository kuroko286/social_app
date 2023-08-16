import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";

export const sendUserCredentials = ({ email, password }) => {
  return api.post("/login", {
    email,
    password,
  });
};

export const useLogin = () => {
  return useMutation(sendUserCredentials);
};
