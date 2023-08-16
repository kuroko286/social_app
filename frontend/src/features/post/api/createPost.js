import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const createPost = (bodyData, config, queryKey) => {
  return api.post("/posts", bodyData, config);
};

export const useCreatePost = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useMutation(createPost, config);
};
