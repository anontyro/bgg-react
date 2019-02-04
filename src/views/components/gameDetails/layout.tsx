import styled from '@emotion/styled';
import * as React from 'react';

interface Props {
  data?: any;
  children: React.ReactNode;
}

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const GameDetailLayout = ({ data, children }: Props) => {
  const enhancedChildren = React.Children.map(children, (child: any) =>
    React.cloneElement(child as React.ReactElement<any>, {
      data,
    }),
  );
  return <PageLayout>{enhancedChildren}</PageLayout>;
};

export default GameDetailLayout;
