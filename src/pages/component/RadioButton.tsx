import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup() {
  return (
    <FormControl className='ttMUI'>
      <RadioGroup
        className='ttMUIX'
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
      >
        <FormControlLabel className='ttMuiRadionButton' value="all" control={<Radio />} label="All" />
        <FormControlLabel className='ttMuiRadionButton' value="income" control={<Radio />} label="Income" />
        <FormControlLabel className='ttMuiRadionButton' value="expense" control={<Radio />} label="Expense" />
      </RadioGroup>
    </FormControl>
  );
}