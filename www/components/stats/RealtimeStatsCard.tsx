import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

interface RealtimeStatsCardProps {
  number: React.ReactText;
  text: string;
}

const RealtimeStatsCard: React.FC<RealtimeStatsCardProps> = ({ number, text }) => (
  <Root>
    <Heading>{number}</Heading>
    <Text>{text}</Text>
  </Root>
);

export default RealtimeStatsCard;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 1 33.33%;
  height: 200px;
  margin-bottom: 1.5rem;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  padding: 1rem 1.5rem;
  background-color: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 64px;
  border-radius: 8px;
  text-align: center;
`;

const Heading = styled('h2')`
  margin: 0;
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
`;

const Text = styled('p')`
  margin-top: 1rem;
  margin-bottom: 0;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
`;
