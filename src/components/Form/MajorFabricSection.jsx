import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { useFormData } from '../../hooks/useFormData';

const MajorFabricSection = () => {
  const { fabricData, setFabricData } = useFormData();

  const handleMajorFabricChange = (event) => {
    setFabricData(prev => ({
      ...prev,
      majorFabric: event.target.value
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">Choose Major Fabric</Typography>
      <CustomDropdown
        label="Major Fabric"
        options={['None', ...fabricData.map(f => f.fabricName)]}
        value={fabricData.majorFabric}
        onChange={handleMajorFabricChange}
      />
    </Box>
  );
};

export default MajorFabricSection;