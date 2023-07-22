import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Form/Input";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";

const loginInputs = [
  {
    id: 1,
    label: "Email",
    type: "text",
    name: "email",
    placeholder: "Please enter your email",
    validation: {
      required: {
        value: true,
        message: `Email is required`,
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: 2,
    label: "Password",
    type: "password",
    name: "password",
    placeholder: "Please enter your password",
    validation: {
      required: {
        value: true,
        message: "Password is required",
      },
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
      },
      maxLength: {
        value: 28,
        message: "Password must be less than 28 characters",
      },
    },
  },
];

export const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm();

  const handleLogin = async (credentials) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8000/login",
        credentials
      );
      const { message, ...rest } = data;

      setError("");
      setSuccess("Login success!");
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

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    handleLogin(data);
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">
        Login
      </h2>
      <FormProvider {...methods}>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          {loginInputs.map((item) => {
            return <Input {...item} key={item.id}></Input>;
          })}
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
              type="submit"
              onClick={onSubmit}
              value="Login"
              disabled={loading}
            />
          </div>
          {error && <span className="text-red-500">{error}</span>}
          {success && <span className="text-green-500">{success}</span>}
        </form>
      </FormProvider>
      <p className="text-center text-gray-500 text-xs">
        Don't have an account?{" "}
        <Link className="underline text-blue-500" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};
