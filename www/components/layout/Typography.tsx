import styled, { css } from 'styled-components';
import { colors, fonts, breakpoints } from '../../styles/variables';

const HeadingsBase = css`
  color: inherit;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  font-weight: 700;

  &:first-child {
    margin-top: 0;
  }
`;

export const H1 = styled('h1')`
  ${HeadingsBase}
  font-size: 2.25rem;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 3rem;
  }
`;

export const H2 = styled('h2')`
  ${HeadingsBase}
  font-size: 1.5rem;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 2.25rem;
  }
`;

export const H3 = styled('h3')`
  ${HeadingsBase}
  font-size: 1.25rem;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.5rem;
  }
`;

export const H4 = styled('h4')`
  ${HeadingsBase}
  font-size: 1rem;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 1.25rem;
  }
`;

export const H5 = styled('h5')`
  ${HeadingsBase}
  font-size: 0.875rem;

  @media (min-width: ${breakpoints.md}px) {
    font-size: 1rem;
  }
`;

export const H6 = styled('h6')`
  ${HeadingsBase}
  font-size: 0.875rem;
`;

const TextBase = css`
  color: inherit;
  line-height: 1.6;
`;

interface ParagraphProps {
  lead?: boolean;
}

export const P = styled('p')<ParagraphProps>`
  ${TextBase}
  font-size: ${props => (props.lead ? '1.25rem' : '1rem')};
  font-weight: 400;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled('span')`
  ${TextBase}
  font-size: 1rem;
  font-weight: 400;
`;

export const Small = styled('small')`
  ${TextBase}
  font-size: 0.875rem;
  font-weight: 400;
`;

export const A = styled('a')`
  text-decoration: none;
  color: ${colors.foreground};
  border-bottom: 2px solid ${colors.foreground};
  border-top: 2px solid transparent;

  &:hover,
  &:focus {
    background-color: ${colors.foreground};
    color: ${colors.background};
    border-top-color: ${colors.foreground};
  }
`;

export const InlineCode = styled('code')`
  color: ${colors.highlight01};
  font-family: ${fonts.monospace};
  font-size: 0.9em;
  white-space: pre-wrap;

  &::before,
  &::after {
    content: '\`';
  }
`;

export const BlockCode = styled('pre')`
  margin: 1rem -1.5rem !important;
  padding: 1rem 1.5rem !important;
  color: #ccc;
  background-color: #2d2d2d;
  font-family: ${fonts.monospace} !important;
  overflow: auto;
`;
