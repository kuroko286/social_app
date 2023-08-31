export const Badge = ({ size, bgColor, children, position }) => {
  return (
    <div className={`absolute ${position}`}>
      <div
        className={`w-${size} h-${size} flex justify-center items-center rounded-full text-white font-semibold ${bgColor}`}
      >
        {children}
      </div>
    </div>
  );
};
