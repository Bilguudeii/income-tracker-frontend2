import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const RecordToggleButton = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string,
    ) => {
      setAlignment(newAlignment);
    };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Expense">Expense</ToggleButton>
      <ToggleButton value="Income">Income</ToggleButton>
    </ToggleButtonGroup>
  );
}
