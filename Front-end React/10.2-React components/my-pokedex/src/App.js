import React from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <section>
      <Pokedex  pokemons={pokemons} />
    </section>
  );
}

export default App;
