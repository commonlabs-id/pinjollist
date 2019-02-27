/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
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

const fetchCompanies = async () => {
  let platformsData = [];
  try {
    const res = await fetch('https://pinjollist.now.sh/api/companies');
    const { data } = await res.json();
    platformsData = data;
  } catch (e) {
    console.error(e);
  }
  return {
    platformsData,
  };
};

const Index: NextFunctionComponent<IndexPageProps> = ({ platformsData }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState(undefined);
  const [isRegistered, setIsRegistered] = useState(undefined);
  const [data, setData] = useState(platformsData);
  const [platforms, setSearch] = useSearch(data, fuseOptions);

  useEffect(() => {
    if (data.length < 1) {
      fetchCompanies().then(companies => {
        setData(companies.platformsData);
      });
    }
  }, []);

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

Index.getInitialProps = fetchCompanies;

export default Index;
