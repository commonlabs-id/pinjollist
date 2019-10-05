import styled, { css } from 'styled-components';
import { colors, fonts, breakpoints } from '../../styles/variables';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  size?: 'md' | 'lg';
  block?: boolean;
}

const PrimaryStyles = css`
  background-color: ${colors.black};
  color: ${colors.white};

  &:hover,
  &:focus {
    background-color: ${colors.white};
    color: ${colors.black};
    border-color: ${colors.black};
  }
`;

const SecondaryStyles = css`
  background-color: ${colors.white};
  color: ${colors.grey};
  border-color: ${colors.border};

  &:hover,
  &:focus {
    background-color: ${colors.white};
    color: ${colors.black};
    border-color: ${colors.black};
  }
`;

const SizeMedium = css`
  padding: 0 16px;
  font-size: 14px;
  line-height: 38px;
  height: 38px;
  text-transform: uppercase;
`;

const SizeLarge = css`
  padding: 0 16px;
  font-size: 16px;
  line-height: 38px;
  height: 38px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0 24px;
    font-size: 20px;
    line-height: 50px;
    height: 50px;
  }
`;

const ButtonStyles = (props: ButtonProps) => css`
  display: ${props.block ? 'block' : 'inline-block'};
  ${props.block && 'width: 100%;'};
  letter-spacing: 0.01em;
  text-align: center;
  font-family: ${fonts.sansSerif};
  border: 1px solid transparent;
  border-radius: 6px;
  transition: border 0.3s, background-color 0.3s, color 0.3s ease-out;
  cursor: pointer;
  text-transform: none;

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  ${SecondaryStyles}
  ${props.primary && PrimaryStyles}
  ${props.size === 'lg' ? SizeLarge : SizeMedium}
`;

export const Button = styled('button')`
  ${ButtonStyles}
`;

export const LinkButton = styled('a')`
  ${ButtonStyles}
`;
