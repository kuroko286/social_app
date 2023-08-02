import { useState } from "react";

const urls = [
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
  "https://deviet.vn/wp-content/uploads/2019/04/vuong-quoc-anh.jpg",
  "https://www.thiennhien.net/wp-content/uploads/2022/05/170522_ngongvavit.jpg",
  "https://demoda.vn/wp-content/uploads/2022/04/hinh-cute-anh-cute-777x600.jpg",
];
const ImageGallery = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="relative">
      {index !== 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute top-1/2 -translate-y-1/2 left-1 p-2 rounded-full bg-gray-600/60"
        >
          {"<"}
        </button>
      )}
      {index !== urls.length - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute top-1/2 -translate-y-1/2 right-1 p-2 rounded-full bg-gray-600/60"
        >
          {">"}
        </button>
      )}

      <img
        src={urls[index]}
        alt=""
        className="w-full aspect-square object-contain"
      />
      <ul className="flex items-center gap-3 absolute bottom-2 left-1/2 -translate-x-1/2">
        {urls.map((url, i) => (
          <li
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-green-500" : "bg-gray-300"
            }`}
            key={url}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
