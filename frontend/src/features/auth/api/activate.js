import { useMutation } from "@/hooks/useMutation";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import api from "@/lib/axios";

export const sendVerifyToken = (bodyData, config, verifyToken) => {
  return api.post(`/activate/${verifyToken}`, bodyData, config);
};

export const useActivateAccount = () => {
  const verifyToken = useGetVerifyToken();
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  return useMutation(sendVerifyToken, config, verifyToken);
};

export const useGetVerifyToken = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const verifyToken = queryParams.get("token");
  return verifyToken;
};
