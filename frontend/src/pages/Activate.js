import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verify } from "../reducers/userReducer";
import Cookies from "js-cookie";

export const Activate = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { verifyToken } = useParams();

  useEffect(() => {
    activateAccount();
  }, []);
  const activateAccount = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:8000/activate`,
        { token: verifyToken },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
      const user = Cookies.get("user");
      Cookies.set("user", JSON.stringify({ ...user, verified: true }));
      dispatch(verify());
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-200 rounded-xl">
      {success && <span className="text-green-500">{success}</span>}
      {error && <span className="text-red-500">{error}</span>}
      {loading && <span className="text-black">Loading...</span>}
    </div>
  );
};
