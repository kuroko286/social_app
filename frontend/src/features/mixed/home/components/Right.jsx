import { UserItem } from "@/components/Element/UserItem";
import { getFriendsWithStatus } from "@/reducers/friendReducer";
import { useSelector } from "react-redux";

export const HomeRight = () => {
  const friendsWithStatus = useSelector(getFriendsWithStatus);
  return (
    <div className="fixed z-10 right-0 top-header bottom-0 w-[400px] p-3 overflow-auto">
      <ul>
        <p className="font-medium text-lg">Your Friends</p>

        {friendsWithStatus.map((friend) => (
          <UserItem key={friend._id} {...friend}></UserItem>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <p className="font-medium">Your Groups</p>
        {friendsWithStatus.map((friend) => (
          <UserItem key={friend._id} {...friend}></UserItem>
        ))}
      </ul>
    </div>
  );
};
