/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { RecordListItem } from "./recordListItem"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"

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
          console.log(response)
          const sortedTransactions = response.data.sort((a: any, b: any) => {
            const dateA: any = new Date(a.createAt)
            const dateB: any = new Date(b.createAt)
            return dateB - dateA
          })
          setTransactions(sortedTransactions)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
    }
    fetchData()
  }, [userId, releod])

  return (
    <Box className="ttlasst">
      {transactions?.map((transaction, index) => (
        <RecordListItem
          key={index}
          transaction={transaction}
          setReleod={setReleod}
        />
      ))}
    </Box>
  )
}
