import gql from 'graphql-tag';

export const BASIC_SEARCH_QUERY = gql`
searchGame(query: $query) {
  name {
    name
  }
  id
  itemType
  yearPublished
}
`;
