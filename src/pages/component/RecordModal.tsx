/* eslint-disable max-lines */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SelectChangeEvent } from "@mui/material";
import { RecordCategorySelector } from "./RecordCategorySelector";
import { useState } from "react";
import { RecordToggleButton } from "./RecordToggleButton";
import { Plus } from "../Icons/Plus";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
};

export const RecordModal = () => {
  const [open, setOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("Expense");
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [noteError, setNoteError] = useState("");
  const [required, setRequired] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAmount = (event: SelectChangeEvent) => {
    const amount = event.target.value;
    if (amount === "") {
      setAmountError("Amount is empty");
    } else {
      setAmount(event.target.value);
    }
  };

  const handleNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value;
    if (note === "") {
      setNoteError("Note is empty");
    } else {
      setNote(note);
    }
  };
  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  const addTransaction = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create-transaction",
        {
          userId:'123',
          category,
          amount: Number(amount),
          note,
          transactionType,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTransaction = () => {
    if (amount === "") {
      setRequired("AAAAA");
    } else {
      addTransaction();
      handleClose();
    }
  };
  return (
    <div>
      <button className="ntb" onClick={handleOpen}>
        <Plus /> Add
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Record
              </Typography>
              <RecordToggleButton
                transactionType={transactionType}
                setTransactionType={setTransactionType}
              />
              <input
                value={amount}
                placeholder="₮ 000.00"
                onChange={handleAmount}
                style={{marginTop:"15px" , width: "348px", height: "56px", borderRadius:"5px" , border:"1px solid rgba(209, 213, 219, 1)", paddingLeft: "15px", }}
              />
              <div style={{display:"flex", flexDirection:"row"}}><h3>{amountError}</h3></div>
              <Typography
                style={{ display: "flex", gap: "12px", marginBottom: "10px" }}
                variant="body1"
              >
                {" "}
                Category{" "}
              </Typography>
              <RecordCategorySelector
                handleCategory={handleCategory}
                category={category}
              />
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                <input
                  style={{
                    width: "348px",
                    height: "66px",
                    borderRadius: "5px",
                    border: "1px solid #adadad",
                    paddingLeft: "15px",
                    paddingRight: "10px",
                  }}
                  type="date"
                />
              </div>
              <button
                onClick={handleAddTransaction}
                style={{
                  width: "348px",
                  height: "40px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "rgba(1, 102, 255, 1)",
                  color: "white",
                }}
              >
                Add Record
              </button>
              <div>{required}</div>
            </div>
            <div>
              <Typography variant="body1"> Note </Typography>
              <textarea
                value={note}
                onChange={handleNote}
                rows={20}
                cols={50}
                placeholder="Write here "
                style={{paddingLeft: "15px",
                  paddingTop: "15px"
                }}
              />
              <div>{noteError}</div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
