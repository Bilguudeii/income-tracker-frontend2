/* eslint-disable max-lines */
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal"
import { SelectChangeEvent } from "@mui/material"
import { RecordCategorySelector } from "./RecordCategorySelector"
import { useEffect, useState } from "react"
import { RecordToggleButton } from "./RecordToggleButton"
import { EditLogo, Plus } from "../Icons"
import axios from "axios"
import { Transcation } from "../interfaces"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "0.5px solid #000",
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
}

export const RecordModal = ({
  type,
  id,
  setReleod,
}: {
  type: string
  id: string
  setReleod?: any
}) => {
  const [plusTransaction, setAddTransaction] = useState<any>({
    amount: 0,
    category: "",
    note: "",
    transactionType: "",
  })
  const [userId, setUserId] = useState<string>("")

  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let id: any = window.localStorage.getItem("userId")
      id && setUserId(id)
    }
  }, [])
  const [editTransaction, setEditTransaction] = useState<any>()
  const [amountError, setAmountError] = useState("")
  const [noteError, setNoteError] = useState("")
  const [required] = useState("")
  const handleOpen = async () => {
    const response = await axios.get(
      `http://localhost:8080/get-transaction/${id && id}`
    )

    setEditTransaction(response.data)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  const handleAmount = (event: SelectChangeEvent) => {
    const amount = event.target.value
    if (amount === "") {
      setAmountError("Amount is empty")
    } else {
      type == "edit"
        ? setEditTransaction({ ...editTransaction, amount: event.target.value })
        : setAddTransaction({ ...plusTransaction, amount: event.target.value })
    }
  }

  const handleNote = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const note = event.target.value
    if (note === "") {
      setNoteError("Note is empty")
    } else {
      type == "edit"
        ? setEditTransaction({ ...editTransaction, note: event.target.value })
        : setAddTransaction({ ...plusTransaction, note: event.target.value })
    }
  }
  const handleCategory = (event: SelectChangeEvent) => {
    type == "edit"
      ? setEditTransaction({ ...editTransaction, category: event.target.value })
      : setAddTransaction({ ...plusTransaction, category: event.target.value })
  }

  const addTransaction = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create-transaction",
        {
          userId: userId && userId,
          ...plusTransaction,
        }
      )
      setReleod && setReleod(response)
    } catch (error) {
      throw error
    }
  }
  const editTransactionFunc = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/update-transaction/${id}`,
        {
          userId: userId && userId,
          ...editTransaction,
        }
      )
      setReleod && setReleod(response)
    } catch (error) {
      throw error
    }
  }

  const handleAddTransaction = () => {
    type == "edit" ? editTransactionFunc() : addTransaction()
    handleClose()
  }

  return (
    <Box>
      <Box onClick={handleOpen}>
        {type == "edit" ? (
          <>
            <EditLogo />
          </>
        ) : (
          <Box className="ntb">
            <Plus /> Add
          </Box>
        )}
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <Box>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add Record
              </Typography>
              <RecordToggleButton
                transactionType={
                  type == "edit"
                    ? editTransaction?.transactionType
                    : plusTransaction?.transactionType
                }
                setTransactionType={
                  type == "edit" ? setEditTransaction : setAddTransaction
                }
              />
              <input
                value={editTransaction?.amount}
                placeholder="₮ 000.00"
                onChange={handleAmount}
                style={{
                  marginTop: "15px",
                  width: "348px",
                  height: "56px",
                  borderRadius: "5px",
                  border: "1px solid rgba(209, 213, 219, 1)",
                  paddingLeft: "15px",
                }}
              />
              <Box style={{ display: "flex", flexDirection: "row" }}>
                <h3>{amountError}</h3>
              </Box>
              <Typography
                style={{ display: "flex", gap: "12px", marginBottom: "10px" }}
                variant="body1"
              >
                Category
              </Typography>
              <RecordCategorySelector
                handleCategory={handleCategory}
                category={editTransaction?.category}
              />
              <Box
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
              </Box>
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
              <Box>{required}</Box>
            </Box>
            <Box>
              <Typography variant="body1"> Note </Typography>
              <textarea
                value={editTransaction?.note}
                onChange={handleNote}
                rows={20}
                cols={50}
                placeholder="Write here "
                style={{ paddingLeft: "15px", paddingTop: "15px" }}
              />
              <Box>{noteError}</Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  )
}
