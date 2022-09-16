import React from 'react'
import { useState } from 'react';
import { useContext } from 'react'
import StudentsContext from '../context/context'

export default function StudentsForm() {

  const [ students, setStudents ] = useState([])
  const [ id, setId ] = useState(0); 

  const { formData: { name, age, city, module }, handleChange, clearInputs } = useContext(StudentsContext);  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id, 
      name,
      age,
      city,
      module,
    }

    setId(id + 1);
    setStudents([...students, newStudent]);
    clearInputs();
  }
  return (
    <section>
        <h1>Estudantes Trybe</h1>
      <form onSubmit={ handleSubmit }>

          <input type="text" name="name" id="name" onChange={ handleChange } value={ name } placeholder='Nome completo' />
          <input type="number" name="age" id="age" onChange={ handleChange } value={ age } placeholder='Idade' />
          <input type="text" name="city" id="city" onChange={ handleChange } value={ city } placeholder='Cidade' />
          <input type="radio" name="module" id="fundamentals" onChange={ handleChange } value='fundamentals'/> Fundamentos
          <input type="radio" name="module" id="front" onChange={ handleChange } value='front'/> Front-end
          <input type="radio" name="module" id="back" onChange={ handleChange } value='back'/> Back-end
          <input type="radio" name="module" id="cs" onChange={ handleChange } value='cs'/> Ciência da Computação

          <button type="submit">Enviar</button>

      </form>      
    </section>
  )
}
