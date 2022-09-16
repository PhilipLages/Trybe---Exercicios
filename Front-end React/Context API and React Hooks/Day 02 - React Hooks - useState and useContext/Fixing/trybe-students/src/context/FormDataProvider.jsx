import React, { useState } from 'react';
import { FormDataContext } from './context';

const initial_state = {
  name: '',
  age: 0,
  city: '',
  module: '',  
}

export default function FormDataProvider({children}) {

  const [ formData, setFormData ] = useState(initial_state);

  const handleChange = (({ target: {name, value} }) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  });

  const context = {
    formData,
    setFormData,
    handleChange,
  };

  return (
    <FormDataContext.Provider value={context}>
      {children}
    </FormDataContext.Provider>
  )
}
