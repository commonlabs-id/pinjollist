/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import ReferenceCard from '../components/docs/ReferenceCard';
import mdxComponents from '../components/docs/MDX';
import SectionHeading from '../components/layout/SectionHeading';

import ResponseFormat from '../docs/response-format.md';
import Ping from '../docs/ping.md';
import GetCompanies from '../docs/companies.md';

const Index: React.FC = () => (
  <Layout>
    <Page>
      <section>
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
      </section>
    </Page>
  </Layout>
);

export default Index;
