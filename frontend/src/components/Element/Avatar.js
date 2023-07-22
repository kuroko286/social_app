export const Avatar = ({ src, size = 44, className }) => {
  return (
    <img
      src={src}
      alt="avatar"
      width={size}
      height={size}
      className={`rounded-full ${className}`}
    ></img>
  );
};
