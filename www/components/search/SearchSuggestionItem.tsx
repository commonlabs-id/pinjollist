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

interface SearchSuggestionItemProps {
  handler: React.MouseEventHandler<HTMLTableDataCellElement>;
  company: string;
  platform: string;
}

const SearchSuggestionItem: React.FC<SearchSuggestionItemProps> = ({
  handler,
  company,
  platform,
}) => (
  <tr>
    <Item role="gridcell" onClick={handler}>
      {company} ({platform})
    </Item>
  </tr>
);

export default SearchSuggestionItem;
