import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const NotRequireAuth = () => {
  const user = useSelector((state) => state.user);
  return user ? <Navigate to="/"></Navigate> : <Outlet></Outlet>;
};
