import { useState } from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import {
  cancelFriendRequest,
  sendFriendRequest,
} from "../api/updateRelationship";

export const AddFriendCard = ({ user }) => {
  const { token } = useSelector((state) => state.user);
  const [action, setAction] = useState("Add Friend");

  const handleSendFriendRequest = async () => {
    try {
      setAction("Cancel Request");
      await sendFriendRequest(user._id, token);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelFriendRequest = async () => {
    try {
      setAction("Add Friend");
      await cancelFriendRequest(user._id, token);
    } catch (error) {
      console.log(error);
    }
  };

  if (action === "Add Friend") {
    return (
      <UserCard user={user} action={action} onClick={handleSendFriendRequest} />
    );
  }
  return (
    <UserCard user={user} action={action} onClick={handleCancelFriendRequest} />
  );
};
