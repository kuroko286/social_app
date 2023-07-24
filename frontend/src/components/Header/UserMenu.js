import { useSelector } from "react-redux";
import { Avatar } from "../Element/Avatar";
import { Gaming, ArrowRight, Light, Dark } from "../../svg";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

export const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const [light, setLight] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("user");
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="absolute w-[342px] p-3 rounded-lg top-full -right-3 mt-1 z-10 shadow-lg bg-white border-2">
      <header className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
        <Avatar src={user?.picture || defaultAvatar}></Avatar>
        <p className="font-medium text-lg">Nguyen Van A</p>
      </header>
      <div>
        <ul>
          <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center  gap-3">
              <Gaming></Gaming>
              <p className="font-medium">Settings & Private</p>
            </div>
            <ArrowRight></ArrowRight>
          </li>
          <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center  gap-3">
              <Gaming></Gaming>
              <p className="font-medium">Support</p>
            </div>
            <ArrowRight></ArrowRight>
          </li>
          <li
            className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={() => setLight(!light)}
          >
            <div className="flex items-center  gap-3">
              <Gaming></Gaming>
              <p className="font-medium">Dark mode</p>
            </div>
            {light ? <Light></Light> : <Dark></Dark>}
          </li>
          <li className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <Gaming></Gaming>
            <p className="font-medium">Feedback</p>
          </li>
          <li
            className="flex gap-3 items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer"
            onClick={handleLogout}
          >
            <Gaming></Gaming>
            <p className="font-medium">Logout</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
