import { FriendsActive, Group, Market, Saved, Watch } from "@/assets/svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const options = [
  {
    icon: <FriendsActive />,
    to: "/friends",
    label: "Friends",
  },
  {
    icon: <Saved />,
    label: "Saved",
  },
  {
    icon: <Group />,
    label: "Group",
  },
  {
    icon: <Watch />,
    label: "Video",
  },
  {
    icon: <Market />,
    label: "Marketplace",
  },
];

const shortcuts = [
  {
    icon: <FriendsActive />,

    label: "Friends",
  },
  {
    icon: <Saved />,
    label: "Saved",
  },
  {
    icon: <Group />,
    label: "Group",
  },
];
// shortcut can be retrived from query by useeffect, or saved in cookie or localstorage. Below just for palceholder.

export const HomeLeft = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className="fixed z-10 left-0 bottom-0 top-header w-[400px] p-3 overflow-auto">
      <ul>
        {options.map((option) => (
          <Link to={option.to} key={option.label}>
            <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
              {option.icon}
              <p className="font-medium">{option.label}</p>
            </li>
          </Link>
        ))}
      </ul>
      <hr></hr>
      <ul>
        <p className="font-medium">Your shortcut</p>
        {shortcuts.map((shortcut) => (
          <>
            <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
              {shortcut.icon}
              <p className="font-medium">{shortcut.label}</p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};
