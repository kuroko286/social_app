import { ModelContext } from "@/layout/HomeLayout";
import api from "@/lib/axios";
import { useContext } from "react";
import { useSelector } from "react-redux";

export const PostMenu = ({ post }) => {
  const user = useSelector((state) => state.user);
  if (post.user === user.id) return <OwnerPostMenu post={post} />;

  return <OtherPostMenu />;
};

const OtherPostMenu = () => {
  const [model, setModel] = useContext(ModelContext);
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl max-w-[560px] w-full">
      <ul>
        <li className="text-center p-2 cursor-pointer hover:bg-gray-200">
          Likes
        </li>
        <li className="text-center p-2 cursor-pointer hover:bg-gray-200">
          Shares
        </li>
        <li
          className="text-red-500 font-medium text-center p-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setModel("none")}
        >
          Cancel
        </li>
      </ul>
    </div>
  );
};

const OwnerPostMenu = ({ post }) => {
  const [model, setModel] = useContext(ModelContext);
  const user = useSelector((state) => state.user);
  const handleDeletePost = async () => {
    await api.delete(`/posts/${post._id}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    setModel("none");
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl max-w-[560px] w-full">
      <ul>
        <li className="text-center p-2 cursor-pointer hover:bg-gray-200">
          Likes
        </li>
        <li className="text-center p-2 cursor-pointer hover:bg-gray-200">
          Shares
        </li>
        <li
          className="text-red-500 font-medium text-center p-2 cursor-pointer hover:bg-gray-200"
          onClick={handleDeletePost}
        >
          Delete post
        </li>
        <li
          className="text-red-500 font-medium text-center p-2 cursor-pointer hover:bg-gray-200"
          onClick={() => setModel("none")}
        >
          Camcel
        </li>
      </ul>
    </div>
  );
};
