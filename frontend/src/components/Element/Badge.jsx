export const Badge = ({ size, bgColor, children, position }) => {
  return (
    <div className={`absolute ${position}`}>
      <div
        style={{
          width: size,
          height: size,
        }}
        className={`flex justify-center items-center rounded-full text-white font-semibold ${bgColor}`}
      >
        {children}
      </div>
    </div>
  );
};
