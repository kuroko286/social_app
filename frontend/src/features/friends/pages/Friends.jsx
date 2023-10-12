import { Loading } from "@/components/Element/Loading";
import { useGetFriends } from "../api/getFriends";
import Left from "../components/Left";
import UserCard from "../components/UserCard";
import { FriendCard } from "../components/FriendCard";

function Friends() {
  const { data: friends, error, loading } = useGetFriends();
  if (loading) {
    return <Loading size={24} />;
  }
  if (error) {
    return <h1 className="text-red-500 font-medium text-3xl">{error}</h1>;
  }
  return (
    <div>
      <Left />
      <div className="ml-[400px] p-6">
        <h1 className="text-2xl font-bold mb-4">Your Friends</h1>
        <div className="grid grid-cols-4 gap-4">
          {friends.map((friend) => (
            <FriendCard key={friend._id} user={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Friends;
