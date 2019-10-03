import React from 'react';
import styled, { css } from 'styled-components';
import { AnalyticsHelpers } from '@pinjollist/next-with-analytics';

import SearchSuggestionItem from './SearchSuggestionItem';
import { breakpoints, colors } from '../../styles/variables';
import { Button } from '../ui/Button';

interface SearchWithDropdownProps {
  setResult: React.Dispatch<React.SetStateAction<any>>;
  setIsRegistered: React.Dispatch<React.SetStateAction<any>>;
  value: any;
  setSearch: (value: string) => void;
  platforms: any[];
  analytics?: Partial<AnalyticsHelpers>;
}

const trackSearch = (analytics?: Partial<AnalyticsHelpers>, value?: string) => {
  if (analytics && analytics.event && value) {
    analytics.event('CompanySearch', value);
  }
};

const ResultsTable = styled('table')`
  width: 100%;
  margin: 0;
  margin-top: 1.5;
  padding: 0;
  border-collapse: collapse;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
`;

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
  }
`;

interface InputProps {
  inputSize?: 'md' | 'lg';
  block?: boolean;
}

const LargeInput = css`
  padding: 10px 16px;
  font-size: 16px;
  line-height: 20px;
  height: 38px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 13px 16px;
    font-size: 20px;
    line-height: 24px;
    height: 50px;
  }
`;

const MediumInput = css`
  padding: 10px 16px;
  font-size: 16px;
  line-height: 20px;
  height: 38px;
`;

const Input = styled('input')<InputProps>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  width: 100%;
  align-self: center;
  flex: 1 1 auto;
  padding: 8px 10px;
  color: ${colors.foreground};
  border-radius: 0.25rem;
  border: 1px solid ${colors.accents02};

  &::placeholder {
    color: ${colors.accents03};
  }

  &:focus {
    outline: none;
    border-color: ${colors.black};
    box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
  }

  ${props => (props.inputSize === 'lg' ? LargeInput : MediumInput)}
`;

const InputWrapper = styled('div')`
  width: 100%;
  flex: 1 1 auto;
  margin-bottom: 1rem;

  @media (min-width: ${breakpoints.md}px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const SearchButton = styled(Button)`
  margin: 0;

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
        <InputWrapper>
          <Input
            value={value}
            onChange={changeHandler}
            inputSize="lg"
            block
            placeholder="Masukkan nama aplikasi (Kredit Hiu)"
          />
        </InputWrapper>
        <SearchButton primary block size="lg" type="submit">
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
