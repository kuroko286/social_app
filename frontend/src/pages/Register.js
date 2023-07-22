import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/Form/Input";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { login } from "../reducers/userReducer";
import { FormProvider, useForm } from "react-hook-form";
import { RadioGroup } from "../components/Form/RadioInput";

const registerInputs = [
  {
    id: 1,
    name: "first_name",
    type: "text",
    placeholder: "Please enter your first name",
    label: "First name",
    validation: {
      required: {
        value: true,
        message: "First name is required",
      },
    },
  },
  {
    id: 2,
    name: "last_name",
    type: "text",
    placeholder: "Please enter your last name",
    label: "Last name",
    validation: {
      required: {
        value: true,
        message: "Last name is required",
      },
    },
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "Please enter your email",
    label: "Email",
    validation: {
      required: {
        value: true,
        message: "Email is required",
      },
      pattern: {
        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Invalid email address",
      },
    },
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Please enter your password",
    label: "Password",
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
  {
    id: 5,
    name: "bYear",
    type: "number",
    placeholder: "Please enter your birth year",
    label: "Birth year",
    validation: {
      required: {
        value: true,
        message: "Year is required",
      },
      min: {
        value: 1900,
        message: "Year must be greater or equal than 1900",
      },
      max: {
        value: new Date().getFullYear(),
        message: `Year must be less or equal than ${new Date().getFullYear()}`,
      },
    },
  },
  {
    id: 6,
    name: "bMonth",
    type: "number",
    placeholder: "Please enter your birth month",
    label: "Birth month",
    validation: {
      required: {
        value: true,
        message: "Month is required",
      },
      min: {
        value: 1,
        message: "Month must be greater or equal than 1",
      },
      max: {
        value: 12,
        message: "Month must be less or equal than 12",
      },
    },
  },
  {
    id: 7,
    name: "bDay",
    type: "number",
    placeholder: "Please enter your birth day",
    label: "Birth day",
    validation: {
      required: {
        value: true,
        message: "Day is required",
      },
      min: {
        value: 1,
        message: "Day must be greater or equal than 1",
      },
      max: {
        value: 31,
        message: "Day must be less or equal than 31",
      },
    },
  },
];
const radiosInput = {
  name: "gender",
  groupLabel: "Gender",
  items: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],
};
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
          onSubmit={handleRegister}
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
