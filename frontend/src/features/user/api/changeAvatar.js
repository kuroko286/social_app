import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const changeAvatar = (bodyData, config, queryKey) => {
  return api.put("/user/avatar", bodyData, config);
};

export const useChangeAvatar = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useMutation(changeAvatar, config);
};
