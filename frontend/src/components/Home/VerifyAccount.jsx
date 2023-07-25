import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

export const VerifyAccount = () => {
  const user = useSelector((state) => state.user);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerifyEmail = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };
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
      {success && <span className="text-green-500">{success}</span>}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};
