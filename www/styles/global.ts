/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';

const global = css.global`
html, body, #__next {
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

html {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

body {
  color: #000;
  background-color: #fafafa;
}
`;

export default global;
