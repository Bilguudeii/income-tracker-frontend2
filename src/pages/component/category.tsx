import { Box } from "@mui/material"
import { Checked } from "../Icons"
interface Category {
  label: string
}
const Category = () => {
  const categories = [
    "Food & Drinks",
    "Shopping",
    "Housing",
    "Transportation",
    "Vehicle",
    "Life & Entertainment",
    "Financial expenses",
    "Investments",
    "Income",
    "Others",
  ]
  const mappedcategories: Category[] = categories.map((Category) => ({
    label: Category,
  }))
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "30px 10px",
      }}
    >
      {mappedcategories.map((Category) => (
        <Box
          key={Category.label}
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Checked /> {Category.label}
        </Box>
      ))}
    </Box>
  )
}
export default Category
