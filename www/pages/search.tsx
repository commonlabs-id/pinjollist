/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import debounce from 'debounce-fn';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import { WithAnalyticsState } from '@pinjollist/next-with-analytics';

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

interface IndexPageProps extends WithAnalyticsState {
  platformsData: PlatformsData[];
}

const fetchCompanies = async () => {
  let platformsData: PlatformsData[] = [];
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

const Index: NextPage<IndexPageProps> = ({ platformsData, analytics }) => {
  const [value, setValue] = useState('');
  const [result, setResult] = useState<PlatformsData | undefined>(undefined);
  const [isRegistered, setIsRegistered] = useState<boolean | undefined>(undefined);
  const [data, setData] = useState<PlatformsData[]>(platformsData);
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
            analytics={analytics}
          />
        </section>
      </Page>
    </Layout>
  );
};

Index.getInitialProps = async ({ res }) => {
  const platformsData = await fetchCompanies();
  // eslint-disable-next-line global-require
  const etag = require('crypto')
    .createHash('md5')
    .update(JSON.stringify(platformsData))
    .digest('hex');

  if (res) {
    res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
    res.setHeader('X-version', etag);
  }

  return { ...platformsData, etag };
};

export default Index;
