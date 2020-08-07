/* eslint-disable react/jsx-one-expression-per-line, jsx-a11y/anchor-is-valid */

import React from 'react';
import styled from 'styled-components';

import Container from './Container';
import { P, A } from './Typography';

const Footer: React.FC = () => (
  <Root>
    <Container>
      <P>
        Data diperoleh dari{' '}
        <A
          href="https://www.ojk.go.id/id/berita-dan-kegiatan/publikasi/Pages/Penyelenggara-Fintech-Terdaftar-dan-Berizin-di-OJK-per-31-Mei-2019.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          situs OJK
        </A>
        . Pembaruan terakhir: Agustus 2019. Dikembangkan oleh{' '}
        <A href="https://twitter.com/commonlabsID" target="_blank" rel="noopener noreferrer">
          @commonlabsID
        </A>{' '}
        bersama dengan{' '}
        <A
          href="https://github.com/commonlabs-id/pinjollist/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
        >
          kontributor
        </A>
        . Kode sumber tersedia di{' '}
        <A
          href="https://github.com/pinjollist/pinjollist"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </A>{' '}
        dalam lisensi{' '}
        <A
          href="https://github.com/pinjollist/pinjollist/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apache License 2.0.
        </A>
      </P>
    </Container>
  </Root>
);

export default Footer;

const Root = styled('footer')`
  margin-top: 3rem;
  padding: 1.5rem;
`;
