/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';
import { fonts } from './variables';

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
  color: #000;
  background-color: #fafafa;
}
`;

export default global;