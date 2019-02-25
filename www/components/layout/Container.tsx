import React from 'react';
import styled, { css } from 'styled-components';

import { widths, breakpoints } from '../../styles/variables';

interface ContainerProps {
  className?: string;
  size?: 'lg' | 'xl' | 'fluid';
}

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const BasicStyle = css`
  max-width: ${widths.md}px;
`;

const LargeStyles = css`
  @media (min-width: ${breakpoints.lg}px) {
    max-width: ${widths.lg}px;
  }
`;

const XLargeStyles = css`
  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${widths.xl}px;
  }
`;

export default styled(Container)`
  position: relative;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  ${props => props.size !== 'fluid' && BasicStyle}
  ${props => (props.size === 'lg' || props.size === 'xl') && LargeStyles}
  ${props => props.size === 'xl' && XLargeStyles}
`;
