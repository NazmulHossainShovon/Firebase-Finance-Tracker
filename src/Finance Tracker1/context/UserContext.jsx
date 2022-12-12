import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { projectAuth } from "../firebase/firebase";

export const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, user: action.payload };
    case "logout":
      return { ...state, user: null };
    case "already-in":
      return { ...state, user: action.payload, authIsReady: true };
    case "login":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsub = onAuthStateChanged(projectAuth, (user) => {
      if (user) {
        dispatch({ type: "already-in", payload: user });
      }
      unsub();
    });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
