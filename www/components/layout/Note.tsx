import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Small } from './Typography';

const Root = styled('div')`
  padding: 0.5rem 1.5rem;
  background-color: ${colors.foreground};
  color: ${colors.background};
  text-align: center;

  a {
    text-decoration: none;
    color: ${colors.background};
    border-bottom: 2px solid ${colors.background};
    border-top: 2px solid transparent;

    &:hover,
    &:focus {
      background-color: ${colors.background};
      color: ${colors.foreground};
      border-top-color: ${colors.background};
    }
  }
`;

export default function Note() {
  return (
    <Root>
      <Small>
        Anda korban Pinjol Ilegal? Hubungi{' '}
        <a href="https://www.bantuanhukum.or.id/web/formulir-pengaduan-pos-korban-pinjaman-online-pinjol/">
          LBH Jakarta
        </a>
        !
      </Small>
    </Root>
  );
}
