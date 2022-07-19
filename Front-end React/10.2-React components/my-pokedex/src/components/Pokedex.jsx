import React from "react";
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  render() {
    return (
      <section className="container">
        <h1>Pokedex</h1>
        <div className="pokedex">
          {pokemons.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id}/>)}
        </div>
      </section>
    )
  }
}

export default Pokedex;