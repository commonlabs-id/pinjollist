/* eslint-disable import/export */

interface Window {
  GA_INITIALIZED?: boolean;
}

// Node.JS extensions
declare namespace NodeJS {
  interface Process {
    browser?: boolean;
  }
}

// CSS Modules
declare module '*.css' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export default classNames;
}

// CSS Modules (.scss)
declare module '*.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export default classNames;
}

// MDX
declare module '*.md' {
  interface MDXProps {
    components?: {
      [key: string]: (props) => JSX.Element;
    };
  }

  const MDXComponent: (prop: MDXProps) => JSX.Element;
  export default MDXComponent;
}

// MDX (.mdx)
declare module '*.mdx' {
  interface MDXProps {
    components?: {
      [key: string]: (props) => JSX.Element;
    };
  }

  const MDXComponent: (prop: MDXProps) => JSX.Element;
  export default MDXComponent;
}
