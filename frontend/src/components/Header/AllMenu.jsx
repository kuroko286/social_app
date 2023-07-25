import { Search } from "../../svg";
const menus = [
  {
    type: "Social",
    items: [
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    type: "Social",
    items: [
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
  {
    type: "Social",
    items: [
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      {
        className: "lifeEvent_icon",
        name: "Events",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
    ],
  },
];
const actions = [
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
  {
    className: "lifeEvent_icon",
    name: "Events",
  },
];
export const AllMenu = () => {
  return (
    <div className="absolute left-1/2 -translate-x-full top-full mt-1 z-10 shadow-lg w-[660px] p-3 rounded-md bg-white border-2">
      <header className="font-medium mb-3">Menu</header>
      <div className="grid grid-cols-[1.75fr,1fr] h-[80vh] overflow-auto relative">
        <div className="bg-gray-200 p-3 rounded-lg">
          <div className="flex items-center bg-gray-200 px-3 py-2 gap-2 rounded-3xl border-2 border-black">
            <Search></Search>
            <input
              type="text"
              placeholder="Search something in menu"
              className="outline-none border-none bg-transparent grow"
            />
          </div>
          {menus.map(({ type, items }) => (
            <div className="mt-3">
              <h4 className="font-medium text-lg">{type}</h4>
              <ul className="">
                {items.map(({ className, name, description }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 hover:bg-gray-300 rounded-lg p-2 cursor-pointer"
                  >
                    <div className={`${className}`}></div>
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm">{description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-gray-200 p-3 w-[200px] fixed right-8 rounded-lg">
          <header className="font-medium text-lg">Create</header>
          <ul>
            {actions.map(({ className, name }) => (
              <li className="flex items-center gap-3 p-2 hover:bg-gray-300 rounded-lg cursor-pointer">
                <div className={`${className}`}></div>
                <p className="font-medium">{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
