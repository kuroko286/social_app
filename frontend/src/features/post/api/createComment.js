import { useMutation } from "@/hooks/useMutation";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const sendComment = (bodyData, config, postId) => {
  return api.post(`posts/${postId}/comments`, bodyData, config);
};

export const useCreateComment = (postId) => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useMutation(sendComment, config, postId);
};
