import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDF0ih-AXGJuyfHWKxXay7amDoup-u7uow",
  authDomain: "mymoney1-2f22f.firebaseapp.com",
  projectId: "mymoney1-2f22f",
  storageBucket: "mymoney1-2f22f.appspot.com",
  messagingSenderId: "325315543799",
  appId: "1:325315543799:web:f85fdcac2fd3f743a889f2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectAuth = getAuth();

export const createUserDocWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(projectAuth, email, password);
};

export const logUserOut = async () => {
  await signOut(projectAuth);
};

export const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password);
    return res;
  } catch (err) {
    console.log(err.message);
  }
};

export { projectAuth, db };
