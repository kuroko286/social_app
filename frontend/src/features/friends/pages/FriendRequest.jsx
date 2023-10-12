import { Loading } from "@/components/Element/Loading";
import { useGetFriendRequests } from "../api/getFriendRequest";
import Left from "../components/Left";
import { RequestCard } from "../components/RequestCard";

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
            <RequestCard key={request._id} user={request} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FriendRequest;
