import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { RequireAuth } from "./routes/RequireAuth";
import { NotRequireAuth } from "./routes/NotRequireAuth";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<RequireAuth></RequireAuth>}>
          <Route index element={<Home />} exact></Route>
          <Route path="/profile" element={<Profile />} exact></Route>
        </Route>
        <Route element={<NotRequireAuth></NotRequireAuth>}>
          <Route path="/login" element={<Login />} exact></Route>
          <Route path="/register" element={<Register />} exact></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
