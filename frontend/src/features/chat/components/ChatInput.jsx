import { Button } from "@/components/Element/Button";
import api from "@/lib/axios";
import { handleSendMessage } from "@/realtime/socketConnection";
import { addMessage } from "@/reducers/chatReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ChatInput() {
  const [message, setMessage] = useState("");
  const { userId: currentFriendId } = useParams();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleSendChat = async () => {
    setMessage("");
    dispatch(addMessage({ text: message, from: user.id, to: currentFriendId }));
    handleSendMessage({ text: message, from: user.id, to: currentFriendId });
    await api.post(
      `/chat/${currentFriendId}`,
      { text: message },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log("send mess success");
  };
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="flex-grow bg-gray-200 p-2 rounded-xl focus:outline-none"
        placeholder="Type a message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <Button
        className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 active:bg-blue-700 focus:outline-none"
        onClick={handleSendChat}
      >
        Send
      </Button>
    </div>
  );
}

export default ChatInput;
