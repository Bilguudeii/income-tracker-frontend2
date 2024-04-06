import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { RecordCategorySelector } from "./RecordCategorySelector";
import { SetStateAction, useState } from "react";
import { RecordToggleButton } from "./RecordToggleButton";

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

export const RecordModal = ({ handleClose, open }) => {
  const [text, setText] = useState("");

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setText(event.target.value);
  };
  return (
    <div>
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
              <RecordToggleButton />
              <TextField
                label="Amount"
                variant="outlined"
                style={{ width: "348px", height: "76px" }}
              />
              <Typography style={{ display: "flex", gap: "12px",marginBottom:"10px"}} variant="body1"> Category </Typography>
              <RecordCategorySelector />
              <div style={{ display: "flex", gap: "12px",marginBottom:"10px" ,marginTop :"10px" }}>
                <input
                  style={{
                    width: "168px",
                    height: "48px",
                    borderRadius: "5px",
                    border: "1px solid #adadad",
                  }}
                  type="date"
                />
                <input
                  style={{
                    width: "168px",
                    height: "48px",
                    borderRadius: "5px",
                    border: "1px solid #adadad",
                  }}
                  type="time"
                />
              </div>
              <button
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
            </div>
            <div>
              <Typography variant="body1"> Note </Typography>
              <textarea
                value={text}
                onChange={handleChange}
                rows={20}
                cols={50}
                placeholder="Write here "
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
