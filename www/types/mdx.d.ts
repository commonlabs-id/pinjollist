/* eslint-disable import/export */

declare module '*.md' {
  interface MDXProps {
    components?: {
      [key: string]: (props) => JSX.Element;
    };
  }

  const MDXComponent: (prop: MDXProps) => JSX.Element;
  export default MDXComponent;
}

declare module '*.mdx' {
  interface MDXProps {
    components?: {
      [key: string]: (props) => JSX.Element;
    };
  }

  const MDXComponent: (prop: MDXProps) => JSX.Element;
  export default MDXComponent;
}
