import axios from "axios";
import { RecordListItem } from "./recordListItem";
import { useEffect, useState } from "react";

export const RecordList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/get-transaction");
      setTransactions(response.data);
    };
    fetchData();
  }, []);
  console.log(transactions)
  return (
    <div
      style={{
      }}
    > <div className="lasst">
        <div className="ttlast">Last records</div>
        {transactions.map((transaction, index) => (
          <RecordListItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
