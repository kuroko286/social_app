import { Loading } from "@/components/Element/Loading";
import { verify } from "@/reducers/userReducer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActivateAccount, useGetVerifyToken } from "../api/activate";

export const Activate = () => {
  const user = useSelector((state) => state.user);
  const { responseData, error, loading, mutate } = useActivateAccount();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const sideEffect = () => {
    Cookies.set("user", JSON.stringify({ ...user, verified: true }));
    dispatch(verify());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await mutate();
        sideEffect();
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      verifyUser();
    }, 1000);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gray-200 rounded-xl">
      {responseData && (
        <span className="text-green-500">{responseData.message}</span>
      )}
      {error && <span className="text-red-500">{error}</span>}
      {loading && (
        <span>
          <Loading size={32} />
        </span>
      )}
    </div>
  );
};
