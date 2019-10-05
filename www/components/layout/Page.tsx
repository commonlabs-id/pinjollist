import React from 'react';
import styled from 'styled-components';

interface PageProps {
  noPadding?: boolean;
}

const Page: React.FC<PageProps> = ({ children, noPadding }) => (
  <Root noPadding={noPadding}>{children}</Root>
);

export default Page;

const Root = styled('main')<PageProps>`
  flex: 1;
  padding: 1.5rem;
  ${props => props.noPadding && 'padding-top: 0;'}
`;
