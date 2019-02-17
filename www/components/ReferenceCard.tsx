import React from 'react';
import styled from 'styled-components';
import prismTheme from 'prismjs/themes/prism-tomorrow.css';

const ReferenceCard: React.FC = ({ children }) => (
  <Root>
    {children}
    <style jsx global>
      {prismTheme}
    </style>
  </Root>
);

export default ReferenceCard;

const Root = styled('section')`
  margin: 3rem 0px;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 108px;
`;
