import { Home } from "../Icons/home";
import { EditLogo } from "../Icons/editLogo"
import { DeleteLogo } from "../Icons/deleteIcon"

type Transcation = {
  amount: number;
  category: string;
  createAt: Date | string;
  note: string;
  transactionTitle: string;
  transactionType: string;
  userId: string;
  __v: number;
  _id: string;
};

export const ListItem = ({ transaction }: { transaction: Transcation }) => {
  console.log(transaction);
  return (
    <div className="containerList">
      <div className="bluecircle">
        <Home />
      </div>
      <div className="transactionNoteTitle">
        {transaction.transactionTitle}

        {transaction.note}
      </div>
      <div className="ttNtbContainer">
        <button className="ttNtb">  <EditLogo/> </button>
        <button className="ttNtb">  <DeleteLogo/> </button>
      </div>
      <div>
        {transaction.amount}
      </div>
    </div>
  );
};
