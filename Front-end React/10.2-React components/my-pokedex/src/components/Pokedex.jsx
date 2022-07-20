import React, { Component } from "react";
import Pokemon from '../components/Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
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