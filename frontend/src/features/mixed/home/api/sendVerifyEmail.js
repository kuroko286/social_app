import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const sendVerificationEmail = (bodyData, config, queryKey) => {
  return api.post("/sendVerification", bodyData, config);
};

export const useVerifyAccount = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useMutation(sendVerificationEmail, config);
};
