import { useSelector } from "react-redux";
import {
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Search,
  Watch,
} from "../../svg";
import { Badge } from "../Element/Badge";
import { useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Avatar } from "../Element/Avatar";
import { AllMenu } from "./AllMenu";
import { UserMenu } from "./UserMenu";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

function Header() {
  const user = useSelector((state) => state.user);
  const [searching, setSearching] = useState(false);
  const [showAllMenus, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const ref = useRef(null);
  useClickOutside(ref, () => {
    setSearching(false);
  });
  return (
    <header className="fixed flex justify-between items-center px-8 py-4 shadow-xl w-full">
      <div className="relative flex items-center gap-2">
        <Logo></Logo>
        <div className="flex items-center bg-gray-200 px-3 py-2 gap-2 rounded-3xl">
          <Search></Search>
          <input
            type="text"
            placeholder="Search something"
            className="outline-none border-none bg-transparent grow"
            onClick={() => setSearching(true)}
          />
        </div>
        {searching && (
          <div
            className="absolute w-full top-full bg-white shadow-lg p-4"
            ref={ref}
          >
            <header className="flex justify-between items-center">
              <p>Recent</p>
              <p className="text-blue-500 cursor-pointer">Edit</p>
            </header>
            <ul className="mt-4">
              <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 duration-200">
                <Avatar size={32} src={defaultAvatar}></Avatar>
                <p>Lorem ipsum</p>
              </li>
              <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 duration-200">
                <Avatar size={32} src={defaultAvatar}></Avatar>
                <p>Lorem ipsum</p>
              </li>
              <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 duration-200">
                <Avatar size={32} src={defaultAvatar}></Avatar>
                <p>Lorem ipsum</p>
              </li>
              <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 duration-200">
                <Avatar size={32} src={defaultAvatar}></Avatar>
                <p>Lorem ipsum</p>
              </li>
              <li className="flex items-center gap-2 py-2 cursor-pointer hover:bg-gray-100 duration-200">
                <Avatar size={32} src={defaultAvatar}></Avatar>
                <p>Lorem ipsum</p>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div>
        <ul className="flex justify-between items-center gap-12">
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <HomeActive></HomeActive>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <Friends></Friends>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <Watch></Watch>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <Market></Market>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <Gaming></Gaming>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-2 relative">
          <li
            className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200"
            onClick={() => setShowAllMenu(!showAllMenus)}
          >
            <Menu></Menu>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200">
            <Messenger></Messenger>
          </li>
          <li className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200 relative">
            <Notifications></Notifications>
            <Badge>5</Badge>
          </li>
          <li
            className="bg-gray-200 rounded-full cursor-pointer"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <Avatar src={user?.picture || defaultAvatar}></Avatar>
          </li>
          {showAllMenus && <AllMenu></AllMenu>}
          {showUserMenu && <UserMenu></UserMenu>}
        </ul>
      </div>
    </header>
  );
}

export default Header;
