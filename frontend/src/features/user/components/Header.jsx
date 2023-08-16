import { Avatar } from "@/components/Element/Avatar";
import { Button } from "@/components/Element/Button";
import { useState } from "react";
import axios from "axios";

export const Header = ({
  user,
  posts,
  relationship,
  owner = true,
  index,
  setIndex,
}) => {
  return owner ? (
    <OwnerProfileHeader
      user={user}
      posts={posts}
      index={index}
      setIndex={setIndex}
    />
  ) : (
    <OtherProfileHeader
      user={user}
      posts={posts}
      relationship={relationship}
      index={index}
      setIndex={setIndex}
    />
  );
};

export const Navbar = ({ index, setIndex }) => {
  return (
    <ul className="flex items-center gap-12">
      <li
        className={`p-2 font-medium text-xl rounded-lg hover:bg-gray-200 cursor-pointer ${
          index === 0 ? "text-blue-600" : ""
        }`}
        onClick={() => setIndex(0)}
      >
        Posts
      </li>
      <li
        className={`p-2 font-medium text-xl rounded-lg hover:bg-gray-200 cursor-pointer ${
          index === 1 ? "text-blue-600" : ""
        }`}
        onClick={() => setIndex(1)}
      >
        Introduce
      </li>
      <li
        className={`p-2 font-medium text-xl rounded-lg hover:bg-gray-200 cursor-pointer ${
          index === 2 ? "text-blue-600" : ""
        }`}
        onClick={() => setIndex(2)}
      >
        Friends
      </li>
    </ul>
  );
};

export const OwnerProfileHeader = ({ user, posts, index, setIndex }) => {
  const [model, setModel] = useState(false);
  const [avatar, setAvatar] = useState();

  const handleAvatarChange = async (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("picture", avatar);
    const { data } = await axios.put(
      "http://localhost:8000/user/avatar",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
  };
  return (
    <>
      <div className="flex justify-between gap-24 mt-10">
        <div>
          <Avatar
            src={
              "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
            }
            size={200}
            onClick={() => setModel(true)}
          ></Avatar>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <h3>{user.first_name + " " + user.last_name}</h3>
            <Button className="bg-blue-500 text-white">Edit Profile</Button>
          </div>
          <div className="flex items-center gap-6">
            <p>{posts.length} posts</p>
            <p>{user.followers.length} Followers</p>
            <p>{user.following.length} Following</p>
          </div>
        </div>
      </div>
      <Navbar index={index} setIndex={setIndex} />
      {model && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-500/50 z-20">
          <ul className="w-56 rounded-xl shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 text-center">
            <li className=" font-medium">
              <input
                type="file"
                name="picture"
                className="hidden"
                id="avatarinput"
                onChange={handleAvatarChange}
              ></input>
              <label htmlFor="avatarinput" className="cursor-pointer">
                Upload image
              </label>
              {avatar && (
                <>
                  <img
                    src={`${URL.createObjectURL(avatar)}`}
                    className="rounded-xl w-32 h-32 object-contain bg-black"
                    alt="avatar"
                  />
                  <button type="submit" onClick={handleSubmit}>
                    Save
                  </button>
                </>
              )}
            </li>
            <li className="cursor-pointer font-medium ">
              Delete current avatar
            </li>
            <li
              className="cursor-pointer font-medium text-red-500"
              onClick={() => setModel(false)}
            >
              Cancel
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export const OtherProfileHeader = ({
  user,
  posts,
  relationship,
  index,
  setIndex,
}) => {
  return (
    <>
      <div className="flex justify-between gap-24 mt-10">
        <div>
          <Avatar
            src={
              "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
            }
            size={200}
          ></Avatar>
        </div>
        <div>
          <div className="flex items-center gap-6">
            <h3>{user.first_name + " " + user.last_name}</h3>
            <FriendStatusButton relationship={relationship} />
            <FollowStatusButton relationship={relationship} />
            <Button className="bg-gray-500 text-white">Chat</Button>
          </div>
          <div className="flex items-center gap-6">
            <p>{posts.length} posts</p>
            <p>{user.followers} Followers</p>
            <p>{user.following} Following</p>
          </div>
        </div>
      </div>
      <Navbar index={index} setIndex={setIndex} />
    </>
  );
};

const FriendStatusButton = ({ relationship }) => {
  const { friends, requests, beRequests } = relationship;
  if (friends)
    return (
      <Button className="bg-gray-500 font-medium text-black">Friend</Button>
    );
  if (requests)
    return (
      <Button className="bg-gray-500 font-medium text-black">
        Sended Request
      </Button>
    );
  if (beRequests)
    return (
      <Button className="bg-gray-500 font-medium text-black">
        Accept Request
      </Button>
    );
  return (
    <Button className="bg-blue-500 font-medium text-white">Add Friend</Button>
  );
};

const FollowStatusButton = ({ relationship }) => {
  const { following } = relationship;
  if (following)
    return (
      <Button className="bg-gray-500 font-medium text-black">Following</Button>
    );
  return <Button className="bg-blue-500 font-medium text-white">Follow</Button>;
};
