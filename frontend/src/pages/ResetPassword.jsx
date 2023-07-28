import { Avatar } from "@/components/Element/Avatar";
import { Input } from "@/components/Form/Input";
import { logout } from "@/reducers/userReducer";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ResetPassword = () => {
  const [index, setIndex] = useState(1);
  const [user, setUser] = useState(null);

  return (
    <div className="w-full h-full">
      {index === 1 && <SearchEmail {...{ index, setIndex, setUser }} />}
      {index === 2 && <SendEmail {...{ index, setIndex, user, setUser }} />}
      {index === 3 && <CodeVerification {...{ index, setIndex, user }} />}
      {index === 4 && <ChangePassword {...{ index, setIndex, user }} />}
    </div>
  );
};

const SearchEmail = ({ index, setIndex, setUser }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  const email = {
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
  };
  const onSubmit = async ({ email }) => {
    try {
      setLoading(true);
      const user = await axios.post("http://localhost:8000/reset/email", {
        email,
      });
      setUser(user);
      setLoading(false);
      setIndex(index + 1);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <p>Search Email</p>
      <div>
        <p>Enter your email to reset your password</p>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <Input {...email} />
            <div>
              <button type="submit" onClick={onSubmit} disabled={loading}>
                Next
              </button>
            </div>
          </form>
        </FormProvider>
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};
const SendEmail = ({ index, setIndex, user, setUser }) => {
  const onDenied = () => {
    setIndex(index - 1);
    setUser(null);
  };
  const onAccept = () => {
    setIndex(index + 1);
    axios.post("http://localhost:8000/reset/sendemail", user);
  };
  return (
    <div>
      <p>Send Email</p>
      <div>
        <p>Is this your account?</p>
        <div className="flex items-center gap-4">
          <Avatar src={user.picture} alt="avatar" />
          <p className="font-medium text-lg italic">{user.email}</p>
        </div>
        <div>
          <p>Choose your way to reset password</p>
          <input type="radio" checked />
          <label>Send email</label>
        </div>
        <div>
          <button onClick={onDenied}>No</button>
          <button onClick={onAccept}>Yes</button>
        </div>
      </div>
    </div>
  );
};
const CodeVerification = ({ index, setIndex, user }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const methods = useForm();
  const code = {
    label: "Code",
    type: "text",
    name: "code",
    placeholder: "Please enter your code",
    validation: {
      required: {
        value: true,
        message: `Code is required`,
      },
      minLength: {
        value: 6,
        message: "Code must be 6 characters long",
      },
      maxLength: {
        value: 6,
        message: "Code must be 6 characters long",
      },
    },
  };

  const handleSubmit = async ({ code }) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:8000/reset/code", {
        code,
        email: user.email,
      });
      setLoading(false);
      setIndex(index + 1);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <p>Code Verification</p>
      <div>
        <p>Check your email for the code and enter it to continue</p>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <Input {...code} />
            <div>
              <button onClick={() => setIndex(index - 1)}>Back</button>
              <button type="submit" onClick={handleSubmit} disabled={loading}>
                Verify
              </button>
            </div>
          </form>
        </FormProvider>
        {error && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};
const ChangePassword = ({ index, setIndex, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const methods = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const passwordValidate = [
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Please enter your password",
      validation: {
        required: {
          value: true,
          message: `Password is required`,
        },
        minLength: {
          value: 6,
          message: "Password must be more than or equal 6 characters long",
        },
        maxLength: {
          value: 28,
          message: "Password must be less than or equal 28 characters long",
        },
      },
    },
    {
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      validation: {
        required: {
          value: true,
          message: `Confirm Password is required`,
        },
        pattern: {
          value: methods.getValues("password"),
          message: "Password does not match",
        },
      },
    },
  ];
  const handleSubmit = async ({ password }) => {
    try {
      setLoading(true);
      await axios.post("http://localhost:8000/reset/password", {
        password,
        email: user.email,
      });
      setLoading(false);
      Cookies.set("user", null);
      dispatch(logout());

      setTimeout(() => {
        navigate("/login");
      }, 2000);

      setError("");
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <p>Change Password</p>
      <div>
        <p>Change your password</p>
        <FormProvider {...methods}>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <Input {...passwordValidate[0]} />
            <Input {...passwordValidate[1]} />
            <div>
              <button type="submit" onClick={handleSubmit} disabled={loading}>
                Submit
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
      {error && <span className="text-red-500">{error}</span>}
      {success && <span className="text-green-500">{success}</span>}
    </div>
  );
};
