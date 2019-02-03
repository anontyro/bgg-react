import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

interface Props {
  game: FullBoardGameType;
}

export function GameHeaderDetailComponent(props: Props) {
  return (
    <React.Fragment>
      <p>{props.game.name[0].name}</p>
      <p dangerouslySetInnerHTML={{ __html: props.game.description[0] }} />
    </React.Fragment>
  );
}
