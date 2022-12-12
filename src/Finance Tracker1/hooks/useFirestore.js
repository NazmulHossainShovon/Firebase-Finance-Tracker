import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export const useFirestore = () => {
  const addDocument = async (collectionName, inputData) => {
    try {
      await addDoc(collection(db, collectionName), inputData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteDocument = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (err) {
      console.log(err.message);
    }
  };

  return { addDocument, deleteDocument };
};
