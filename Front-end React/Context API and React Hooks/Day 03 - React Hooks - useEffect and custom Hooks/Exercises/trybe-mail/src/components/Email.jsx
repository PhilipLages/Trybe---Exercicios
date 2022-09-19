import React from 'react'

export default function Email({title}) {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <button type='button'>Marcar como lida</button>
        <button type='button'>Marcar como não-lida</button>
      </div>
    </section>
  )
}
