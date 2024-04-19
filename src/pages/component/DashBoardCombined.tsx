import { Box } from "@mui/material"
import * as React from "react"
import { Upside } from "../Icons"

function DashBoardCombined() {
  return (
    <Box className="dashboardTwo">
      <Box className="twotop">
        <h3 className="urinc">Total Expenses</h3>
      </Box>
      <Box>
        <h3 className="urinc texttt">0₮</h3>
        <h3 className="urinc textttt">Your income Amount</h3>
      </Box>
      <Box>
        <h3 className="urinc texttttt">
          <Upside /> 32% from last month
        </h3>
      </Box>
    </Box>
  )
}

export default DashBoardCombined
