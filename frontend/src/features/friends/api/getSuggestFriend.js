import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const getSuggestFriend = (config) => {
  return api.get("/friends/suggest", config);
};

export const useGetSuggestFriend = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useGet(getSuggestFriend, config);
};
