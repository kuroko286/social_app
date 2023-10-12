export const OwnerMessage = ({ children }) => {
  return (
    <div className="w-full bg-transparent py-2">
      <div className="max-w-[60%] bg-blue-500 text-white p-2 rounded-xl float-right">
        <p>{children}</p>
      </div>
    </div>
  );
};
