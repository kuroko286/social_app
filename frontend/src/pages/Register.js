import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputFiled } from "../components/Form/InputField";
import RegisterValidate from "../validates/RegisterValidate";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  bYear: "",
  bMonth: "",
  bDay: "",
  gender: "",
};

const registerInputs = [
  {
    id: 1,
    name: "first_name",
    type: "text",
    placeholder: "Please enter your first name",
    label: "First name",
  },
  {
    id: 2,
    name: "last_name",
    type: "text",
    placeholder: "Please enter your last name",
    label: "Last name",
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Please enter your email",
    label: "Email",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Please enter your password",
    label: "Password",
  },
  {
    id: 5,
    name: "bYear",
    max: new Date().getFullYear(),
    min: 1900,
    type: "number",
    placeholder: "Please enter your birth year",
    label: "Birth year",
  },
  {
    id: 6,
    name: "bMonth",
    min: 1,
    max: 12,
    type: "number",
    placeholder: "Please enter your birth month",
    label: "Birth month",
  },
  {
    id: 7,
    name: "bDay",
    min: 1,
    max: 31,
    type: "number",
    placeholder: "Please enter your birth day",
    label: "Birth day",
  },
];
export const Register = () => {
  const [userInfo, setUserInfo] = useState(initialState);
  const [registerError, setRegisterError] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    const errors = RegisterValidate(userInfo);
    if (errors) {
      setRegisterError(errors);
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8000/register",
        userInfo
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
  const handleChange = (e) => {
    setRegisterError(initialState);
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 md:px-32 lg:px-64">
      <h2 className="text-2xl font-bold mb-5">Register Page</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3"
        onSubmit={handleRegister}
      >
        {registerInputs.map((item) => {
          return (
            <InputFiled
              key={item.id}
              {...item}
              onChange={handleChange}
              errorMessage={registerError[item.name]}
            ></InputFiled>
          );
        })}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="gender"
          >
            Gender:
          </label>
          <div className="mt-2" onChange={handleChange}>
            <label className="inline-flex items-center">
              <input
                className="form-radio"
                type="radio"
                value="Male"
                name="gender"
                checked={userInfo.gender === "Male"}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                className="form-radio"
                type="radio"
                value="Female"
                name="gender"
                checked={userInfo.gender === "Female"}
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                className="form-radio"
                type="radio"
                value="Other"
                name="gender"
                checked={userInfo.gender === "Other"}
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {registerError.gender && (
            <span className={`text-red-500`}>{registerError.gender}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <input
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 cursor-pointer`}
            type="submit"
            value="Register"
            disabled={loading}
          />
        </div>
        {error && <span className="text-red-500">{error}</span>}
        {success && <span className="text-green-500">{success}</span>}
      </form>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </p>
    </div>
  );
};
