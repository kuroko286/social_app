import { useState } from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { AddFriendCard } from "./AddFriendCard";
import { unfriend } from "../api/updateRelationship";

export const FriendCard = ({ user }) => {
  const { token } = useSelector((state) => state.user);
  const [action, setAction] = useState("Friend");

  const handleUnfriend = async () => {
    try {
      setAction("Add Friend");
      await unfriend(user._id, token);
    } catch (error) {
      console.log(error);
    }
  };

  if (action === "Friend") {
    return <UserCard user={user} action={action} onClick={handleUnfriend} />;
  }
  return <AddFriendCard user={user} />;
};
