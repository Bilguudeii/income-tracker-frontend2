import { Home } from "../Icons/home";
import { EditLogo } from "../Icons/editLogo";
import { DeleteLogo } from "../Icons/deleteIcon";
import axios from "axios";

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

export const RecordListItem = ({
  transaction,
}: {
  transaction: Transcation;
}) => {
  console.log(transaction);

  const deleteTransaction = async () => {
    const Transactionid = transaction._id;
    try {
      const response = await axios.delete(
        `http://localhost:8080/delete-transaction/${Transactionid}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  interface ColorMap {
    [key: string]: string;
  }
  const InExColors: ColorMap = {
    income: "#16A34A",
    expense: "#FF0101",
  };
  const InExDiff: ColorMap = {
    income: "",
    expense: "-",
  };

  return (
    <div className="containerListt">
      <div className="ttBlueCircleContainer">
        <div className="ttbluecircle">
          <Home />
        </div>
      </div>
      <div className="transactionNoteTitlet">
        {transaction.transactionTitle}

        {transaction.note}
      </div>
      <div className="ttNtbContainer">
        <button className="ttNtb">
          {" "}
          <EditLogo />{" "}
        </button>
        <button onClick={deleteTransaction} className="ttNtb">
          {" "}
          <DeleteLogo />{" "}
        </button>
      </div>
      <div style={{ color:InExColors[transaction.transactionType]}} className="ttAmount">{InExDiff[transaction.transactionType]}{transaction.amount}₮</div>
    </div>
  );
};
