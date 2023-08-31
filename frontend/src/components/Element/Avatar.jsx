import { Badge } from "./Badge";

export const Avatar = ({
  src,
  size = 44,
  online = false,
  className,
  ...props
}) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt="avatar"
        width={size}
        height={size}
        className={`rounded-full cursor-pointer ${className}`}
        {...props}
      ></img>
      {online && (
        <Badge
          position={"bottom-0 right-0"}
          size={4}
          bgColor={"bg-green-500"}
        />
      )}
    </div>
  );
};
