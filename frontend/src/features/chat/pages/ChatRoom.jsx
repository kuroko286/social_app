import { useDispatch, useSelector } from "react-redux";
import ChatContainer from "../components/ChatContainer";
import ChatInput from "../components/ChatInput";
import ChatList from "../components/ChatList";
import { useEffect } from "react";
import { getFriends } from "@/reducers/friendReducer";

function ChatRoom() {
  const dispatch = useDispatch();
  const { friends, status } = useSelector((state) => state.friends);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getFriends());
    }
  }, [status, dispatch]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-200">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md m-2">
        <ChatList friends={friends} />
      </div>
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md m-2 p-3">
        <ChatContainer />
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatRoom;
