import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { createUserDocWithEmailPassword } from "../firebase/firebase";

export const useSignup = () => {
  const { dispatch } = useContext(UserContext);
  const [isPending, setIsPending] = useState(false);

  const signup = async (email, password, displayName) => {
    try {
      setIsPending(true);
      const res = await createUserDocWithEmailPassword(email, password);
      await updateProfile(res.user, { displayName });
      dispatch({ type: "signup", payload: res.user });
      setIsPending(false);
    } catch (err) {
      alert(err.message);
      setIsPending(false);
    }
  };

  return { signup, isPending };
};
