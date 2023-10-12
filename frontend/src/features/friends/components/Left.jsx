import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Left() {
  const [active, setActive] = useState(3);
  const navigate = useNavigate();
  return (
    <div className="fixed left-0 top-header bottom-0 p-3 border-r-2 border-black w-[400px]">
      <h2 className="text-2xl font-bold mb-4">Friends</h2>
      <ul>
        <li
          className={`${
            active == 1 ? "bg-gray-200" : ""
          } px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-xl `}
          onClick={() => {
            setActive(1);
            navigate("/friends/suggests");
          }}
        >
          Suggest Friends
        </li>
        <li
          className={`${
            active == 2 ? "bg-gray-200" : ""
          } px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-xl`}
          onClick={() => {
            setActive(2);
            navigate("/friends/requests");
          }}
        >
          Friend Requests
        </li>
        <li
          className={`${
            active == 3 ? "bg-gray-200" : ""
          } px-3 py-2 hover:bg-gray-200 cursor-pointer rounded-xl`}
          onClick={() => {
            setActive(3);
            navigate("/friends");
          }}
        >
          Your Friends
        </li>
      </ul>
    </div>
  );
}

export default Left;
