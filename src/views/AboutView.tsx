import styled from '@emotion/styled';
import * as React from 'react';
import { BGG_BLUE } from 'src/data/constants/colours';

const BodyContainer = styled.div`
  width: 90%;
  margin: auto;

  a {
    color: gray;
  }
  a:hover {
    color: ${BGG_BLUE};
  }

  @media (max-width: 600px) {
    max-height: 68vh;
    min-height: 68vh;
  }
`;

const insertLink = (link: string, text: string) => {
  return (
    <span>
      {' '}
      <a href={link}>{text}</a>{' '}
    </span>
  );
};
const LINKS = {
  BGG_GRAPHQL: 'https://bgg-api.alexwilkinson.co/graphql',
  GITHUB_REPO: 'https://github.com/anontyro/graphql-server-test',
  HOMEPAGE: 'https://alexwilkinson.co',
};

export const AboutView = () => (
  <React.Fragment>
    <h1 style={{ textAlign: 'center' }}>About page</h1>
    <BodyContainer>
      This page was created to build a basic frontend for my{' '}
      {insertLink(LINKS.BGG_GRAPHQL, 'GraphQL server')}
      that parses the Board Game Geek xml V2.0 API. As this returns XML I parsed
      to JSON and then mapped it over GraphQL to get reasonable data.
      <br />
      <h3>Technology</h3>
      The frontend has been created in ReactJS using Typescript and Apollo for
      GraphQl, the backend is a simple Express server using native GraphQl
      support. The site has been deployed using docker to simplify the
      deployment method.
      <h3>Links</h3>
      <ul>
        <li>{insertLink(LINKS.GITHUB_REPO, 'GraphQl Repo')}</li>
        <li>{insertLink(LINKS.HOMEPAGE, 'My Site')}</li>
      </ul>
    </BodyContainer>
  </React.Fragment>
);
