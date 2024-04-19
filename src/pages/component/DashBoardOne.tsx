import { Box } from "@mui/material"
import * as React from "react"
import CPic from "../../../public/Large.png"

function DashBoardOne() {
  return (
    <Box
      style={{
        backgroundImage: `url(${CPic.src})`,
        width: "384.12px",
        height: "216px",
        position: "relative",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          bottom: 20,
          left: 15,
        }}
      >
        <p
          style={{
            margin: 0,
            opacity: "50%",
            fontSize: "16px",
            color: "white",
          }}
        >
          Cash
        </p>
        <p style={{ margin: 0, fontSize: "24px", color: "white" }}>
          10,000,000₮
        </p>
      </Box>
    </Box>
  )
}

export default DashBoardOne
