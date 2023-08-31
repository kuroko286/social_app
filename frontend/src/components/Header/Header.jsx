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
} from "@/assets/svg";
import { Badge } from "@/components/Element/Badge";
import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Avatar } from "@/components/Element/Avatar";
import { AllMenu } from "./AllMenu";
import { UserMenu } from "./UserMenu";
import { useNavigate } from "react-router-dom";
import { UserItem } from "../Element/UserItem";
import { Cancel } from "../Icon/Icons";
import { useGetSearchHistory } from "@/features/search/api";
import api from "@/lib/axios";
import { Loading } from "../Element/Loading";
import SearchBar from "./SearchBar";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

function Header() {
  const user = useSelector((state) => state.user);

  const [showAllMenus, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed z-20 h-header flex justify-between items-center px-8 py-4 shadow-xl w-full bg-white">
      <div className="relative flex items-center gap-2">
        <span className="cursor-pointer" onClick={() => navigate("/")}>
          <Logo></Logo>
        </span>
        <SearchBar />
      </div>
      <div>
        <ul className="flex justify-between items-center gap-12">
          <li
            className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200"
            onClick={() => navigate("/")}
          >
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
            <Badge size={8} bgColor={"bg-red-500"} position={"-top-4 -right-2"}>
              5
            </Badge>
          </li>
          <li
            className="bg-gray-200 rounded-full cursor-pointer"
            onClick={() => setShowUserMenu(!showUserMenu)}
          >
            <Avatar src={user.picture}></Avatar>
          </li>
          {showAllMenus && <AllMenu></AllMenu>}
          {showUserMenu && <UserMenu></UserMenu>}
        </ul>
      </div>
    </header>
  );
}

export const NotAuthHeader = () => {
  return (
    <header className="fixed z-20 h-header flex justify-between items-center px-8 py-4 shadow-xl w-full bg-white">
      <div className="relative flex items-center gap-2">
        <span className="cursor-pointer">
          <Logo></Logo>
        </span>
      </div>
    </header>
  );
};

export default Header;
