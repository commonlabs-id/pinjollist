import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';
import { H1, H4 } from '../layout/Typography';

interface RealtimeStatsCardProps {
  number?: React.ReactText;
  text?: string;
}

const RealtimeStatsCard: React.FC<RealtimeStatsCardProps> = ({ number, text, children }) => {
  if (children) {
    return <Root>{children}</Root>;
  }

  return (
    <Root>
      {text && <Text>{text}</Text>}
      {number && <Heading as="p">{number}</Heading>}
    </Root>
  );
};

export default RealtimeStatsCard;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100px;
  padding: 1rem 0;

  @media (min-width: ${breakpoints.lg}px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Heading = styled(H1)`
  margin: 0;
`;

const Text = styled(H4)`
  margin: 0;
  font-weight: 400;

  @media (min-width: ${breakpoints.lg}px) {
    margin-bottom: 0;
    flex: 1 1 auto;
  }
`;
