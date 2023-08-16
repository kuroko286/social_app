import { useState } from "react";
import { Image } from "./Image";
import { LeftChevron, RightChevron } from "@/assets/svg";

const ImageGallery = ({ images }) => {
  const [index, setIndex] = useState(0);
  if (images.length === 0) return <></>;
  return (
    <div className="relative">
      {index !== 0 && (
        <button
          onClick={() => setIndex(index - 1)}
          className="absolute w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 left-1 rounded-full bg-gray-600/60"
        >
          <LeftChevron />
        </button>
      )}
      {index !== images.length - 1 && (
        <button
          onClick={() => setIndex(index + 1)}
          className="absolute w-10 h-10 flex items-center justify-center top-1/2 -translate-y-1/2 right-1 rounded-full bg-gray-600/60"
        >
          <RightChevron />
        </button>
      )}

      <Image src={images[index]} alt="image-post" />
      <ul className="flex items-center gap-3 absolute bottom-2 left-1/2 -translate-x-1/2">
        {images.map((url, i) => (
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
