import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { useUserContext } from "./hooks/useUserContext";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

export default function App() {
  const { user, authIsReady } = useUserContext();

  return (
    <div>
      {authIsReady && (
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={user ? <Home /> : <Navigate to="/login" />} />
            <Route
              path="login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
          </Route>
        </Routes>
      )}
    </div>
  );
}
