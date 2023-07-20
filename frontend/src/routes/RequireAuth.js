import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export const RequireAuth = () => {
  const user = useSelector((state) => state.user);
  return user ? <Outlet></Outlet> : <Navigate to="/login"></Navigate>;
};
