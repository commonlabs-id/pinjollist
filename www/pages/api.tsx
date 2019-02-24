/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import ReferenceCard from '../components/ReferenceCard';
import mdxComponents from '../components/docs/MDX';
import SectionHeading from '../components/SectionHeading';

import ResponseFormat from '../docs/response-format.md';
import Ping from '../docs/ping.md';
import GetCompanies from '../docs/companies.md';
import { colors } from '../styles/variables';

const DynamicComponent = dynamic(() => import('../components/RealtimeStats'));

const Index: React.FC = () => (
  <Layout>
    <Page>
      <section>
        <SectionHeading>Statistik</SectionHeading>
        <DynamicComponent />
        <ButtonWrapper>
          <Link href="/listed-companies" passHref>
            <Button>Lihat Daftar Lengkap</Button>
          </Link>
        </ButtonWrapper>
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

const ButtonWrapper = styled('div')`
  margin-top: 1.5rem;
  text-align: center;
`;

const Button = styled('a')`
  display: inline-block;
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
