import { gql } from "@apollo/client";

const POKEMON_DETAIL_QUERY = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      abilities {
        ability {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
      message
      status
    }
  }
`;

export default POKEMON_DETAIL_QUERY;
