export const Avatar = ({ src, size = 44, className, ...props }) => {
  return (
    <img
      src={src}
      alt="avatar"
      width={size}
      height={size}
      className={`rounded-full cursor-pointer ${className}`}
      {...props}
    ></img>
  );
};
