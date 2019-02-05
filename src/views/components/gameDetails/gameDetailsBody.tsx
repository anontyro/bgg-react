import styled from '@emotion/styled';
import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

const BodyContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
`;

interface Props {
  data?: { boardgame: FullBoardGameType };
}

function GameDetailBody(props: Props) {
  if (!props.data) {
    return null;
  }
  const game = props.data.boardgame;
  console.log(game);
  return (
    <BodyContainer>
      <p dangerouslySetInnerHTML={{ __html: game.description[0] }} />
    </BodyContainer>
  );
}

export default GameDetailBody;
