import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"
import { Box } from "@mui/material"

ChartJS.register(ArcElement, Tooltip, Legend)

const categories = ["Bills", "Food", "Shopping", "Insurance", "Clothing"]
const expenses = [300, 50, 100, 200, 150]
const colors = ["#1C64F2", "#E74694", "#FDBA8C", `#16BDCA`, `#F2901C`]

const sum = expenses.reduce((a, b) => a + b, 0)

const dataSet = {
  labels: categories,
  datasets: [
    {
      data: expenses,
      backgroundColor: colors,
    },
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
}

export function Chaart() {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "588px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <h3>Income-Expenses</h3>
        <p>Total: {sum}$</p>
      </Box>
      <Box
        style={{
          width: "100%",
          backgroundColor: "#F5F5F5",
          height: "1px",
          margin: "10px 0",
        }}
      />
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Doughnut
          data={dataSet}
          options={options}
          style={{ maxHeight: "156px", maxWidth: "156px" }}
        />
        <Labels />
      </Box>
    </Box>
  )
}

const Labels = () => {
  return (
    <Box>
      {categories.map((category, index) => (
        <Box key={index} style={{ display: "flex", alignItems: "center" }}>
          <Box
            style={{ display: "flex", alignItems: "center", width: "150px" }}
          >
            <Box
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: colors[index],
                margin: "5px",
                borderRadius: "50%",
              }}
            />
            <p style={{ marginRight: "10px" }}>{category}</p>
          </Box>
          <Box style={{ width: "100px" }}>{expenses[index]}$</Box>
          <Box style={{ width: "100px" }}>{(expenses[index] * 100) / sum}%</Box>
        </Box>
      ))}
    </Box>
  )
}

export default Chaart
