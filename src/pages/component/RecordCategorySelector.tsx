import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export const RecordCategorySelector = ({ handleCategory, category }) => {
  return (
    <Box sx={{ width: "348px" , height: "66px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleCategory}
        >
          <MenuItem value={"bills"}>Bills</MenuItem>
          <MenuItem value={"clothing"}>Clothing</MenuItem>
          <MenuItem value={"shopping"}>Shopping</MenuItem>
          <MenuItem value={"housing"}>Housing</MenuItem>
          <MenuItem value={"transportation"}>Transportation</MenuItem>
          <MenuItem value={"vehicle"}>Vehicle</MenuItem>
          <MenuItem value={"investments"}>Investments</MenuItem>
          <MenuItem value={"others"}>Others</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
