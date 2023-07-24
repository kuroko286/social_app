import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Form/Input";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroup } from "../components/Form/RadioInput";
import { registerInputs, radiosInput } from "../validates/Register";

export const Register = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      gender: "male",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    handleRegister(data);
  });

  const handleRegister = async (registerData) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8000/register",
        registerData
      );
      const { message, ...rest } = data;

      setError("");
      setSuccess("Register success! Pls verify your email.");
      setLoading(false);
      setTimeout(() => {
        Cookies.set("user", JSON.stringify(rest));
        dispatch(login(rest));
        navigate("/");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 md:px-32 lg:px-64">
      <h2 className="text-2xl font-bold mb-5">Register Page</h2>
      <FormProvider {...methods}>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          {registerInputs.map((item) => {
            return <Input {...item} key={item.id}></Input>;
          })}
          <RadioGroup {...radiosInput}></RadioGroup>
          <div className="flex items-center justify-between">
            <input
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 cursor-pointer`}
              type="submit"
              value="Register"
              disabled={loading}
              onClick={onSubmit}
            />
          </div>
          {error && <span className="text-red-500">{error}</span>}
          {success && <span className="text-green-500">{success}</span>}
        </form>
      </FormProvider>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </p>
    </div>
  );
};
