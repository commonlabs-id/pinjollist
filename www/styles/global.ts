/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';
import { fonts, colors } from './variables';

const progressBarColor = colors.background;
const progressBarColorAlternate = colors.foreground;

const global = css.global`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    font-family: ${fonts.sansSerif};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    color: ${colors.foreground};
    background-color: ${colors.background};
  }

  svg {
    shape-rendering: crispEdges;
  }
  svg path,
  svg circle,
  svg polygon,
  svg rect,
  svg line {
    shape-rendering: geometricprecision;
  }

  ::selection {
    background-color: ${colors.highlight04};
    color: ${colors.foreground};
  }

  ::-moz-selection {
    background-color: ${colors.highlight04};
    color: ${colors.foreground};
  }

  #__next {
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${progressBarColor};

    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${progressBarColor}, 0 0 5px ${progressBarColor};
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    display: none;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  .is-note-hidden #nprogress .bar {
    background: ${progressBarColorAlternate};
  }

  .is-note-hidden #nprogress .peg {
    box-shadow: 0 0 10px ${progressBarColorAlternate}, 0 0 5px ${progressBarColorAlternate};
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default global;
