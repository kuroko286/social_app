import { UserItem } from "@/components/Element/UserItem";

const defaultAvatar =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

const friends = [
  {
    id: 1,
    name: "Nguyen Van A",
    picture: defaultAvatar,
    online: true,
  },
  {
    id: 2,
    name: "Nguyen Van A",
    picture: defaultAvatar,
    online: true,
  },
  {
    id: 3,
    name: "Nguyen Van A",
    picture: defaultAvatar,
    online: false,
  },
  {
    id: 4,
    name: "Nguyen Van A",
    picture: defaultAvatar,
    online: true,
  },
];

export const HomeRight = () => {
  return (
    <div className="fixed z-10 right-0 top-header bottom-0 w-[400px] p-3 overflow-auto">
      <ul>
        <p className="font-medium text-lg">Your Friends</p>

        {friends.map((friend) => (
          <UserItem key={friend.id} {...friend}></UserItem>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <p className="font-medium">Your Groups</p>
        {friends.map((friend) => (
          <UserItem key={friend.id} {...friend}></UserItem>
        ))}
      </ul>
    </div>
  );
};
