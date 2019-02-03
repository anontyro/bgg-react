import { graphQlClient } from 'src';
import BOARDGAME_DETAIL_QUERY from 'src/queries/boardgameDetailQuery';

const boardGameData = async (id: string) => {
  const gameId = parseInt(id, 10);
  const data = await graphQlClient.query({
    query: BOARDGAME_DETAIL_QUERY,
    variables: { gameId },
  });

  return data;
};

export default boardGameData;
