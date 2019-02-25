import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

const LeadText = styled('p')`
  font-size: 1.25rem;
  font-weight: 300;

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 1.5rem;
  }
`;

export default LeadText;
