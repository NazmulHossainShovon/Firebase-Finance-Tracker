import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { loginUser } from "../firebase/firebase";

export default function useLogin() {
  const { dispatch } = useContext(UserContext);

  const login = async (email, password) => {
    try {
      const res = await loginUser(email, password);
      dispatch({ type: "login", payload: res.user });
    } catch (err) {
      console.log(err.message);
    }
  };

  return { login };
}
