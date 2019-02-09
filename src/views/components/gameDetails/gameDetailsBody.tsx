import styled from '@emotion/styled';
import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

const BodyContainer = styled.div`
  width: 90%;
  margin: 2rem auto;

  @media (max-width: 600px) {
    margin: 1rem auto;
    max-height: 35vh;
    min-height: 35vh;
    overflow-y: auto;
  }
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
