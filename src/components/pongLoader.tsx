import styled from '@emotion/styled';
import * as React from 'react';
import './pongLoader.css';

/**
 * Pong loader used from https://codepen.io/georgehastings/pen/ezEId/
 * found via https://freefrontend.com/css-loaders/
 */

const LoaderContainer = styled.div``;

const PongLoader = () => (
  <LoaderContainer>
    <div className='pongLoader' />
  </LoaderContainer>
);

export default PongLoader;
