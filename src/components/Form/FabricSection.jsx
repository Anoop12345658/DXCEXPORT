import React from 'react';
import { 
  Box, 
  TextField, 
  RadioGroup, 
  Radio, 
  FormControlLabel, 
  Button,
  Typography
} from '@mui/material';
import CustomDropdown from '../UI/CustomDropdown';
import { fabricList, units } from '../../data/fabricData';
import { processes } from '../../data/processData';
import ColorQuantitySection from './ColorQuantitySection';
import { useFormData } from '../../hooks/useFormData';

const FabricSection = () => {
  const { fabricData, setFabricData, removeFabric } = useFormData();

  const handleFabricChange = (field) => (event) => {
    setFabricData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const addColorQuantity = () => {
    setFabricData(prev => ({
      ...prev,
      colors: [...prev.colors, { color: '', quantity: 0 }]
    }));
  };

  const handleRemove = () => {
    removeFabric(fabricData.id);
  };

  return (
    <Box sx={{ border: '1px solid #ddd', p: 2, mb: 2, borderRadius: 1 }}>
      <Typography variant="h6">Fabric</Typography>
      
      <CustomDropdown
        label="Fabric Name"
        options={fabricList}
        value={fabricData.fabricName}
        onChange={handleFabricChange('fabricName')}
      />

      <Box sx={{ mt: 2 }}>
        <TextField
          label="Per Piece Requirement"
          type="number"
          value={fabricData.perPieceRequirement}
          onChange={handleFabricChange('perPieceRequirement')}
          fullWidth
        />
      </Box>

      <Box sx={{ mt: 2 }}>
        <RadioGroup
          row
          value={fabricData.unit}
          onChange={handleFabricChange('unit')}
        >
          {units.map(unit => (
            <FormControlLabel 
              key={unit} 
              value={unit} 
              control={<Radio />} 
              label={unit} 
            />
          ))}
        </RadioGroup>
      </Box>

      <Box sx={{ mt: 2 }}>
        <CustomDropdown
          label="Processes"
          options={processes}
          value={fabricData.processes}
          onChange={handleFabricChange('processes')}
          multiple
        />
      </Box>

      {fabricData.colors.map((_, colorIndex) => (
        <ColorQuantitySection
          key={colorIndex}
          index={colorIndex}
          data={fabricData.colors[colorIndex]}
          onChange={(color, quantity) => {
            const newColors = [...fabricData.colors];
            newColors[colorIndex] = { color, quantity };
            setFabricData(prev => ({ ...prev, colors: newColors }));
          }}
        />
      ))}

      <Button 
        variant="outlined" 
        onClick={addColorQuantity}
        sx={{ mt: 2 }}
      >
        Add More Colors
      </Button>

      <Button 
        variant="outlined" 
        color="error" 
        onClick={handleRemove}
        sx={{ mt: 2, ml: 2 }}
      >
        Remove Fabric
      </Button>
    </Box>
  );
};

export default FabricSection;