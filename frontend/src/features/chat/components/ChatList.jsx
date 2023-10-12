import { Avatar } from "@/components/Element/Avatar";
import { chooseFriend, getMessages } from "@/reducers/chatReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ChatList({ friends }) {
  const navigate = useNavigate();
  const currentFriend = useSelector((state) => state.chat.currentFriend);
  const dispatch = useDispatch();
  const handleChooseFriend = (friend) => {
    navigate(`/messages/${friend._id}`);
    dispatch(chooseFriend(friend));
    dispatch(getMessages(friend._id));
  };
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <ul className="">
        {friends.map((friend) => (
          <li
            key={friend}
            onClick={() => handleChooseFriend(friend)}
            className={`cursor-pointer hover:bg-gray-100 p-2 rounded ${
              currentFriend?._id === friend._id
                ? "bg-gray-200 hover:bg-gray-200"
                : ""
            }`}
          >
            <ChatItem
              name={friend.first_name + " " + friend.last_name}
              picture={friend.picture}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const ChatItem = ({ name, picture, online }) => {
  return (
    <div className="p-3 hover:bg-gray-200 flex items-center gap-3">
      <Avatar
        className="rounded-full border-2 border-blue-500"
        src={picture}
        size={40}
        online={online}
      />
      <div className="ml-3">
        <p className="font-semibold text-lg">{name}</p>
      </div>
    </div>
  );
};

export default ChatList;
