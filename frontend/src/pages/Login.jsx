import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { usePost } from "@/hooks/usePost";
import { login } from "@/reducers/userReducer";
import { loginInputs } from "@/validates/Login";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseData, error, loading, sendPost } = usePost("/login");

  const sideEffect = (responseData) => {
    const { message, ...rest } = responseData;
    setTimeout(() => {
      Cookies.set("user", JSON.stringify(rest));
      dispatch(login(rest));
      navigate("/");
    }, 2000);
  };
  const handleLogin = async (loginData) => {
    try {
      const data = await sendPost(loginData);
      sideEffect(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">
        Login
      </h2>
      <Form
        loading={loading}
        error={error}
        submitButton={"Login"}
        responseData={responseData}
        successMeessage="Login successfully"
        handleSubmit={handleLogin}
      >
        {loginInputs.map((item) => {
          return <Input {...item} key={item.id}></Input>;
        })}
      </Form>
      <p className="text-center text-gray-500 text-xs">
        Dont have an account?{" "}
        <Link className="underline text-blue-500" to="/register">
          Register
        </Link>
      </p>
      <p className="text-center text-gray-500 text-xs">
        Forgot password?{" "}
        <Link className="underline text-blue-500" to="/reset">
          Reset password
        </Link>
      </p>
    </div>
  );
};
