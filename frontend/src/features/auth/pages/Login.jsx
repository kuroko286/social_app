import { LoginForm } from "@/features/auth/components/LoginForm";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 px-4">
      <h2 className="text-2xl font-bold mb-5 text-center sm:text-left">
        Login
      </h2>
      <LoginForm />
      <p className="text-center text-gray-500 text-xs">
        Dont have an account?{" "}
        <Link className="underline text-blue-500" to="/register">
          Register
        </Link>
      </p>
      <p className="text-center text-gray-500 text-xs">
        Forgot password?{" "}
        <Link className="underline text-blue-500" to="/reset">
          Reset password
        </Link>
      </p>
    </div>
  );
};
