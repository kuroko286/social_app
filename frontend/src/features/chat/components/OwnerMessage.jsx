export const OwnerMessage = ({ message }) => {
  return (
    <div className="w-full bg-transparent">
      <div className="max-w-[60%] bg-blue-500 text-white p-2 rounded-xl float-right">
        <p>{message}</p>
      </div>
    </div>
  );
};
