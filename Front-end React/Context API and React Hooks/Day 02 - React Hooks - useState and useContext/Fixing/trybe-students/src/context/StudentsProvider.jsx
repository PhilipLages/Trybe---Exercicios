import React, { useContext, useState } from 'react'
import { FormDataContext, StudentsContext } from './context'

const initial_state = {
  name: '',
  age: 0,
  city: '',
  module: '',  
}

export default function StudentsProvider({ children }) {

  const [ students, setStudents ] = useState([])
  const [ id, setId ] = useState(0); 

  const { formData: { name, age, city, module }, setFormData } = useContext(FormDataContext);  

  const clearInputs = () => {
    setFormData({ ...initial_state });
  };

  const handleSubmit = (e) => {
    e.preventDefault();    
    setId(id + 1);

    const newStudent = {
      id, 
      name,
      age,
      city,
      module,
    }

    setStudents(prevState =>  [...prevState, newStudent] );
    clearInputs();
  }

  const context= {
    students,
    handleSubmit,
  }

  return (
    <StudentsContext.Provider value={context}>
      { children }
    </StudentsContext.Provider>
  )
}
