/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import SectionHeading from '../components/layout/SectionHeading';

import LeadText from '../components/layout/LeadText';
import { LinkButton } from '../components/ui/Button';

const RealtimeStats = dynamic(() => import('../components/stats/RealtimeStats'));

const ButtonWrapper = styled('footer')`
  margin-top: 1.5rem;
  text-align: center;

  a {
    margin: 8px;
  }
`;

const RealtimeStatsSection = styled('section')`
  margin-bottom: 2rem;
`;

function IndexPage() {
  return (
    <Layout>
      <Page>
        <RealtimeStatsSection>
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
        </RealtimeStatsSection>
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
            Akhir-akhir ini, sering terdengar kabar mengenai{' '}
            <a href="https://medium.com/@msenaluphdika/p2p-tapi-bukan-peer-2-peer-jahatnya-p2p-lending-e28839e4881">
              praktek-praktek jahat jasa <em>fintech</em> <em>P2P lending</em>
            </a>{' '}
            yang memangsai para peminjamnya dengan cara apapun agar mereka membayar utang.
          </p>
          <p>
            Kami merasa bahwa literasi finansial sangatlah penting, dan ini adalah langkah pertama
            untuk mengedukasi masyarakat mengenai perusahaan mana yang masyarakat percayai untuk
            mengajukan kredit.
          </p>
          <p>
            OJK, sebagai lembaga pemerintahan, telah secara periodik mempublikasikan daftar
            perusahaan-perusahaan <em>fintech</em> <em>P2P lending</em> yang terdaftar dan/atau
            berizin. melalui{' '}
            <a href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer">
              situs mereka
            </a>
            . Sayangnya, format dari publikasi daftar perusahaan-perusahaan tersebut tidak
            konsisten. Format yang digunakan berbeda setiap kali pembaruan dari data ini
            dipublikasi. Dan ketika kami mencoba memperoleh data tersebut, seringkali data tersebut
            tidak mudah ditemukan, terkadang Anda harus menemukannya di sudut-sudut terdalam dari
            situs mereka.
          </p>
          <p>
            Aksesibilitas data sangatlah penting, tidak hanya bagi masyarakat awam, namun juga
            pengembang aplikasi yang perlu memperoleh data mentah yang dapat diproses di dalam kode
            sebuah layanan/aplikasi. Inilah alasan kami dalam mengembangkan Pinjollist dimana kami
            membuat{' '}
            <Link href="/docs">
              <a>API umum</a>
            </Link>{' '}
            yang dapat digunakan pengembang aplikasi untuk menarik data-data tersebut. Bagi
            masyarakat umum, kami juga menyediakan{' '}
            <a
              href="https://docs.google.com/spreadsheets/d/1vbbQG3IPSxJl9dAcGA9xmP5kWGNPF75QGlPA5gpApI0/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              spreadsheet
            </a>{' '}
            yang dapat diakses secara publik.
          </p>
          <p>
            Dalam semangat <em>open data</em>, kami juga percaya penuh dalam keuntungan-keuntungan
            dari <em>open source</em>. Kami telah merilis kode sumber layanan ini - serta
            perlengkapan yang kami gunakan dalam memproses data-data kami - di{' '}
            <a
              href="https://github.com/pinjollist/pinjollist"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            dalam lisensi bebas (
            <a
              href="https://github.com/pinjollist/pinjollist/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache License 2.0
            </a>
            ).
          </p>
        </section>
      </Page>
    </Layout>
  );
}

export default IndexPage;
