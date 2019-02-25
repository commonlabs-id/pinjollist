import React from 'react';
import styled from 'styled-components';
import normalize from 'normalize.css';

import fonts from '../../styles/fonts';
import global from '../../styles/global';

import SEO from './SEO';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => (
  <Root>
    <SEO />
    <style jsx global>
      {fonts}
    </style>
    <style jsx global>
      {normalize}
    </style>
    <style jsx global>
      {global}
    </style>
    <Header />
    {children}
    <Footer />
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
