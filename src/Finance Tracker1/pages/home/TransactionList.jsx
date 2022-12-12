import { useFirestore } from "../../hooks/useFirestore";
import "./Home.css";

export default function TransactionList({ datas }) {
  const { deleteDocument } = useFirestore();

  return (
    <ul className="transactions">
      {datas.map((transaction) => (
        <li key={transaction.id}>
          <p className="name"> {transaction.name} </p>
          <p className="amount"> ${transaction.amount} </p>
          <button onClick={() => deleteDocument("transaction", transaction.id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
}
