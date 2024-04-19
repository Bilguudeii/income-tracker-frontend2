import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import { useState, useEffect } from "react"
import axios from "axios"

function RadioButton() {
  const [transactionType, setTransactionType] = useState([])
  const [userId, setUserId] = useState<string>("")
  const [value, setValue] = useState("")
  console.log(value)

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let id: any = window.localStorage.getItem("userId")
      if (id) {
        setUserId(id)
      }
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        try {
          const response = await axios.get(
            `https://income-tracker-backend-15ch.onrender.com/get-transaction-userId/${userId}`
          )
          console.log(response)
          const sortedTransactionType = response.data.sort({})
          setTransactionType(sortedTransactionType)
        } catch (error) {
          console.error("Error fetching data:", error)
        }
      }
    }
    fetchData()
  }, [userId])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <FormControl className="ttMUI">
      <RadioGroup
        className="ttMUIX"
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          className="ttMuiRadionButton"
          value="all"
          control={<Radio />}
          label="All"
        />
        <FormControlLabel
          className="ttMuiRadionButton"
          value="income"
          control={<Radio />}
          label="Income"
        />
        <FormControlLabel
          className="ttMuiRadionButton"
          value="expense"
          control={<Radio />}
          label="Expense"
        />
      </RadioGroup>
    </FormControl>
  )
}
export default RadioButton
