import styled from '@emotion/styled';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SearchBoardGameType } from 'src/types/graphql/boardGameType';

interface Props {
  game: SearchBoardGameType;
}

const TitlePara = styled.p`
  text-transform: uppercase;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;

const TitleDisplay = (props: Props) => {
  const name = props.game.name[0].name;
  const yearPublished = !!props.game.yearPublished;
  const title = yearPublished
    ? `${name} + (${props.game.yearPublished})`
    : `${name}`;
  return <TitlePara>{title}</TitlePara>;
};

const SearchResultItem = (props: Props) => (
  <Link to={`/boardgame/${props.game.id}`}>
    <ItemContainer key={props.game.id}>
      <TitleDisplay game={props.game} />
      <p>{props.game.itemType}</p>
    </ItemContainer>
  </Link>
);

export default SearchResultItem;
