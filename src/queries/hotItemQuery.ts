import gql from 'graphql-tag';

export const HOT_ITEM_QUERY = gql`
  {
    hotItems {
      name
      id
      thumbnail
      index
      yearpublished
    }
  }
`;
