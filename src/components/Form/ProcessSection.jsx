import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { processes } from '../../data/processData';
import { useFormData } from '../../hooks/useFormData';

const ProcessSection = () => {
  const { fabricData, setFabricData } = useFormData();

  const handleProcessesChange = (event) => {
    setFabricData(prev => ({
      ...prev,
      stagesToSkip: event.target.value
    }));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Stages to be Skipped</Typography>
      <CustomDropdown
        label="Processes"
        options={processes}
        value={fabricData.stagesToSkip}
        onChange={handleProcessesChange}
        multiple
      />
    </Box>
  );
};

export default ProcessSection;