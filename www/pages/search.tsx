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
import SearchWithDropdown from '../components/search/SearchWithDropdown';
import SectionHeading from '../components/layout/SectionHeading';

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

const Result = styled('h2')`
  font-weight: 400;
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
    <Layout pageTitle="Cari Perusahaan">
      <Page>
        <section>
          <SectionHeading>Cari Perusahaan</SectionHeading>
          {result ? (
            <Result>
              {isRegistered ? '✅' : '🚫'} Platform ini {isRegistered ? '' : 'tidak '} terdaftar di
              OJK.
            </Result>
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
