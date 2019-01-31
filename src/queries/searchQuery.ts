import gql from 'graphql-tag';

export const BASIC_SEARCH_QUERY = gql`
  query SearchGame($query: String!) {
    searchGame(query: $query) {
      name {
        name
      }
      id
      itemType
      yearPublished
    }
  }
`;
