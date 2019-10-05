/* eslint-disable react/jsx-one-expression-per-line, jsx-a11y/anchor-is-valid */

import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { widths, colors, breakpoints } from '../../styles/variables';
import { BrandIcon } from '../ui/Brand';

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
    justify-content: flex-start;
  }
`;

interface NavItemProps {
  isTitle?: boolean;
}

const NavItemTitle = css`
  @media (max-width: ${breakpoints.lg - 1}px) {
    flex-basis: 100%;
    text-align: center;
  }
`;

interface NavItemLinkProps {
  isActive?: boolean;
}

const NavItemLink = styled('a')<NavItemLinkProps>`
  display: inline-flex;
  align-items: center;
  flex: 1;
  padding: 1rem 0 calc(1rem - 2px);
  border-bottom: 2px solid ${props => (props.isActive ? colors.foreground : 'transparent')};

  &:hover,
  &:focus {
    border-bottom-color: ${colors.foreground};
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0.5rem 0 calc(0.5rem - 2px);
  }
`;

const NavItem = styled('li')<NavItemProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;

  ${props => props.isTitle && NavItemTitle}
`;

const HomepageLink = styled('a')`
  display: inline-block;

  svg {
    vertical-align: middle;
  }
`;

const Header: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Root>
      <Inner>
        <NavItem isTitle>
          <Link href="/" passHref>
            <HomepageLink>
              <BrandIcon width={80} height={80} />
            </HomepageLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/about" passHref>
            <NavItemLink isActive={pathname === '/about'}>Tentang</NavItemLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/stats" passHref>
            <NavItemLink isActive={pathname === '/stats'}>Statistik</NavItemLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/docs" passHref>
            <NavItemLink isActive={pathname === '/docs'}>Referensi API</NavItemLink>
          </Link>
        </NavItem>
      </Inner>
    </Root>
  );
};

export default Header;
