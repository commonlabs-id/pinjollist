/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Page from '../components/Page';
import ReferenceCard from '../components/ReferenceCard';
import mdxComponents from '../components/MDX';
import SectionHeading from '../components/SectionHeading';

import ResponseFormat from '../docs/response-format.md';
import Ping from '../docs/ping.md';
import GetCompanies from '../docs/companies.md';
import { colors } from '../styles/variables';

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
          <em>peer-to-peer (P2P) lending</em> yang beroperasi di Indonesia, serta terdaftar dan
          memiliki lisensi dari{' '}
          <a href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer">
            Otoritas Jasa Keuangan (OJK)
          </a>
          .
        </LeadText>
        <p>
          Pinjollist is an open data repository of Indonesian peer-to-peer (P2P) lending companies
          registered and licensed by the{' '}
          <a href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer">
            Otoritas Jasa Keuangan (OJK)
          </a>
          .
        </p>
      </section>

      <section>
        <SectionHeading>Statistics</SectionHeading>
        <DynamicComponent />
        <ButtonWrapper>
          <Link href="/listed-companies" passHref>
            <Button>View All Data</Button>
          </Link>
        </ButtonWrapper>
      </section>

      <SectionHeading>API Reference</SectionHeading>

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

const ButtonWrapper = styled('div')`
  margin-top: 1.5rem;
  padding: 1.5rem 0;
  text-align: center;
`;

const Button = styled('a')`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  background-color: ${colors.black};
  color: ${colors.white};
  border: 1px solid transparent !important;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 8px;
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 16px;
  }
`;
