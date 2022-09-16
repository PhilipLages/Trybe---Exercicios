import React, { useContext } from 'react';
import { FormDataContext, StudentsContext } from '../context/context';

export default function StudentsForm() {
  
  const { formData: { name, age, city, module }, handleChange } = useContext(FormDataContext);
  const { handleSubmit } = useContext(StudentsContext);

  return (
    <section>
        <h1>Estudantes Trybe</h1>
        <form onSubmit={ handleSubmit }>

            <input type="text" name="name" id="name" onChange={ handleChange } value={ name } placeholder='Nome completo' />
            <input type="number" name="age" id="age" onChange={ handleChange } value={ age } placeholder='Idade' />
            <input type="text" name="city" id="city" onChange={ handleChange } value={ city } placeholder='Cidade' />

            <input type="radio" checked={ module === 'fundam' } name="module" id="fundam" onChange={ handleChange } value='fundam'/> Fundamentos
            <input type="radio" checked={ module === 'front' } name="module" id="front" onChange={ handleChange } value='front'/> Front-end
            <input type="radio" checked={ module === 'back' } name="module" id="back" onChange={ handleChange } value='back'/> Back-end
            <input type="radio" checked={ module === 'cs' } name="module" id="cs" onChange={ handleChange } value='cs'/> Ciência da Computação

            <button type="submit">Enviar</button>

        </form>      
    </section>
  )
}
