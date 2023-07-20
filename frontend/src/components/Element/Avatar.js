export const Avatar = ({ src, size = 44 }) => {
  return (
    <img
      src={src}
      alt="avatar"
      width={size}
      height={size}
      className={`rounded-full`}
    ></img>
  );
};
