import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Small } from './Typography';

const Root = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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

const CloseButton = styled('button')`
  display: inline-block;
  margin: 0;
  margin-left: 8px;
  padding: 4px;
  background: none;
  border: none;
  text-decoration: none;
  border: 1px solid ${colors.background};
  border-radius: 4px;
  font-size: 0.75rem;
  color: ${colors.background};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${colors.background};
    color: ${colors.foreground};
    border-top-color: ${colors.background};
  }
`;

export default function Note() {
  const [isVisible, setVisible] = React.useState(() => {
    const storageItem = window.localStorage.getItem('isVisible');

    if (!storageItem) {
      return true;
    }

    return false;
  });

  const handleCloseButtonClick = () => {
    setVisible(false);
    window.localStorage.setItem('isVisible', 'false');
  };

  React.useEffect(() => {
    const bodyClasses = document.body.classList;

    if (!isVisible) {
      bodyClasses.add('is-note-hidden');
    } else {
      bodyClasses.remove('is-note-hidden');
    }
  }, [isVisible]);

  if (isVisible) {
    return (
      <Root>
        <Small>
          Anda korban Pinjol Ilegal? Laporkan ke{' '}
          <a href="https://lapor.go.id/instansi/otoritas-jasa-keuangan">lapor.go.id</a>!
        </Small>{' '}
        <CloseButton type="button" onClick={handleCloseButtonClick}>
          (tutup)
        </CloseButton>
      </Root>
    );
  }

  return null;
}
