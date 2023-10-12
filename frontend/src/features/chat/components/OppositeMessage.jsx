export const OppositeMessage = ({ children }) => {
  return (
    <div className="w-full bg-transparent py-2">
      <div className="max-w-[60%] bg-gray-300 rounded-xl float-left p-2">
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
};
