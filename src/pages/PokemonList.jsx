import React from 'react';
import { useQuery } from '@apollo/client';

import pokemonListQuery from 'queries/pokemon-list';

const PokemonList = () => {
  const { loading, error, data } = useQuery(pokemonListQuery, {
    variables: {
      limit: 20,
    },
  });

  console.log(data);

  return (
    <h1>PokemonList Page</h1>
  );
};

PokemonList.displayName = 'PokemonListPage';

export default PokemonList;
