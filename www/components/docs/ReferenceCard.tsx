import React from 'react';
import styled from 'styled-components';

const Root = styled('section')`
  margin: 1.5rem 0px;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 108px;

  &:first-of-type {
    margin-top: 0;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ReferenceCard: React.FC = ({ children }) => <Root>{children}</Root>;

export default ReferenceCard;
