import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { accessories } from '../../data/accessoriesData';
import { useFormContext } from '../../contexts/FormContext';

const AccessoriesSection = () => {
  const { formData, updateFormData } = useFormContext();
  
  const addAccessory = () => {
    updateFormData({
      accessories: [...formData.accessories, '']
    });
  };

  const handleAccessoryChange = (index, value) => {
    const newAccessories = [...formData.accessories];
    newAccessories[index] = value;
    updateFormData({ accessories: newAccessories });
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Accessories</Typography>
      {formData.accessories.map((accessory, index) => (
        <Box key={index} sx={{ mt: 2 }}>
          <CustomDropdown
            label={`Accessory ${index + 1}`}
            options={accessories}
            value={accessory}
            onChange={(e) => handleAccessoryChange(index, e.target.value)}
          />
        </Box>
      ))}
      <Button 
        variant="outlined" 
        onClick={addAccessory}
        sx={{ mt: 2 }}
      >
        Add More Accessories
      </Button>
    </Box>
  );
};

export default AccessoriesSection;