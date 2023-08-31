import { Avatar } from "@/components/Element/Avatar";

function ChatList() {
  return (
    <div>
      <ul>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <li key={item}>
            <ChatItem />
          </li>
        ))}
      </ul>
    </div>
  );
}

export const ChatItem = ({ name, picture, online }) => {
  return (
    <div className="p-3 hover:bg-gray-200 flex items-center gap-3">
      <Avatar src={picture} size={40} online={online} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ChatList;
