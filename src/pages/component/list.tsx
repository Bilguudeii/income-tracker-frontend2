/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
import { ListItem } from "./listItem"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"

export const List = ({ setReleod, releod }: any) => {
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
            `https://income-tracker-backend-15ch.onrender.com/get-transaction-userId/${userId}`
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
    <Box style={{}}>
      <Box className="lasst">
        <Box className="lastrecords">Last records</Box>
        {transactions.map((transaction, index) => (
          <ListItem
            key={index}
            transaction={transaction}
            setReleod={setReleod}
          />
        ))}
      </Box>
    </Box>
  )
}
