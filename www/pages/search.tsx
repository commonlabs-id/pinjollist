/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { NextFunctionComponent } from 'next';
import debounce from 'debounce-fn';
import fetch from 'isomorphic-unfetch';

import SEO from '../components/layout/SEO';
import Layout from '../components/layout/Layout';
import Page from '../components/layout/Page';

import ResultCard from '../components/search/ResultCard';
import Toast from '../components/search/Toast';
import useSearch from '../components/search/useSearch';
import SearchSuggestionItem from '../components/search/SearchSuggestionItem';

import { PlatformsData } from '../types/companies';

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

interface SearchWithDropdownProps {
  setResult: React.Dispatch<React.SetStateAction<any>>;
  setIsRegistered: React.Dispatch<React.SetStateAction<any>>;
  value: any;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
  platforms: any[];
}

const SearchWithDropdown: React.FC<SearchWithDropdownProps> = ({
  setResult,
  setIsRegistered,
  value,
  setSearch,
  platforms,
}) => {
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    setResult(undefined);
    setIsRegistered(undefined);
    setSearch(e.target.value);
  };
  return (
    <>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!value) return;
          const hasResult = platforms.length > 0;
          const hasSubstr =
            hasResult && platforms[0].item['platform_name'].toLowerCase().includes(value);
          setResult(hasSubstr ? platforms[0].item : value);
          setSearch('');
          setIsRegistered(hasSubstr);
        }}
      >
        <input
          value={value}
          onChange={changeHandler}
          placeholder="Masukkan nama aplikasi (Kredit Hiu)"
        />
        <input className="button" type="submit" value="Check" />
        <style jsx>{`
          form {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          input {
            flex: 7;
            font-family: 'Inter';
            font-size: 1.25rem;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: none;
            box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.5);
            margin: 1rem 1rem 1rem 0;
            align-self: center;
            max-width: 46rem;
            width: 100%;
          }
          .button {
            margin: 0;
            flex: 1;
            border: none;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 0.25rem;
            padding: 0.5rem;
            color: rgba(255, 255, 255, 0.9);
            font-family: 'Inter';
            font-size: 1.25rem;
            cursor: pointer;
          }
          .button:hover {
            background: rgba(0, 0, 0, 0.7);
          }
          @media (min-width: 1024px) {
            input {
              font-size: 1.5rem;
              padding: 1rem;
            }
            .button {
              padding: 1rem;
              font-size: 1.5rem;
            }
          }
        `}</style>
      </form>
      {platforms.length > 0 ? (
        <table>
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
                chunks[m.key].push(<b>{highlighted}</b>);
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
                }}
                company={
                  chunks['company_name'].length > 0 ? chunks['company_name'] : item['company_name']
                }
                platform={
                  chunks['platform_name'].length > 0
                    ? chunks['platform_name']
                    : item['platform_name']
                }
              />
            );
          })}
          <style jsx>
            {`
              table {
                width: 100%;
                margin: 0;
                padding: 0;
                border-collapse: collapse;
                box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
              }
            `}
          </style>
        </table>
      ) : null}
    </>
  );
};

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
      <SEO />
      <Page>
        <section>
          <h1 className="title">
            Apakah {<u>{value || ((result && result['platform_name']) || result) || '_____'}</u>}{' '}
            terdaftar di <b>OJK</b>?
          </h1>
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
          <Toast />
        </section>
      </Page>
      <style jsx>{`
        main {
          display: flex;
          flex: 1 1 auto;
          max-width: 48rem;
          min-height: 70vh;
          padding: 1.5rem;
          flex-direction: column;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 400;
        }
        .title b,
        .title u {
          font-weight: 800;
        }
      `}</style>
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
