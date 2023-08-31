import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

export const getFriends = (config) => {
  return api.get("/friends", config);
};

export const useGetFriends = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useGet(getFriends, config);
};
