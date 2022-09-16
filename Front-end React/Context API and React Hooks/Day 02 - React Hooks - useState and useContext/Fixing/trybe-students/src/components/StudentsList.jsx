import React from 'react'
import { useContext } from 'react'
import { StudentsContext } from '../context/context'

export default function StudentsList() {

  const { students } = useContext(StudentsContext);

  return (
    <section>
      <ul>
        {students.map(({ id, name, age, city, module }) => (
          <li key={ id }>
            <h2>Nome: { name }</h2>
            <p>Idade: { age }</p>
            <p>Cidade: { city }</p>
            <p>Módulo atual: { module }</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
