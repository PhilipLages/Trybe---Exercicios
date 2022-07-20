import React, {Component} from 'react';
import Pokedex from './components/Pokedex';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <Pokedex  pokemons={pokemons} />
      </section>
    );
  }
}

export default App;
