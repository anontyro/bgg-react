import styled from '@emotion/styled';
import * as React from 'react';
import { Link } from 'react-router-dom';
import GraphQlQueryWrap from 'src/HOC/graphQlQueryWrap';
import { HOT_ITEM_QUERY } from 'src/queries/hotItemQuery';
import HotItemType from 'src/types/graphql/hotItemType';

const PostersContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 96%;
  margin: 1rem auto;
  height: 10rem;
  overflow-y: hidden;

  @media (max-width: 600px) {
    height: 6rem;
  }
`;

interface PosterProps {
  image: string;
}

const PosterItem = styled.div<PosterProps>`
  background-image: url(${(props: PosterProps) => props.image});
  background-repeat: no-repeat;
  min-width: 8rem;
  max-width: 8rem;
  margin: 1rem;
  background-size: 100%;
  height: 8rem;

  @media (max-width: 600px) {
    min-width: 4rem;
    max-width: 4rem;
    height: 4rem;
  }
`;

const GamePoster = (item: HotItemType) => {
  const image = item.thumbnail;
  return (
    <Link to={`/boardgame/${item.id}`} key={item.id}>
      <PosterItem image={image}>&nbsp;</PosterItem>
    </Link>
  );
};

const CreateHotItemView = ({ data }: any) => (
  <PostersContainer>
    {data.hotItems.map((item: HotItemType) => GamePoster(item))}
  </PostersContainer>
);

function HotItems() {
  return (
    <GraphQlQueryWrap query={HOT_ITEM_QUERY}>
      <CreateHotItemView />
    </GraphQlQueryWrap>
  );
}

export default HotItems;
