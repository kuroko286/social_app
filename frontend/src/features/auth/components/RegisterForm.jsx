import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { RadioGroup } from "@/components/Form/RadioInput";
import { login } from "@/reducers/userReducer";
import { radiosInput, registerInputs } from "@/validates/Register";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../api/register";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseData, error, loading, mutate } = useRegister();
  const initalState = {
    gender: "male",
  };

  const sideEffect = (responseData) => {
    const { message, ...rest } = responseData;
    setTimeout(() => {
      Cookies.set("user", JSON.stringify(rest));
      dispatch(login(rest));
      navigate("/");
    }, 2000);
  };

  const handleRegister = async (registerData) => {
    try {
      const data = await mutate(registerData);
      sideEffect(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      loading={loading}
      submitButton={"Register"}
      error={error}
      responseData={responseData}
      initalState={initalState}
      successMeessage="Register successfully"
      handleSubmit={handleRegister}
    >
      {registerInputs.map((item) => {
        return <Input {...item} key={item.id}></Input>;
      })}
      <RadioGroup {...radiosInput}></RadioGroup>
    </Form>
  );
};
