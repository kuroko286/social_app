import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";

export const getAllPosts = (config, queryKey) => {
  return api.get("/posts", config);
};

export const useGetAllPosts = () => {
  return useGet(getAllPosts);
};
