import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

interface Props {
  game?: { boardgame: FullBoardGameType };
}

export function GameHeaderDetailComponent(props: Props) {
  if (!props.game) {
    return null;
  }
  const game = props.game.boardgame;
  return (
    <React.Fragment>
      <p>{game.name[0].name}</p>
      <p dangerouslySetInnerHTML={{ __html: game.description[0] }} />
    </React.Fragment>
  );
}
