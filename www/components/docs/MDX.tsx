/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Small,
  Text,
  InlineCode,
  BlockCode,
} from '../layout/Typography';

const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  small: Small,
  span: Text,
  pre: BlockCode,
  inlineCode: InlineCode,
};

export default mdxComponents;
