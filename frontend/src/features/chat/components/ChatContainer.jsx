import { useEffect, useState } from "react";
import api from "@/lib/axios";
import { useSelector } from "react-redux";
import { Message } from "./Message";

function ChatContainer() {
  const user = useSelector((state) => state.user);
  const messages = useSelector((state) => state.chat.messages);

  return (
    <div className="flex flex-col overflow-y-auto">
      {messages.map((message) => (
        <Message
          key={message.id}
          text={message.text}
          owner={message.from === user.id}
        />
      ))}
    </div>
  );
}

export default ChatContainer;
