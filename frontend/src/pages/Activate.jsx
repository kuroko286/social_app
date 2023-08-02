import { Loading } from "@/components/Element/Loading";
import { usePost } from "@/hooks/usePost";
import { verify } from "@/reducers/userReducer";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const Activate = () => {
  const user = useSelector((state) => state.user);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const verifyToken = queryParams.get("token");
  const { responseData, error, loading, sendPost } = usePost(
    `activate/${verifyToken}`,
    config
  );

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
        await sendPost({});
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
