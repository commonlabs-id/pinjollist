/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Page from '../components/Page';
import ReferenceCard from '../components/ReferenceCard';
import mdxComponents from '../components/MDX';

import ResponseFormat from '../docs/response-format.md';
import Ping from '../docs/ping.md';
import GetCompanies from '../docs/companies.md';
import SectionHeading from '../components/SectionHeading';

// @ts-ignore types for dynamic() loader broken - fix in progress:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33163
const DynamicComponent = dynamic(() => import('../components/RealtimeStats'));

const Index: React.FC = () => (
  <Layout>
    <Page>
      <section>
        <LeadText>
          Pinjollist merupakan layanan penyedia repositori data terbuka (
          <em>open data repository</em>) perusahaan-perusahaan <em>fintech</em>{' '}
          <em>peer-to-peer (P2P) lending</em> yang terdaftar dan memiliki izin dari OJK.
        </LeadText>
        <p>
          Di dalam industri fintech peer-to-peer (P2P) lending di Indonesia, seringkali kita [...]
        </p>
        <p>
          Sayangnya, kami merasa bahwa OJK kurang transparan dalam menyediakan data-data perusahaan
          yang dapat diakses secara terbuka. [...]
        </p>
        <p>[TODO: copywriting]</p>
      </section>

      <section>
        <SectionHeading>Statistik</SectionHeading>
        <DynamicComponent />
      </section>

      <SectionHeading>Referensi API</SectionHeading>

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

const LeadText = styled('p')`
  font-size: 1.5rem;
  font-weight: 300;
`;
