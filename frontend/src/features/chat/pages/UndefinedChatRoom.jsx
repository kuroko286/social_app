import { useDispatch, useSelector } from "react-redux";
import ChatContainer from "../components/ChatContainer";
import ChatInput from "../components/ChatInput";
import ChatList from "../components/ChatList";
import { useEffect, useState } from "react";
import { getFriends } from "@/reducers/friendReducer";
import { useParams } from "react-router-dom";

function UndefinedChatRoom() {
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
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md m-2 flex items-center justify-center">
        <h4 className="text-lg text-gray-700">Select user to start chat</h4>
      </div>
    </div>
  );
}

export default UndefinedChatRoom;
