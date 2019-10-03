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
        . Pembaruan terakhir: Mei 2019. Dibuat oleh{' '}
        <A href="https://twitter.com/mathdroid" target="_blank" rel="noopener noreferrer">
          @mathdroid
        </A>{' '}
        dan{' '}
        <A href="https://twitter.com/resir014" target="_blank" rel="noopener noreferrer">
          @resir014
        </A>{' '}
        Kode sumber tersedia di{' '}
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
