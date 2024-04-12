import axios from "axios"
import { RecordListItem } from "./recordListItem"
import { useEffect, useState } from "react"

export const RecordList = ({ setReleod, releod }: any) => {
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8080/get-transaction")
      setTransactions(response.data)
    }
    fetchData()
  }, [releod])
  return (
    <div className="ttlasst">
      {transactions.map((transaction, index) => (
        <RecordListItem
          key={index}
          transaction={transaction}
          setReleod={setReleod}
        />
      ))}
    </div>
  )
}
