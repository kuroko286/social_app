import { useDispatch, useSelector } from "react-redux";
import {
  Friends,
  Gaming,
  HomeActive,
  Logo,
  Market,
  Menu,
  Messenger,
  Notifications,
  Watch,
} from "@/assets/svg";
import { Badge } from "@/components/Element/Badge";
import { useState } from "react";
import { Avatar } from "@/components/Element/Avatar";
import { AllMenu } from "./AllMenu";
import { UserMenu } from "./UserMenu";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { NotificationList } from "@/features/notification/components/NotificationItem";
import { getNumberOfNewNotifications } from "@/features/notification/utils";

function Header() {
  const notifications = useSelector((state) => state.notifications);
  const newNotificationNumber = getNumberOfNewNotifications(
    notifications.notifications
  );

  const [notificationCount, setNotificationCount] = useState(
    newNotificationNumber
  );

  const user = useSelector((state) => state.user);
  const [showAllMenus, setShowAllMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickNotification = () => {
    setShowNotification(!showNotification);
    setNotificationCount(0);
  };

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
          <li
            className="p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200"
            onClick={() => navigate("/messages")}
          >
            <Messenger></Messenger>
          </li>
          <li
            className="relative p-3 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 duration-200"
            onClick={handleClickNotification}
          >
            <Notifications></Notifications>
            {notificationCount > 0 && (
              <Badge
                size={32}
                bgColor={"bg-red-500"}
                position={"-top-4 -right-2"}
              >
                {notificationCount}
              </Badge>
            )}
            {showNotification && (
              <div className="absolute w-[300px] right-0 top-12 p-3 rounded-md bg-white border-2 shadow-xl">
                <NotificationList />
              </div>
            )}
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
