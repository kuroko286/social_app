import { useState } from "react";
import noImage from "@/assets/img/no_image.jpg";

export const Image = ({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(noImage);
  };

  return (
    <img
      alt={alt}
      className={`w-full aspect-square object-contain ${className}`}
      src={imageSrc}
      onError={handleImageError}
    />
  );
};
