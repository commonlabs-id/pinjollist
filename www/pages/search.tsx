/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NextFunctionComponent } from 'next';
import debounce from 'debounce-fn';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';

import ResultCard from '../components/search/ResultCard';
import useSearch from '../components/search/useSearch';

import { PlatformsData } from '../types/companies';
import { breakpoints } from '../styles/variables';
import SearchWithDropdown from '../components/search/SearchWithDropdown';

const fuseOptions = {
  shouldSort: true,
  tokenize: true,
  includeMatches: true,
  findAllMatches: true,
  includeScore: true,
  matchAllTokens: true,
  minMatchCharLength: 2,
  keys: ['platform_name', 'company_name'],
};

const Title = styled('h1')`
  font-size: 2.25rem;
  font-weight: 400;

  b,
  u {
    font-weight: 800;
  }

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 3.5rem;
  }
`;

interface IndexPageProps {
  platformsData: PlatformsData[];
}

const Index: NextFunctionComponent<IndexPageProps> = ({ platformsData }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(undefined);
  const [isRegistered, setIsRegistered] = useState(undefined);

  const [platforms, setSearch] = useSearch(platformsData, fuseOptions);
  const debouncedSearch = debounce(setSearch, { wait: 100 });

  const search = (v: any) => {
    setValue(v);
    debouncedSearch(v);
  };

  return (
    <Layout>
      <Page>
        <section>
          <Title>
            Apakah {<u>{value || ((result && result['platform_name']) || result) || '_____'}</u>}{' '}
            terdaftar di <b>OJK</b>?
          </Title>
          {result ? (
            <h2>
              {isRegistered ? '✅ Ya,' : '🚫 Tidak,'} platform ini {isRegistered ? '' : 'tidak '}{' '}
              terdaftar di OJK.
            </h2>
          ) : null}
          {result ? <ResultCard result={result} /> : null}
          <SearchWithDropdown
            value={value}
            setSearch={search}
            setResult={setResult}
            setIsRegistered={setIsRegistered}
            platforms={platforms}
          />
        </section>
      </Page>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch('https://pinjollist.now.sh/api/companies');
  const { data: platformsData } = await res.json();

  return {
    platformsData,
  };
};

export default Index;
