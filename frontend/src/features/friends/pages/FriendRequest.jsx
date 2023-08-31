import { Loading } from "@/components/Element/Loading";
import { useGetFriendRequests } from "../api/getFriendRequest";
import Left from "../components/Left";
import UserCard from "../components/UserCard";

// const user = {
//   picture:
//     "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
//   first_name: "Nguyen",
//   last_name: "Van A",
// };
function FriendRequest() {
  const { data: requests, error, loading } = useGetFriendRequests();
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
        <h1 className="text-2xl font-bold mb-4">Friend Requests</h1>
        <div className="grid grid-cols-4 gap-4">
          {requests.map((request) => (
            <UserCard key={request._id} action={"Accept"} user={request} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
