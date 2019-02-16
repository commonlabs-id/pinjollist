/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { breakpoints } from '../styles/variables';

const Header: React.FC = () => (
  <Root>
    <Container>
      <Title>
        <span>pinjollist.</span>
      </Title>
      <Subtitle>
        (<span className="abbrev">pinj</span>aman <span className="abbrev">o</span>n
        <span className="abbrev">l</span>ine <span className="abbrev">list</span>)
      </Subtitle>
    </Container>
  </Root>
);

export default Header;

const Title = styled('h1')`
  position: relative;
  margin: 0;
  font-weight: 800;
  line-height: 1.1;
  font-size: 3rem;

  &:before {
    position: absolute;
    bottom: 20%;
    height: 10px;
    width: 1.5rem;
    background-color: #000;
    left: -1.5rem;
    z-index: 1;
    content: '';

    @media (min-width: ${breakpoints.lg}px) {
      width: 136px;
      left: -136px;
    }
  }

  span {
    position: relative;
    padding: 0 4px;
    background-color: #fafafa;
    z-index: 2;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 4.25rem;
  }
`;

const Subtitle = styled('p')`
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0 4px;
  line-height: 1.1;
  font-weight: 400;
  font-size: 1rem;

  .abbrev {
    font-weight: 800;
    text-decoration: underline;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1.6rem;
  }
`;

const Root = styled('header')`
  padding: 1.5rem;

  @media (min-width: ${breakpoints.lg}px) {
    padding: 3rem 1.5rem;
  }
`;
