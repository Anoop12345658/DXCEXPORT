import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const CustomDropdown = ({
  label,
  options,
  value,
  onChange,
  disabled = false,
  excludeOptions = []
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        disabled={disabled}
      >
        {options
          .filter(option => !excludeOptions.includes(option))
          .map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;