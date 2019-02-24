/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';
import { fonts, colors } from './variables';

const global = css.global`
html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

html, body, #__next {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

html {
  font-family: ${fonts.sansSerif};
  font-size: 16px;
  line-height: 1.5;
}

body {
  color: ${colors.black};
  background-color: ${colors.background};
}

a {
  text-decoration: none;
  color: ${colors.black};
  border-bottom: 2px solid ${colors.black};
  border-top: 2px solid transparent;
}

a:hover, a:focus {
  background-color: ${colors.black};
  color: ${colors.white};
  border-top-color: ${colors.black};
}
`;

export default global;
