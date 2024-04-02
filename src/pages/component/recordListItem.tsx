import { Home } from "../Icons/home";

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

export const RecordListItem = ({ transaction }: { transaction: Transcation }) => {
  console.log(transaction);
  return (
    <div className="containerListt">
      <div className="ttbluecircle">
        <Home />
      </div>
      <div className="transactionNoteTitlet">
        {transaction.transactionTitle}

        {transaction.note}
      </div>
      <div>
        {transaction.amount}
      </div>
    </div>
  );
};
