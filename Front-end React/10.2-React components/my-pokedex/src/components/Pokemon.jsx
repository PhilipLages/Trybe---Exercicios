import React from "react";

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

export default Pokemon;
