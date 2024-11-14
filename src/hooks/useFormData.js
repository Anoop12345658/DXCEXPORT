import { useState } from 'react';
import { useFormContext } from '../contexts/FormContext';

export const useFormData = () => {
  const { formData, updateFormData } = useFormContext();
  const [fabricData, setFabricData] = useState({
    id: 0,
    fabricName: '',
    perPieceRequirement: 0.5,
    unit: 'M',
    processes: [],
    colors: [{ color: '', quantity: 0 }],
    stagesToSkip: [],
    chinaFabrics: []
  });

  const addFabric = () => {
    updateFormData({
      fabrics: [...formData.fabrics, fabricData]
    });
    setFabricData({
      id: formData.fabrics.length,
      fabricName: '',
      perPieceRequirement: 0.5,
      unit: 'M',
      processes: [],
      colors: [{ color: '', quantity: 0 }],
      stagesToSkip: [],
      chinaFabrics: []
    });
  };

  const removeFabric = (index) => {
    const newFabrics = [...formData.fabrics];
    newFabrics.splice(index, 1);
    updateFormData({ fabrics: newFabrics });
  };

  return {
    fabricData,
    setFabricData,
    addFabric,
    removeFabric
  };
};