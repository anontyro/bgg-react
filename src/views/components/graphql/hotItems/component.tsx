import styled from '@emotion/styled';
import * as React from 'react';
import GraphQlQueryWrap from 'src/HOC/graphQlQueryWrap';
import { HOT_ITEM_QUERY } from 'src/queries/hotItemQuery';
import HotItemType from 'src/types/graphql/hotItemType';

const PostersContainer = styled.div`
  display: flex;
  overflow-x: auto;
  width: 96%;
  margin: 1rem auto;
  height: 160px;
`;

interface PosterProps {
  image: string;
}

const PosterItem = styled.div<PosterProps>`
  background-image: url(${(props: any) => props.image});
  background-repeat: no-repeat;
  min-width: 10rem;
  max-width: 10rem;
  margin: 1rem;
  background-size: 100%;
`;

const GamePoster = (item: HotItemType) => {
  const image = item.thumbnail;
  return (
    <PosterItem image={image} key={item.id}>
      &nbsp;
    </PosterItem>
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
