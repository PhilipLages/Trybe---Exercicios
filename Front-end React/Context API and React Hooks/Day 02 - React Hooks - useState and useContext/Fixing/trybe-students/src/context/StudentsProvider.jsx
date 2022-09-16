import React from 'react'
import { useState } from 'react';
import StudentsContext from './context';

const initial_state = {
  name: '',
  age: 0,
  city: '',
  module: '',  
}

export default function StudentsProvider({children}) {

  const [ formData, setFormData ] = useState(initial_state);

  const handleChange = (({ target: {name, value} }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  });

  const clearInputs = () => {
    setFormData({ ...initial_state });
  };

  const context = {
    formData,
    handleChange,
    clearInputs,
  };

  return (
    <StudentsContext.Provider value={context}>
      {children}
    </StudentsContext.Provider>
  )
}
