export const Left = () => {
  return (
    <div>
      <Images />
      <Friends />
    </div>
  );
};

const Images = () => {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-lg">Images</h4>
        <p className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
          View all images
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <li key={item} className="cursor-pointer">
            <img
              src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
              className="w-44 aspect-square object-cover rounded-lg"
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Friends = () => {
  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-lg">Friends</h4>
        <p className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer">
          View all friends
        </p>
      </div>
      <ul className="grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <li key={item} className="cursor-pointer">
            <img
              src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
              className="w-44 aspect-square object-cover rounded-lg"
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
