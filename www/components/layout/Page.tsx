import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Page: React.FC = ({ children }) => (
  <Root>
    <Container>{children}</Container>
  </Root>
);

export default Page;

const Root = styled('main')`
  flex: 1;
  padding: 1.5rem;
`;
