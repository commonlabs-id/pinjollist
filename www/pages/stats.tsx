import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import { LinkButton } from '../components/ui/Button';
import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import Hero from '../components/layout/Hero';
import SectionHeading from '../components/layout/SectionHeading';
import Container from '../components/layout/Container';

const RealtimeStats = dynamic(() => import('../components/stats/RealtimeStats'));

const ButtonWrapper = styled('footer')`
  margin-top: 1.5rem;
  text-align: center;

  a {
    margin: 8px;
  }
`;

export default function StatsPage() {
  return (
    <Layout pageTitle="Statistik">
      <Page noPadding>
        <Hero>
          <Container>
            <SectionHeading>Statistik</SectionHeading>
            <RealtimeStats />
            <ButtonWrapper>
              <Link href="/docs" passHref>
                <LinkButton>Referensi API</LinkButton>
              </Link>
              <LinkButton href="https://docs.google.com/spreadsheets/d/1vbbQG3IPSxJl9dAcGA9xmP5kWGNPF75QGlPA5gpApI0/edit?usp=sharing">
                Lihat Spreadsheet
              </LinkButton>
              <Link href="/search" passHref>
                <LinkButton primary>Cari Perusahaan</LinkButton>
              </Link>
            </ButtonWrapper>
          </Container>
        </Hero>
      </Page>
    </Layout>
  );
}
