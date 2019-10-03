import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/variables';

const Item = styled('td')`
  background: white;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;

const SuggestionButton = styled('button')`
  padding: -1rem;
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
