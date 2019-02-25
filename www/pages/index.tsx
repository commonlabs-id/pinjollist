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

const DynamicComponent = dynamic(() => import('../components/stats/RealtimeStats'));

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
          . Sayangnya, format dari publikasi daftar perusahaan-perusahaan tersebut tidak konsisten.
          Format yang digunakan berbeda setiap kali pembaruan dari data ini dipublikasi. Dan ketika
          kami mencoba memperoleh data tersebut, seringkali data tersebut tidak mudah ditemukan,
          terkadang Anda harus menemukannya di sudut-sudut terdalam dari situs mereka.
        </p>
        <p>
          Aksesibilitas data sangatlah penting, tidak hanya bagi masyarakat awam, namun juga
          pengembang aplikasi yang perlu memperoleh data mentah yang dapat diproses di dalam kode
          sebuah layanan/aplikasi. Inilah alasan kami dalam mengembangkan Pinjollistm dimana kami
          membuat{' '}
          <Link href="/api">
            <a>API umum</a>
          </Link>{' '}
          yang dapat digunakan pengembang aplikasi untuk menarik data-data tersebut.
        </p>
        <p>
          Dalam semangat <em>open data</em>, kami juga percaya penuh dalam keuntungan-keuntungan
          dari <em>open source</em>. Kami telah merilis kode sumber layanan ini - serta perlengkapan
          yang kami gunakan dalam memproses data-data kami - di{' '}
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
      <section>
        <SectionHeading>Statistik</SectionHeading>
        <DynamicComponent />
        <ButtonWrapper>
          <Link href="/api" passHref>
            <LinkButton>Referensi API</LinkButton>
          </Link>
          <Link href="/search" passHref>
            <LinkButton primary>Cari Perusahaan</LinkButton>
          </Link>
        </ButtonWrapper>
      </section>
    </Page>
  </Layout>
);

export default Index;

const ButtonWrapper = styled('div')`
  margin-top: 1.5rem;
  text-align: center;

  a {
    margin-left: 8px;
    margin-right: 8px;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
