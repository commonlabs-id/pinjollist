/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';
import SectionHeading from '../components/layout/SectionHeading';

import Container from '../components/layout/Container';
import Hero from '../components/layout/Hero';
import { WordmarkWithTagline } from '../components/ui/Brand';
import { breakpoints } from '../styles/variables';
import { P, A } from '../components/layout/Typography';

const CustomWordmarkStyled = styled(WordmarkWithTagline)`
  display: block;
  max-width: 100%;
  height: 100%;
  max-height: 143px;
  margin: 0 auto;

  @media (min-width: ${breakpoints.md}px) {
    max-height: 400px;
  }
`;

function IndexPage() {
  return (
    <Layout pageTitle="Tentang Pinjollist">
      <Page noPadding>
        <Hero>
          <Container>
            <CustomWordmarkStyled />
          </Container>
        </Hero>
        <Container>
          <SectionHeading>Tentang Pinjollist</SectionHeading>
          <P lead>
            Pinjollist merupakan layanan penyedia repositori data terbuka (
            <em>open data repository</em>) perusahaan-perusahaan <em>fintech</em>{' '}
            <em>peer-to-peer (P2P) lending</em> yang beroperasi di Indonesia, serta terdaftar dan
            memiliki lisensi dari{' '}
            <A href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer">
              Otoritas Jasa Keuangan (OJK)
            </A>
            .
          </P>
          <P>
            Akhir-akhir ini, sering terdengar kabar mengenai{' '}
            <A href="https://medium.com/@msenaluphdika/p2p-tapi-bukan-peer-2-peer-jahatnya-p2p-lending-e28839e4881">
              praktek-praktek jahat jasa <em>fintech</em> <em>P2P lending</em>
            </A>{' '}
            yang memangsai para peminjamnya dengan cara apapun agar mereka membayar utang.
          </P>
          <P>
            Kami merasa bahwa literasi finansial sangatlah penting, dan ini adalah langkah pertama
            untuk mengedukasi masyarakat mengenai perusahaan mana yang masyarakat percayai untuk
            mengajukan kredit.
          </P>
          <P>
            OJK, sebagai lembaga pemerintahan, telah secara periodik mempublikasikan daftar
            perusahaan-perusahaan <em>fintech</em> <em>P2P lending</em> yang terdaftar dan/atau
            berizin. melalui{' '}
            <A href="https://www.ojk.go.id/" target="_blank" rel="noopener noreferrer">
              situs mereka
            </A>
            . Sayangnya, format dari publikasi daftar perusahaan-perusahaan tersebut tidak
            konsisten. Format yang digunakan berbeda setiap kali pembaruan dari data ini
            dipublikasi. Dan ketika kami mencoba memperoleh data tersebut, seringkali data tersebut
            tidak mudah ditemukan, terkadang Anda harus menemukannya di sudut-sudut terdalam dari
            situs mereka.
          </P>
          <P>
            Aksesibilitas data sangatlah penting, tidak hanya bagi masyarakat awam, namun juga
            pengembang aplikasi yang perlu memperoleh data mentah yang dapat diproses di dalam kode
            sebuah layanan/aplikasi. Inilah alasan kami dalam mengembangkan Pinjollist dimana kami
            membuat{' '}
            <Link href="/docs" passHref>
              <A>API umum</A>
            </Link>{' '}
            yang dapat digunakan pengembang aplikasi untuk menarik data-data tersebut.
            {/* Bagi
            masyarakat umum, kami juga menyediakan{' '}
            <A
              href="https://docs.google.com/spreadsheets/d/1vbbQG3IPSxJl9dAcGA9xmP5kWGNPF75QGlPA5gpApI0/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              spreadsheet
            </A>{' '}
            yang dapat diakses secara publik.
            // TODO: Latest database doesn't use spreadsheets anymore. This needs update!
            */}
          </P>
          <P>
            Dalam semangat <em>open data</em>, kami juga percaya penuh dalam keuntungan-keuntungan
            dari <em>open source</em>. Kami telah merilis kode sumber layanan ini - serta
            perlengkapan yang kami gunakan dalam memproses data-data kami - di{' '}
            <A
              href="https://github.com/pinjollist/pinjollist"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </A>{' '}
            dalam lisensi bebas (
            <A
              href="https://github.com/pinjollist/pinjollist/blob/master/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apache License 2.0
            </A>
            ).
          </P>
        </Container>
      </Page>
    </Layout>
  );
}

export default IndexPage;
