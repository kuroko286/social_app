import { Activate } from "@/features/auth/pages/Activate";
import { Home } from "@/features/misc/home/pages/Home";
import { Login } from "@/features/auth/pages/Login";
import { OwnerProfile } from "@/features/user/pages/OwnerProfile";
import { OtherProfile } from "@/features/user/pages/OtherProfile";
import { Register } from "@/features/auth/pages/Register";
import { ResetPassword } from "@/features/user/pages/ResetPassword";
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
            <Route path="/profile" element={<OwnerProfile />} exact />
            <Route path="/users/:userId" element={<OtherProfile />} exact />
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
