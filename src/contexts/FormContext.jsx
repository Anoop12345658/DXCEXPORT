import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    startDate: new Date(),
    endDate: new Date(),
    productionPerDay: 5,
    totalOrderQuantity: 12000,
    fabrics: [],
    hasChinaFabric: false,
    chinaFabrics: [],
    majorFabric: '',
    trims: [],
    accessories: []
  });

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);