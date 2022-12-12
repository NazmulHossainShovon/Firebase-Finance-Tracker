import useDatabase from "../../hooks/useDatabase";
import { useUserContext } from "../../hooks/useUserContext";
import "./Home.css";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useUserContext();
  const { documents } = useDatabase("transaction", ["uid", "==", user.uid]);

  return (
    <div className="container">
      <div className="content">
        {documents && <TransactionList datas={documents} />}
      </div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}
