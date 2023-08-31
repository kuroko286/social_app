import { useState } from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { acceptFriend, removeRequest } from "../api/updateRelationship";

export const RequestCard = ({ user }) => {
  const { token } = useSelector((state) => state.user);
  const [action, setAction] = useState("Request");

  const handleAcceptFriend = async () => {
    try {
      setAction("");
      await acceptFriend(user._id, token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoveRequest = async () => {
    try {
      setAction("");
      await removeRequest(user._id, token);
    } catch (error) {
      console.log(error);
    }
  };

  if (action === "Request") {
    return (
      <UserCard
        user={user}
        action={action}
        onClick={handleAcceptFriend}
        onRemove={handleRemoveRequest}
      />
    );
  }
  return <></>;
};
