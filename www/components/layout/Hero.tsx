import styled from 'styled-components';
import { breakpoints } from '../../styles/variables';

const Hero = styled('div')`
  display: block;
  position: relative;
  padding: 40px 0;

  @media (min-width: ${breakpoints.md}px) {
    padding: 80px 0;
  }
`;

export default Hero;
