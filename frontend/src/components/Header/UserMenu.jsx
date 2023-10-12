import { useSelector } from "react-redux";
import { Avatar } from "@/components/Element/Avatar";
import { Gaming, RightArrow, Light, Dark } from "@/assets/svg";
import { useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "@/reducers/userReducer";
import { useNavigate } from "react-router-dom";

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
      <header
        className="flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 cursor-pointer"
        onClick={() => navigate("/profile")}
      >
        <Avatar src={user.picture}></Avatar>
        <p className="font-medium text-lg">
          {user.first_name + " " + user.last_name}
        </p>
      </header>
      <div>
        <ul>
          <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center  gap-3">
              <Gaming></Gaming>
              <p className="font-medium">Settings & Private</p>
            </div>
            <RightArrow />
          </li>
          <li className="flex justify-between items-center p-2 rounded-md hover:bg-gray-200 cursor-pointer">
            <div className="flex items-center  gap-3">
              <Gaming></Gaming>
              <p className="font-medium">Support</p>
            </div>
            <RightArrow />
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
