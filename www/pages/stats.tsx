import * as React from 'react';
import dynamic from 'next/dynamic';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import Hero from '../components/layout/Hero';
import SectionHeading from '../components/layout/SectionHeading';
import Container from '../components/layout/Container';

const RealtimeStats = dynamic(() => import('../components/stats/RealtimeStats'));

export default function StatsPage() {
  return (
    <Layout pageTitle="Statistik">
      <Page noPadding>
        <Hero>
          <Container>
            <SectionHeading>Statistik</SectionHeading>
            <RealtimeStats />
          </Container>
        </Hero>
      </Page>
    </Layout>
  );
}
