import * as React from 'react';
import { SearchBoardGameType } from 'src/types/graphql/boardGameType';
import styled from 'styled-components';

interface Props {
  game: SearchBoardGameType;
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
`;

const SearchResultItem = (props: Props) => (
  <ItemContainer key={props.game.id}>
    <p>{props.game.name[0].name}</p>
    <p>{props.game.itemType}</p>
    <p>{props.game.yearPublished}</p>
  </ItemContainer>
);

export default SearchResultItem;
