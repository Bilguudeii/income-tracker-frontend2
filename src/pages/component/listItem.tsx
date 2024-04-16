import { Home, EditLogo, DeleteLogo } from "../Icons"

type Transcation = {
  amount: number
  category: string
  createAt: Date | string
  note: string
  transactionTitle: string
  transactionType: string
  userId: string
  __v: number
  _id: string
}

export const ListItem = ({ transaction }: { transaction: Transcation }) => {
  return (
    <div className="dashContainerList">
      <div className="bluecircle">
        <Home />
      </div>
      <div className="transactionNoteTitle dashNTB">
        {transaction.transactionTitle}

        {transaction.category}
      </div>
      <div className="dashttNtbContainer dashNTB">
        <button className="ttNtb">
          {" "}
          <EditLogo />{" "}
        </button>
        <button className="ttNtb">
          {" "}
          <DeleteLogo />{" "}
        </button>
      </div>
      <div>{transaction.amount}</div>
    </div>
  )
}
