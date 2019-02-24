/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../styles/variables';

export const Heading1 = styled('h1')`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 800;
  text-transform: lowercase;
`;

export const Heading2 = styled('h2')`
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-transform: lowercase;
`;

export const InlineCode = styled('code')`
  color: ${colors.red};
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

const mdxComponents = {
  h1: (props: any) => <Heading1 {...props} />,
  h2: (props: any) => <Heading2 {...props} />,
  pre: (props: any) => <BlockCode {...props} />,
  inlineCode: (props: any) => <InlineCode {...props} />,
};

export default mdxComponents;
