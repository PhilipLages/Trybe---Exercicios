import React from 'react'
import { useState } from 'react';

const initial_state = {
  name: '',
  age: 0,
  city: '',
  module: '',  
}

export default function StudentForm() {

  const [ formData, setFormData ] = useState(initial_state);

  const handleChange = (({target: {name, value}}) => {
    setFormData((prevData) => (
      { 
        ...prevData,
        [name]: value ,
      }));
  })

  return (
    <section>
        <h1>Estudantes Trybe</h1>
      <form>

          <input type="text" name="name" id="name" onChange={ handleChange } value={ formData.name } placeholder='Nome completo' />
          <input type="number" name="age" id="age" onChange={ handleChange } value={ formData.age } placeholder='Idade' />
          <input type="text" name="city" id="city" onChange={ handleChange } value={ formData.city } placeholder='Cidade' />
          <input type="radio" name="module" id="fundamentals" onChange={ handleChange } value='fundamentals'/> Fundamentos
          <input type="radio" name="module" id="front" onChange={ handleChange } value='front'/> Front-end
          <input type="radio" name="module" id="back" onChange={ handleChange } value='back'/> Back-end
          <input type="radio" name="module" id="cs" onChange={ handleChange } value='cs'/> Ciência da Computação

      </form>      
    </section>
  )
}
