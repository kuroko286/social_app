export const OppositeMessage = ({ message }) => {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-[60%] bg-gray-300 text-white p-2 rounded-xl float-left">
        <p>{message}</p>
      </div>
    </div>
  );
};
