import { Link } from "react-router-dom";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

export const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-2 sm:px-0 md:px-32 lg:px-64">
      <h2 className="text-2xl font-bold mb-5">Register Page</h2>
      <RegisterForm />
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500 hover:text-blue-700">
          Login
        </Link>
      </p>
    </div>
  );
};
