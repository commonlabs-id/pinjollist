/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Page from '../components/Page';
import ReferenceCard from '../components/ReferenceCard';
import mdxComponents from '../components/MDX';

import { breakpoints } from '../styles/variables';

import ResponseFormat from '../../docs/response-format.md';
import Ping from '../../docs/ping.md';
import GetCompanies from '../../docs/companies.md';

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
      <ReferenceCard>
        <ResponseFormat components={mdxComponents} />
      </ReferenceCard>
      <ReferenceCard>
        <Ping components={mdxComponents} />
      </ReferenceCard>
      <ReferenceCard>
        <GetCompanies components={mdxComponents} />
      </ReferenceCard>
    </Page>
  </Layout>
);

export default Index;

const Heading2 = styled('h2')`
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

  span {
    position: relative;
    padding: 0 4px;
    z-index: 2;
  }
`;

const LeadText = styled('p')`
  font-size: 1.5rem;
  font-weight: 300;
`;
