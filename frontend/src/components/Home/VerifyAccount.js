import { useSelector } from "react-redux";

export const VerifyAccount = () => {
  const user = useSelector((state) => state.user);
  const sendVerifyEmail = async () => {};
  return (
    <div className="p-3 rounded-md">
      <p>
        <span className="font-bold text-lg">Impotant: </span>Your account didn't
        verify. If not, we will <strong className="text-red-500">delete</strong>{" "}
        it after 30 days from registration.
      </p>
      <p
        className="font-medium text-blue-500 hover:underline cursor-pointer"
        onClick={sendVerifyEmail}
      >
        Click here to resend verification email
      </p>
    </div>
  );
};
