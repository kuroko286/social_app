export const Loading = ({ size = 8 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-${size} h-${size} border-4 border-gray-400 border-t-black rounded-full animate-spin`}
      ></div>
    </div>
  );
};
