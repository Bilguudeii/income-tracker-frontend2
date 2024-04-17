import { Home, DeleteLogo } from "../Icons"
import axios from "axios"
import { Transcation } from "../interfaces"
import { RecordModal } from "./RecordModal"

export const RecordListItem = ({
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
        `http://localhost:8080/delete-transaction/${Transactionid}`
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
    <div className="containerListt">
      <div className="flex-center">
        <div className="ttBlueCircleContainer">
          <div className="ttbluecircle">
            <Home />
          </div>
        </div>
        <div className="transactionNoteTitlet">
          <div>{formattedDate}</div>
          <div style={{ display: "flex" }}>
            <h4 style={{ padding: "0 1.5vw 0 0vw" }}>
              {transaction.category}{" "}
            </h4>
            <h4>{transaction.note} </h4>
          </div>
        </div>
      </div>
      <div className="flex-center">
        <div>
          <button className="ttNtb">
            <RecordModal
              type="edit"
              id={transaction._id}
              setReleod={setReleod}
            />
          </button>
          <button onClick={deleteTransaction} className="ttNtb">
            <DeleteLogo />
          </button>
        </div>
        <div
          style={{ color: InExColors[transaction.transactionType] }}
          className="ttAmount"
        >
          {InExDiff[transaction.transactionType]}
          {transaction.amount}₮
        </div>
      </div>
    </div>
  )
}
