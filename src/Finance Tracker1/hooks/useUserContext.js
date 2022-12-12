import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useContext must be inside a context provider");
  }

  return context;
};
