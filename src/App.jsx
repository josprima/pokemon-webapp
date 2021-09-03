import { ApolloProvider } from '@apollo/client';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import client from 'utils/graphql-client';

import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemonList from './pages/MyPokemonList';

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route path="/" exact>
          <PokemonList />
        </Route>
        <Route path="/:pokemonName" exact>
          <PokemonDetail />
        </Route>
        <Route path="/my-pokemon" exact>
          <MyPokemonList />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>
);

App.displayName = 'App';

export default App;
