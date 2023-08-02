import { Activate } from "@/pages/Activate";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { Profile } from "@/pages/Profile";
import { Register } from "@/pages/Register";
import { ResetPassword } from "@/pages/ResetPassword";
import { NotRequireAuth } from "@/routes/NotRequireAuth";
import { RequireAuth } from "@/routes/RequireAuth";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "@/layout/HomeLayout";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route element={<RequireAuth />}>
            <Route index element={<Home />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/activate" element={<Activate />} exact />
          </Route>
          <Route element={<NotRequireAuth />}>
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
          </Route>
          <Route path="/reset" element={<ResetPassword />} exact />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
