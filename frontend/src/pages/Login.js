import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputFiled } from "../components/Form/InputField";
import LoginValidate from "../validates/LoginValidate";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import axios from "axios";

const loginInputs = [
  {
    id: 1,
    name: "email",
    type: "text",
    placeholder: "Please enter your email",
    label: "Email",
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Please enter your password",
    label: "Password",
  },
];

export const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Handle login logic here
    const error = LoginValidate(credentials);
    if (error) {
      setLoginError(error);
      return;
    }
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
  const handleChange = (e) => {
    setLoginError({ email: "", password: "" });
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">
        Login
      </h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        onSubmit={handleLogin}
      >
        {loginInputs.map((item) => {
          return (
            <InputFiled
              key={item.id}
              {...item}
              onChange={handleChange}
              errorMessage={loginError[item.name]}
            ></InputFiled>
          );
        })}
        <div className="flex items-center justify-between">
          <input
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            type="submit"
            value="Login"
            disabled={loading}
          />
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {success && <span className="text-green-500">{success}</span>}
      </form>
      <p className="text-center text-gray-500 text-xs">
        Don't have an account?{" "}
        <Link className="underline text-blue-500" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};
