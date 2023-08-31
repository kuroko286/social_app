import { useGet } from "@/hooks/useGet";
import api from "@/lib/axios";
import { useSelector } from "react-redux";

const getFriendRequest = (config) => {
  return api.get("/friends/requests", config);
};

export const useGetFriendRequests = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  return useGet(getFriendRequest, config);
};
