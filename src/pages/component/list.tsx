import axios from "axios"
import { ListItem } from "./listItem"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"

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
    <Box style={{}}>
      <Box className="lasst">
        <Box className="lastrecords">Last records</Box>
        {transactions.map((transaction, index) => (
          <ListItem key={index} transaction={transaction} />
        ))}
      </Box>
    </Box>
  )
}
