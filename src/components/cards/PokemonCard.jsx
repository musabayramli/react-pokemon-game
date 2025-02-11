import React from 'react';

const PokemonCard = ({ pokemon }) => {
    const imageId = pokemon.id.toString().padStart(3, '0');
  const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imageId}.png`;

  return (
    <div className="pokemon-card">
      <h4>{pokemon.name}</h4>
      <img src={imageUrl} alt={pokemon.name} />
      <p>Type: {pokemon.type}</p>
      <p>Experience: {pokemon.base_experience}</p>
    </div>
  );
};

export default PokemonCard;
