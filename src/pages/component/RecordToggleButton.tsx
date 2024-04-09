import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const RecordToggleButton = ({ setTransactionType, transactionType }) => {

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setTransactionType(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={transactionType}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="expense">Expense</ToggleButton>
      <ToggleButton value="income">Income</ToggleButton>
    </ToggleButtonGroup>
  );
};
