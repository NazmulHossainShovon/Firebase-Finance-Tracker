import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { logUserOut } from "../firebase/firebase";

export const useLogout = () => {
  const { dispatch } = useContext(UserContext);

  const logout = async () => {
    await logUserOut();
    dispatch({ type: "logout" });
  };

  return { logout };
};
