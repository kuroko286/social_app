import { Feeling, LiveVideo, Photo } from "@/assets/svg";
import { Avatar } from "@/components/Element/Avatar";
import { ModelContext } from "@/layout/HomeLayout";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const CreatePost = () => {
  const [model, setModel] = useContext(ModelContext);
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-gray-200 p-3 rounded-md">
        <div className="flex gap-4">
          <Avatar src={user.picture}></Avatar>
          <input
            type="text"
            placeholder="What is in your mind?"
            className="outline-none w-full rounded-3xl p-2"
            onClick={() => setModel("create-post")}
          />
        </div>
        <hr />

        <ul className="flex items-center justify-between mt-3">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <LiveVideo color={"#FF0000"} />
            <p className="font-medium text-lg">Live Stream</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <Photo color={"#00FF00"} />
            <p className="font-medium text-lg">Photo/Video</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <Feeling color={"#00FFFF"} />
            <p className="font-medium text-lg">Feeling/Activity</p>
          </li>
        </ul>
      </div>
    </>
  );
};
