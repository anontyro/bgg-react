import gql from 'graphql-tag';

const BOARDGAME_DETAIL_QUERY = gql`
  query BoardgameDetail($gameId: Int!) {
    boardgame(id: $gameId) {
      name {
        name
      }
      thumbnails
      images
      description
      minPlayers
      maxPlayers
      playTime
      id
      yearPublished
      mechanics {
        name
      }
      category {
        name
      }
      publisher {
        name
        id
      }
      designer {
        name
        id
      }
      artist {
        name
        id
      }
    }
  }
`;

export default BOARDGAME_DETAIL_QUERY;
