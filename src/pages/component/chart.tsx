import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar } from "react-chartjs-2"
import { Box } from "@mui/material"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const labels = ["January", "February", "March", "April", "May", "June", "July"]
const data = {
  labels,
  datasets: [
    {
      label: "Income",
      data: labels.map(() => {
        return Math.random() * 3000000
      }),
      backgroundColor: "#84CC16",
      borderRadius: "30",
    },
    {
      label: "Expense",
      data: labels.map(() => {
        return Math.random() * 3000000
      }),
      backgroundColor: "#F97316",
      borderRadius: "30",
    },
  ],
}

export function BarChart() {
  return (
    <Box style={{ width: "699px", height: "200px" }}>
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </Box>
  )
}
