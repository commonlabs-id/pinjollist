import React from 'react';
import styled from 'styled-components';

import reset from '../styles/reset';
import fonts from '../styles/fonts';
import global from '../styles/global';
import SEO from './SEO';
import Header from './Header';

const Layout: React.FC = ({ children }) => (
  <Root>
    <SEO />
    <style jsx global>
      {fonts}
    </style>
    <style jsx global>
      {reset}
    </style>
    <style jsx global>
      {global}
    </style>
    <Header />
    {children}
  </Root>
);

export default Layout;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
