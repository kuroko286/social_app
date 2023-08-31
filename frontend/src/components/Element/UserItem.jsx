import { Avatar } from "./Avatar";

export const UserItem = ({ picture, name, online = false, ...props }) => {
  return (
    <div
      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
      {...props}
    >
      <Avatar src={picture} online={online} />
      <p className="font-medium">{name}</p>
    </div>
  );
};
