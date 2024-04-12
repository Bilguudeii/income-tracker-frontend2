import axios from "axios"
import { ListItem } from "./listItem"
import { useEffect, useState } from "react"

export const List = () => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/get-transaction")
      setTransactions(response.data)
    }
    fetchData()
  }, [])
  return (
    <div style={{}}>
      {" "}
      <div className="lasst">
        <div className="lastrecords">Last records</div>
        {transactions.map((transaction, index) => (
          <ListItem key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  )
}
