/* eslint-disable import/no-extraneous-dependencies */
import css from 'styled-jsx/css';

const fonts = css.global`
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-Regular.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-Regular.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-Italic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-Italic.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-Medium.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-Medium.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-MediumItalic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-MediumItalic.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-SemiBold.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-SemiBold.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-SemiBoldItalic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-SemiBoldItalic.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-Bold.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-Bold.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-BoldItalic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-BoldItalic.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-ExtraBold.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-ExtraBold.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 800;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-ExtraBoldItalic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-ExtraBoldItalic.woff") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-Black.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-Black.woff") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 900;
  font-display: swap;
  src: url("/static/fonts/inter/Inter-BlackItalic.woff2") format("woff2"),
       url("/static/fonts/inter/Inter-BlackItalic.woff") format("woff");
}
`;

export default fonts;
