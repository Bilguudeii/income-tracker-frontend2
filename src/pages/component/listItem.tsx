/* eslint-disable @typescript-eslint/no-explicit-any */
import { Home, DeleteLogo } from "../Icons"
import axios from "axios"
import { Transcation } from "../interfaces"
import { RecordModal } from "./RecordModal"
import { Box } from "@mui/material"

export const ListItem = ({
  transaction,
  setReleod,
}: {
  transaction: Transcation
  setReleod: any
}) => {
  const deleteTransaction = async () => {
    const Transactionid = transaction._id
    try {
      const response = await axios.delete(
        `https://income-tracker-backend-15ch.onrender.com/delete-transaction/${Transactionid}`
      )
      alert("deleted transaction")
      setReleod && setReleod(response)
    } catch (error) {
      throw error
    }
  }

  interface ColorMap {
    [key: string]: string
  }
  const InExColors: ColorMap = {
    income: "#16A34A",
    expense: "#FF0101",
  }
  const InExDiff: ColorMap = {
    income: "",
    expense: "-",
  }
  const date = new Date(transaction.createAt)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  const formattedDate = `${year}/${month}/${day}`
  return (
    <Box className="containerListt">
      <Box className="flex-center">
        <Box className="ttBlueCircleContainer">
          <Box className="ttbluecircle">
            <Home />
          </Box>
        </Box>
        <Box className="transactionNoteTitlet">
          <Box>{formattedDate}</Box>
          <Box style={{ display: "flex" }}>
            <h4 style={{ padding: "0 1.5vw 0 0vw" }}>
              {transaction.category}{" "}
            </h4>
            <h4>{transaction.note} </h4>
          </Box>
        </Box>
      </Box>
      <Box className="flex-center">
        <Box
          style={{ color: InExColors[transaction.transactionType] }}
          className="ttAmount"
        >
          {InExDiff[transaction.transactionType]}
          {transaction.amount}₮
        </Box>
        <button className="ttNtb">
          <RecordModal type="edit" id={transaction._id} setReleod={setReleod} />
        </button>
        <button onClick={deleteTransaction} className="ttNtb">
          <DeleteLogo />
        </button>
      </Box>
    </Box>
  )
}
