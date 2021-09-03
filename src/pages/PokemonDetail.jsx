import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import pokemonDetailQuery from 'queries/pokemon-detail';

const PokemonDetail = () => {
  const { pokemonName } = useParams();
  const { loading, error, data } = useQuery(pokemonDetailQuery, {
    variables: {
      name: pokemonName,
    }
  });

  console.log(data);

  return (
    <h1>PokemonDetail Page</h1>
  );
};

PokemonDetail.displayName = 'PokemonDetailPage';

export default PokemonDetail;
