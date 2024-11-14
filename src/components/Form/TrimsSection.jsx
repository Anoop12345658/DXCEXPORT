import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { trims } from '../../data/trimsData';
import { useFormContext } from '../../contexts/FormContext';

const TrimsSection = () => {
  const { formData, updateFormData } = useFormContext();
  
  const addTrim = () => {
    updateFormData({
      trims: [...formData.trims, '']
    });
  };

  const handleTrimChange = (index, value) => {
    const newTrims = [...formData.trims];
    newTrims[index] = value;
    updateFormData({ trims: newTrims });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Trims</Typography>
      {formData.trims.map((trim, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <CustomDropdown
            label={`Trim ${index + 1}`}
            options={trims}
            value={trim}
            onChange={(e) => handleTrimChange(index, e.target.value)}
          />
        </Box>
      ))}
      <Button 
        variant="outlined" 
        onClick={addTrim}
        sx={{ mt: 2 }}
      >
        Add More Trims
      </Button>
    </Box>
  );
};

export default TrimsSection;