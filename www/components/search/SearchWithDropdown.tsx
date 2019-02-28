import React from 'react';
import styled from 'styled-components';

import SearchSuggestionItem from './SearchSuggestionItem';
import { breakpoints, colors } from '../../styles/variables';
import { Button } from '../ui/Button';
import { AnalyticsHelpers } from '../../utils/analytics';

interface SearchWithDropdownProps {
  setResult: React.Dispatch<React.SetStateAction<any>>;
  setIsRegistered: React.Dispatch<React.SetStateAction<any>>;
  value: any;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
  platforms: any[];
  analytics?: AnalyticsHelpers;
}

const trackSearch = (analytics?: AnalyticsHelpers, value?: string) => {
  if (analytics && value) {
    analytics.event('CompanySearch', value);
  }
};

const ResultsTable = styled('table')`
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: collapse;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
`;

const Form = styled('form')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled('input')`
  flex: 1 1 auto;
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #bfbfbf;
  margin: 1rem 1rem 1rem 0;
  align-self: center;
  max-width: 46rem;
  width: 100%;
  height: 50px;

  &:focus {
    outline: none;
    border-color: ${colors.black};
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
  }
`;

const SearchButton = styled(Button)`
  margin: 0;
  flex: 0 1 80px;
  text-transform: none;
  padding: 0.25rem 0.5rem;
  font-size: 1.25rem;
  height: 50px;

  &:focus {
    outline: none;
  }

  @media (min-width: ${breakpoints.lg}px) {
    flex: 0 1 155px;
  }
`;

const SearchWithDropdown: React.FC<SearchWithDropdownProps> = ({
  setResult,
  setIsRegistered,
  value,
  setSearch,
  platforms,
  analytics,
}) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    setResult(undefined);
    setIsRegistered(undefined);
    setSearch(e.target.value);
  };
  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!value) return;
          const hasResult = platforms.length > 0;
          const hasSubstr =
            hasResult && platforms[0].item['platform_name'].toLowerCase().includes(value);
          setResult(hasSubstr ? platforms[0].item : value);
          setSearch('');
          setIsRegistered(hasSubstr);
          trackSearch(analytics, `searched ${value}`);
        }}
      >
        <Input
          value={value}
          onChange={changeHandler}
          placeholder="Masukkan nama aplikasi (Kredit Hiu)"
        />
        <SearchButton primary type="submit">
          Cek
        </SearchButton>
      </Form>
      {platforms.length > 0 ? (
        <ResultsTable>
          <tbody>
            {platforms.map(r => {
              const { item, matches = [] } = r;
              if (matches.length < 1) {
                return null;
              }

              const chunks: any = {
                company_name: [],
                platform_name: [],
              };

              matches.forEach((m: any) => {
                const str = item[m.key].split('');
                let i = 0;
                m.indices.forEach((index: any) => {
                  const [beginning, endMinusOne] = index;
                  const end = endMinusOne + 1;
                  if (i < beginning) {
                    chunks[m.key].push(str.slice(i, beginning).join(''));
                  }
                  const highlighted = str.slice(beginning, end).join('');
                  chunks[m.key].push(<b key={`highlighted${i}`}>{highlighted}</b>);
                  i = end;
                });
                chunks[m.key].push(str.slice(i).join(''));
              });
              return (
                <SearchSuggestionItem
                  key={item['platform_name']}
                  handler={() => {
                    const isActive = platforms.length > 0;
                    setResult(item);
                    setSearch('');
                    setIsRegistered(isActive);
                    trackSearch(analytics, `suggested ${item['platform_name']}`);
                  }}
                  company={
                    chunks['company_name'].length > 0
                      ? chunks['company_name']
                      : item['company_name']
                  }
                  platform={
                    chunks['platform_name'].length > 0
                      ? chunks['platform_name']
                      : item['platform_name']
                  }
                />
              );
            })}
          </tbody>
        </ResultsTable>
      ) : null}
    </>
  );
};

export default SearchWithDropdown;
