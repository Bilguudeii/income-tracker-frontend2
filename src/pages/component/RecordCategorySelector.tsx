import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";

export const RecordCategorySelector = ({ handleCategory, category }) => {
  return (
    <Box sx={{ width: 348 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
          <MenuItem value={"food"}>Food</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
