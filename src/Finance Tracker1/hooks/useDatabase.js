import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default function useDatabase(databaseName, criteria) {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, databaseName);

    if (criteria) {
      ref = query(ref, where(...criteria));
    }

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [databaseName, criteria]);

  return { documents };
}
