import { Home , DeleteLogo } from "../Icons"
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

  return (
    <div className="containerListt">
      <div className="flex-center">
        <div className="ttBlueCircleContainer">
          <div className="ttbluecircle">
            <Home />
          </div>
        </div>
        <div className="transactionNoteTitlet">
          {transaction.transactionTitle}
          {transaction.note}
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
