import { Box } from "@mui/material"
import { Home, EditLogo, DeleteLogo } from "../Icons"
import { Transcation } from "../interfaces"

export const ListItem = ({ transaction }: { transaction: Transcation }) => {
  return (
    <Box className="dashContainerList">
      <Box className="bluecircle">
        <Home />
      </Box>
      <Box className="transactionNoteTitle dashNTB">
        {transaction.transactionTitle}

        {transaction.category}
      </Box>
      <Box className="dashttNtbContainer dashNTB">
        <button className="ttNtb">
          {" "}
          <EditLogo />{" "}
        </button>
        <button className="ttNtb">
          {" "}
          <DeleteLogo />{" "}
        </button>
      </Box>
      <Box>{transaction.amount}</Box>
    </Box>
  )
}
