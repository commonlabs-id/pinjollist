import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface SpinnerProps {
  selfCenter?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ selfCenter }) => <Root selfCenter={selfCenter} />;

export default Spinner;

const RotatePlane = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const SelfCenterStyles = css`
  align-self: center;
  justify-self: center;
`;

const Root = styled('div')`
  width: 40px;
  height: 40px;
  background-color: #000;
  ${(props: SpinnerProps) => props.selfCenter && SelfCenterStyles}

  margin: 0 auto;
  animation: ${RotatePlane} 1.2s infinite ease-in-out;
`;
