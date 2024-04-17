import axios from "axios"
import { RecordListItem } from "./recordListItem"
import { useEffect, useState } from "react"

export const RecordList = ({ setReleod, releod }: any) => {
  const [transactions, setTransactions] = useState([])
  const [userId, setUserId] = useState<string>("")

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let id: any = window.localStorage.getItem("userId")
      if (id) {
        setUserId(id)
      }
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/get-transaction-userId/${userId}`
          )
          setTransactions(response.data)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
    }
    fetchData()
  }, [userId, releod])

  return (
    <div className="ttlasst">
      {transactions?.map((transaction, index) => (
        <RecordListItem
          key={index}
          transaction={transaction}
          setReleod={setReleod}
        />
      ))}
    </div>
  )
}
