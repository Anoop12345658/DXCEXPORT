import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { useFormData } from '../../hooks/useFormData';

const ChinaFabricSection = () => {
  const { fabricData, setFabricData } = useFormData();

  const handleChinaFabricChange = (event) => {
    setFabricData(prev => ({
      ...prev,
      chinaFabrics: event.target.value
    }));
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">China Fabric Selection</Typography>
      <CustomDropdown
        label="Select China Fabrics"
        options={fabricData.map(f => f.fabricName)}
        value={fabricData.chinaFabrics}
        onChange={handleChinaFabricChange}
        multiple
      />
    </Box>
  );
};

export default ChinaFabricSection;