import { Loading } from "@/components/Element/Loading";
import { useGetSuggestFriend } from "../api/getSuggestFriend";
import Left from "../components/Left";
import { useSelector } from "react-redux";
import { AddFriendCard } from "../components/AddFriendCard";

function FriendSuggest() {
  const {
    user: { id },
  } = useSelector((state) => state);
  const { data: suggestFriend, error, loading } = useGetSuggestFriend();

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
        <h1 className="text-2xl font-bold mb-4">User you may know</h1>
        <div className="grid grid-cols-4 gap-4">
          {suggestFriend.map((user) => (
            <AddFriendCard user={user} key={user._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendSuggest;
