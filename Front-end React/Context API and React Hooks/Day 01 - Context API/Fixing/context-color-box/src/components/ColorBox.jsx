import React, { useContext } from 'react';
import '../styles/box.css';
import ColorsContext from '../context/context';

export default function ColorBox() {
  const {colors, colorIndex, handleColorChange} = useContext(ColorsContext);

  return (
    <div>
      <button
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorIndex] } }
        onClick={ () => handleColorChange() }
      >
        Click me to change my color!
      </button>
    </div>
  )
}
