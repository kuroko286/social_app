import { Avatar } from "@/components/Element/Avatar";
import { Button } from "@/components/Element/Button";
import { ConfirmPasswordInput } from "@/components/Form/ConfirmPasswordInput";
import { Form } from "@/components/Form/Form";
import { Input } from "@/components/Form/Input";
import { logout } from "@/reducers/userReducer";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetUserByEmail } from "../api/getUserByEmail";
import { sendResetCodeEmail } from "../api/sendResetCodeEmail";
import { useSendResetCode } from "../api/verifyResetCode";
import { useSendResetPassword } from "../api/resetPassword";

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
  const { responseData, error, loading, mutate } = useGetUserByEmail();

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

  const handleSendEmail = async (email) => {
    try {
      const data = await mutate(email);
      console.log(data);
      setUser(data);
      setIndex(index + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-2xl font-bold text-center">Search Email</p>
        <div>
          <p>Enter your email to reset your password</p>
          <Form
            submitButton={"Next"}
            loading={loading}
            responseData={responseData}
            error={error}
            handleSubmit={handleSendEmail}
          >
            {<Input {...email} />}
          </Form>
          {error && <span className="text-red-500">{error}</span>}
        </div>
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
    sendResetCodeEmail(user);
  };
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-2xl font-bold text-center">Send Email</p>
        <div>
          <p>Is this your account?</p>
          <div className="flex items-center gap-4">
            <Avatar src={user.picture} alt="avatar" />
            <p className="font-medium text-lg italic">{user.email}</p>
          </div>
          <div>
            <p className="font-medium">Choose your way to reset password</p>
            <input type="radio" checked />
            <label>Send email</label>
          </div>
          <div className="flex items-center gap-8 justify-center">
            <Button
              className="text-white bg-blue-500 hover:bg-blue-700"
              onClick={onDenied}
            >
              No
            </Button>
            <Button
              className={"text-white bg-blue-500 hover:bg-blue-700"}
              onClick={onAccept}
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
const CodeVerification = ({ index, setIndex, user }) => {
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
  const { responseData, error, loading, mutate } = useSendResetCode();

  const handleSendCode = async ({ code }) => {
    try {
      const data = await mutate({ code, email: user.email });
      setIndex(index + 1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDenied = () => {
    setIndex(index - 1);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-2xl font-bold text-center">Code Verification</p>
        <div>
          <p>Check your email for the code and enter it to continue</p>
          <Form
            handleSubmit={handleSendCode}
            loading={loading}
            responseData={responseData}
            error={error}
          >
            {<Input {...code} />}
          </Form>
          <Button
            className="text-white bg-blue-500 hover:bg-blue-700"
            onClick={handleDenied}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};
const ChangePassword = ({ index, setIndex, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseData, error, loading, mutate } = useSendResetPassword();

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
      },
    },
  ];
  const sideEffect = (data) => {
    Cookies.set("user", null);
    dispatch(logout());

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  const handleChangePassword = async ({ password }) => {
    try {
      const data = await mutate({ password, email: user.email });
      sideEffect(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-2xl font-bold text-center">Change Password</p>
        <div>
          <p>Change your password</p>
          <Form
            handleSubmit={handleChangePassword}
            loading={loading}
            responseData={responseData}
            error={error}
            successMeessage="Password changed successfully"
          >
            {<Input {...passwordValidate[0]} />}
            {<ConfirmPasswordInput {...passwordValidate[1]} />}
          </Form>
        </div>
      </div>
    </div>
  );
};
