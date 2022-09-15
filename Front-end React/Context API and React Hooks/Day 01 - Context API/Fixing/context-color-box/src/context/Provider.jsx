import React from 'react'
import { useState } from 'react'
import ColorsContext from './context';

export default function Provider(props) {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['blue', 'red', 'yellow'];

  const handleColorChange = () => {
    colorIndex < colors.length - 1 ? setColorIndex(colorIndex + 1) : setColorIndex(0);
  }

  const context = {
    colors,
    colorIndex,
    handleColorChange,
  }

  const { children } = props;

  return (
    <ColorsContext.Provider value={ context }>
      {children}
    </ColorsContext.Provider>
  )
}
