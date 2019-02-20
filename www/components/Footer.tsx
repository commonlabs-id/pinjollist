/* eslint-disable react/jsx-one-expression-per-line, jsx-a11y/anchor-is-valid */

import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const Footer: React.FC = () => (
  <Root>
    <Container>
      <p>
        Data diperoleh dari{' '}
        <a
          href="https://ojk.go.id/id/berita-dan-kegiatan/publikasi/Pages/Penyelenggara-Fintech-Terdaftar-di-OJK-per-Februari-2019.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          situs OJK
        </a>
        . Pembaruan terakhir: Februari 2019. Kode sumber tersedia di{' '}
        <a
          href="https://github.com/pinjollist/pinjollist"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        dalam lisensi{' '}
        <a
          href="https://github.com/pinjollist/pinjollist/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apache License 2.0.
        </a>
      </p>
    </Container>
  </Root>
);

export default Footer;

const Root = styled('footer')`
  margin-top: 3rem;
  padding: 1.5rem;
`;
