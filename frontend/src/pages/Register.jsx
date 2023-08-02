import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { RadioGroup } from "@/components/Form/RadioInput";
import { login } from "@/reducers/userReducer";
import { radiosInput, registerInputs } from "@/validates/Register";
import { usePost } from "@/hooks/usePost";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseData, error, loading, sendPost } = usePost("/register");
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
      const data = await sendPost(registerData);
      sideEffect(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 md:px-32 lg:px-64">
      <h2 className="text-2xl font-bold mb-5">Register Page</h2>
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
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </p>
    </div>
  );
};
