import React from 'react';
import { Box, TextField } from '@mui/material';

const ColorQuantitySection = ({ index, data, onChange }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
      <TextField
        label={`Color ${index + 1}`}
        value={data.color}
        onChange={(e) => onChange(e.target.value, data.quantity)}
        fullWidth
      />
      <TextField
        label={`Quantity ${index + 1}`}
        type="number"
        value={data.quantity}
        onChange={(e) => onChange(data.color, e.target.value)}
        fullWidth
      />
    </Box>
  );
};

export default ColorQuantitySection;