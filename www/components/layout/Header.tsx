/* eslint-disable react/jsx-one-expression-per-line, jsx-a11y/anchor-is-valid */

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { widths, colors, breakpoints } from '../../styles/variables';

const Root = styled('nav')`
  display: grid;
  grid-template-columns: 1fr 1fr minmax(auto, ${widths.xl}px) 1fr 1fr;
  background-color: ${colors.background};
  z-index: 50;
  box-shadow: inset 0 -1px ${colors.accents02};
`;

const Inner = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  grid-column: 3/4;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media (min-width: ${breakpoints.lg}px) {
    justify-content: flex-end;
  }
`;

interface NavItemProps {
  isTitle?: boolean;
}

const NavItemTitle = css`
  margin-right: auto;

  @media (max-width: ${breakpoints.lg - 1}px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

const NavItem = styled('li')<NavItemProps>`
  ${props => props.isTitle && NavItemTitle}
`;

const Header: React.FC = () => (
  <Root>
    <Inner>
      <NavItem isTitle>
        <Link href="/">
          <a>pinjollist</a>
        </Link>
      </NavItem>
      <NavItem>h</NavItem>
      <NavItem>j</NavItem>
      <NavItem>k</NavItem>
      <NavItem>l</NavItem>
    </Inner>
  </Root>
);

export default Header;
