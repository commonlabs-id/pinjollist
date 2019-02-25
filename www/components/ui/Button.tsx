import styled, { css } from 'styled-components';
import { colors } from '../../styles/variables';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
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

const ButtonStyles = (props: ButtonProps) => css`
  display: inline-block;
  padding: 12px 16px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: 6px;
  transition: border 0.3s, background-color 0.3s, color 0.3s ease-out;
  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
  }

  ${SecondaryStyles}
  ${props.primary && PrimaryStyles}
`;

export const Button = styled('button')`
  ${ButtonStyles}
`;

export const LinkButton = styled('a')`
  ${ButtonStyles}
`;
