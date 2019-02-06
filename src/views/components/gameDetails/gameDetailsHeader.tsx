import styled from '@emotion/styled';
import * as React from 'react';
import FullBoardGameType from 'src/types/graphql/boardGameType';

interface FlexDivProps {
  allowWrap?: boolean;
}

const GenericFlexDiv = styled.div<FlexDivProps>`
  display: flex;
  flex-wrap: ${(props: FlexDivProps) => (props.allowWrap ? 'wrap' : 'nowrap')};
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ItemFlexList = styled(GenericFlexDiv)`
  @media (max-width: 600px) {
    justify-content: space-evenly;
  }
`;

const GenericListItem = styled.span`
  width: 25%;
  flex-wrap: wrap;
  text-align: center;
  @media (max-width: 600px) {
    width: 30%;
    text-align: center;
  }
`;

const SubHeader = styled.span`
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
`;

const ThumbNail = styled.img`
  position: absolute;
  top: 1rem;
  left: 1rem;
  max-width: 190px;

  @media (max-width: 600px) {
    left: 30%;
  }
`;

const HeaderContainer = styled.div`
  height: 24rem;
  position: relative;
  width: 100vw;
`;

const HeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  width: 96vw;
  z-index: 10;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    bottom: 10px;
    width: 91vw;
  }
`;

interface HeaderProps {
  image: string;
}

const HeaderImage = styled.div<HeaderProps>`
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -15rem;
  opacity: 0.6;
  background-attachment: fixed;
  position: relative;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  background-image: url(${(props: HeaderProps) => props.image});

  @media (max-width: 600px) {
    background-position-y: 0;
  }
`;

const NameStyle = styled.p`
  margin: unset;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  color: white;
  -webkit-text-stroke: 1px black;
  font-weight: bold;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

interface NameProps {
  name: string;
  yearPublished?: number;
}

const MainName = (props: NameProps) => {
  const content = props.yearPublished
    ? `${props.name}(${props.yearPublished})`
    : props.name;
  return <NameStyle>{content}</NameStyle>;
};

interface Props {
  data?: { boardgame: FullBoardGameType };
}

function GameDetailHeader(props: Props) {
  if (!props.data) {
    return null;
  }
  const game = props.data.boardgame;

  return (
    <HeaderContainer>
      <HeaderImage image={game.images[0]} />
      <ThumbNail src={game.thumbnails[0]} />
      <HeaderContent>
        <div
          style={{
            width: '100%',
          }}
        >
          <MainName
            name={game.name[0].name}
            yearPublished={game.yearPublished}
          />
          <GenericFlexDiv allowWrap>
            <GenericFlexDiv allowWrap>
              <span>
                Players: {game.minPlayers} - {game.maxPlayers}
              </span>
            </GenericFlexDiv>
            <GenericFlexDiv allowWrap>
              <span>Play Time: {game.playTime} minutes</span>
            </GenericFlexDiv>
          </GenericFlexDiv>

          <ItemFlexList allowWrap>
            <SubHeader>Catagories: </SubHeader>
            {game.category.map((item: any) => (
              <GenericListItem key={Date.now().toString()}>
                {item.name}
              </GenericListItem>
            ))}
          </ItemFlexList>
          <ItemFlexList allowWrap>
            <SubHeader>Mechanics: </SubHeader>
            {game.mechanics.map((item: any) => (
              <GenericListItem key={Date.now().toString()}>
                {item.name}
              </GenericListItem>
            ))}
          </ItemFlexList>
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
}

export default GameDetailHeader;
