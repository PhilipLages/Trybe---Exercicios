import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, image, averageWeight: { value, measurementUnit }} = pokemon;
    return (
      <section className="pokemon">
        <div>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>Average weight: {value}{measurementUnit}</p>
        </div>
        <img src={image} alt={name} />
      </section>
    )
  }  
}

Pokemon.prototypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;
