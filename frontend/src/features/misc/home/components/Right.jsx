import { Avatar } from "@/components/Element/Avatar";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

export const HomeRight = () => {
  return (
    <div className="fixed z-10 right-0 top-header bottom-0 w-[400px] p-3 overflow-auto">
      <ul>
        <p className="font-medium text-lg">Your Friends</p>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
      </ul>
      <hr></hr>
      <ul>
        <p className="font-medium">Your Groups</p>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
      </ul>
    </div>
  );
};
