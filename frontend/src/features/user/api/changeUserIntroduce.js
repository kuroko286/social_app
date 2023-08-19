import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const changeUserIntroduce = (bodyData, config, queryKey) => {
  return api.put("/users", bodyData, config);
};

export const useChangeUserIntroduce = () => {
  const { id, token } = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return useMutation(changeUserIntroduce, config);
};
