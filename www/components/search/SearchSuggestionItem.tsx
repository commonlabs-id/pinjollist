import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const Item = styled('td')`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 1rem;
`;

const SuggestionButton = styled('button')`
  display: block;
  margin: -1rem;
  padding: 1rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

interface SearchSuggestionItemProps {
  handler: React.MouseEventHandler;
  company: string;
  platform: string;
}

const SearchSuggestionItem: React.FC<SearchSuggestionItemProps> = ({
  handler,
  company,
  platform,
}) => (
  <tr key={company}>
    <Item role="gridcell">
      <SuggestionButton onClick={handler}>
        {company} ({platform})
      </SuggestionButton>
    </Item>
  </tr>
);

export default SearchSuggestionItem;
