import { Avatar } from "@/components/Element/Avatar";
import { FriendsActive } from "@/assets/svg";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

export const HomeLeft = () => {
  return (
    <div className="fixed z-10 left-0 bottom-0 top-header w-[400px] p-3 overflow-auto">
      <ul>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <Avatar src={defaultAvatar}></Avatar>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Friends</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Friends</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Friends</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Friends</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Friends</p>
        </li>
      </ul>
      <hr></hr>
      <ul>
        <p className="font-medium">Your shortcut</p>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Nguyen Van A</p>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
          <FriendsActive></FriendsActive>
          <p className="font-medium">Nguyen Van A</p>
        </li>
      </ul>
    </div>
  );
};
