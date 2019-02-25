import React, { useState } from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

const ToastContainer = styled('div')`
  position: fixed;
  bottom: 1.5rem;
  right: 0;
  margin: 0 1.5rem;
  width: 100%;
  z-index: 2000;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: 420px;
  }
`;

const Root = styled('span')`
  display: block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 1rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  background: black;
  color: white;
  text-align: center;

  a {
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: ${breakpoints.sm - 1}px) {
    width: calc(100% - 3rem);
  }
`;

const Toast = () => {
  const [show, setShow] = useState(true);
  return (
    <ToastContainer>
      {show ? (
        <Root>
          Anda korban Pinjol Ilegal? Hubungi{' '}
          <a href="https://www.bantuanhukum.or.id/web/formulir-pengaduan-pos-korban-pinjaman-online-pinjol/">
            LBH Jakarta
          </a>
          !{' '}
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              setShow(false);
            }}
          >
            (tutup)
          </a>
        </Root>
      ) : null}
    </ToastContainer>
  );
};

export default Toast;
