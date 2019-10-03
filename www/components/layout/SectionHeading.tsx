import React from 'react';
import styled from 'styled-components';
import { H1 } from './Typography';

const Root = styled(H1)`
  margin-top: 0;
  margin-bottom: 1.5rem;
`;

const SectionHeading: React.FC = ({ children }) => <Root>{children}</Root>;

export default SectionHeading;
