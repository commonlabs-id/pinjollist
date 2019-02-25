import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

const SectionHeading: React.FC = ({ children }) => (
  <Root>
    <Span>{children}</Span>
  </Root>
);

export default SectionHeading;

const Span = styled('span')`
  position: relative;
  padding: 0 4px;
  z-index: 2;
`;

const Root = styled('h2')`
  position: relative;
  font-weight: 800;
  line-height: 1.1;
  font-size: 2.5rem;
  text-transform: lowercase;

  &:before {
    position: absolute;
    bottom: 20%;
    height: 6px;
    width: 1.5rem;
    background-color: #000;
    left: -1.5rem;
    z-index: 1;
    content: '';

    @media (min-width: ${breakpoints.lg}px) {
      width: 48px;
      left: -48px;
    }
  }
`;
