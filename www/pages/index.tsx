/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import styled from 'styled-components';
import Layout from '../component/Layout';
import Page from '../component/Page';
import { breakpoints } from '../styles/variables';

// TODO: refactor to .mdx
const Index: React.FC = () => (
  <Layout>
    <Page>
      <LeadText>
        Pinjollist merupakan layanan penyedia repositori data terbuka (<em>open data repository</em>
        ) perusahaan-perusahaan <em>fintech</em> <em>peer-to-peer (P2P) lending</em> yang terdaftar
        dan memiliki izin dari OJK.
      </LeadText>
      <p>
        Di dalam industri fintech peer-to-peer (P2P) lending di Indonesia, seringkali kita melihat
        praktek kerja dari para penagih utang perusahaan-perusaan tersebut yang sangat keji. [...]
      </p>
      <p>
        Sayangnya, kami merasa bahwa OJK kurang transparan dalam menyediakan data-data perusahaan
        yang dapat diakses secara terbuka. [...]
      </p>
      <Heading2>
        <span>Referensi API</span>
      </Heading2>
      <p>[...]</p>
    </Page>
  </Layout>
);

export default Index;

const Heading2 = styled('h2')`
  position: relative;
  font-weight: 800;
  line-height: 1.1;
  font-size: 2rem;
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

  span {
    position: relative;
    padding: 0 4px;
    background-color: #fafafa;
    z-index: 2;
  }
`;

const LeadText = styled('p')`
  font-size: 1.5rem;
  font-weight: 300;
`;
