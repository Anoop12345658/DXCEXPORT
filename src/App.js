import React from 'react';
import { 
  Container, 
  Paper, 
  Box, 
  TextField, 
  Button, 
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography 
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { FormProvider, useFormContext } from './contexts/FormContext';
import FabricSection from './components/Form/FabricSection';
import ChinaFabricSection from './components/Form/ChinaFabricSection';
import MajorFabricSection from './components/Form/MajorFabricSection';
import ProcessSection from './components/Form/ProcessSection';
import TrimsSection from './components/Form/TrimsSection';
import AccessoriesSection from './components/Form/AccessoriesSection';
import { useFormData } from './hooks/useFormData';

function MainForm() {
  const { formData, updateFormData } = useFormContext();
  const { addFabric } = useFormData();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md">
        <Paper sx={{ p: 3, mt: 3 }}>
          <Typography variant="h4" gutterBottom>
            T&A Data Submission Form
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <DatePicker
                label="Start Date"
                value={formData.startDate}
                onChange={(newValue) => updateFormData({ startDate: newValue })}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <DatePicker
                label="End Date"
                value={formData.endDate}
                onChange={(newValue) => updateFormData({ endDate: newValue })}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                label="Production Per Day Per Machine"
                type="number"
                value={formData.productionPerDay}
                onChange={(e) => updateFormData({ productionPerDay: e.target.value })}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                label="Total Order Quantity"
                type="number"
                value={formData.totalOrderQuantity}
                onChange={(e) => updateFormData({ totalOrderQuantity: e.target.value })}
                fullWidth
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant="h6">Is China Fabric Present?</Typography>
              <RadioGroup
                row
                value={formData.hasChinaFabric}
                onChange={(e) => updateFormData({ hasChinaFabric: e.target.value === 'true' })}
              >
                <FormControlLabel value={true} control={<Radio />} label="Yes" />
                <FormControlLabel value={false} control={<Radio />} label="No" />
              </RadioGroup>
            </Box>

            {formData.fabrics.map((_, index) => (
              <FabricSection key={index} />
            ))}

            <Button 
              variant="contained" 
              onClick={addFabric}
              sx={{ mt: 2, mb: 3 }}
            >
              Add More Fabrics
            </Button>

            {formData.hasChinaFabric && <ChinaFabricSection />}

            <MajorFabricSection />

            <ProcessSection />

            <TrimsSection />
            <AccessoriesSection />

            <Button 
              type="submit" 
              variant="contained" 
              color="primary"
              sx={{ mt: 3 }}
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </LocalizationProvider>
  );
}

function App() {
  return (
    <FormProvider>
      <MainForm />
    </FormProvider>
  );
}

export default App;