import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { login } from "@/reducers/userReducer";
import { loginInputs } from "@/validates/Login";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api/login";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseData, error, loading, mutate } = useLogin();

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
      const data = await mutate(loginData);
      sideEffect(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
  );
};
