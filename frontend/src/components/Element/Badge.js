export const Badge = ({ children }) => {
  return (
    <div className="absolute -top-4 -right-2">
      <span
        className={`block w-8 h-8 text-center leading-8 rounded-full bg-red-500 text-white font-semibold`}
      >
        {children}
      </span>
    </div>
  );
};
