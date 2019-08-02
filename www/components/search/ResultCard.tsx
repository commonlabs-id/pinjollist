/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import styled from 'styled-components';
import { formatDistance } from 'date-fns';
import id from 'date-fns/locale/id';

import { breakpoints } from '../../styles/variables';
import { PlatformsData } from '../../types/companies';

const Root = styled('div')`
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 100rem rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin: 2rem 0;
`;

const Heading = styled('h1')`
  margin: 0.5rem 0;
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 400;

  @media (min-width: ${breakpoints.lg}px) {
    font-size: 4rem;
  }
`;

const Subheading = styled('h2')`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-weight: 400;
`;

const Metadata = styled('label')`
  margin: 1rem 0;
`;

const AddressLabel = styled('label')`
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.5);
`;

const Address = styled('address')`
  margin: 0.5rem 0;
`;

interface ResultCardProps {
  result: string | PlatformsData;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const [showRelative, setShowRelative] = useState(true);

  return (
    <Root>
      {typeof result === 'string' ? (
        <>
          <Heading>{result}</Heading>
          <Subheading>Tidak ditemukan</Subheading>
        </>
      ) : (
        <>
          <Metadata>
            <b>{result['registration']}</b> ·{'  '}
            <time dateTime={new Date(result['registered_at']._seconds * 1000).toISOString()}>
              {showRelative
                ? `${result['registration_type'] || 'Terdaftar'} sejak ${formatDistance(
                    new Date(result['registered_at']._seconds * 1000),
                    new Date(),
                    { locale: id },
                  )} lalu`
                : `${result['registration_type'] || 'Terdaftar'} sejak ${new Date(
                    result['registered_at']._seconds * 1000,
                  ).toLocaleDateString()}`}
            </time>
            <span
              onClick={() => {
                setShowRelative(!showRelative);
              }}
            >
              {' '}
              ⏱(klik)
            </span>
            {result['is_syariah'] ? (
              <>
                <span>{' · '}Syariah ☪️</span>
              </>
            ) : null}
          </Metadata>
          <Heading>{typeof result === 'string' ? result : result['platform_name']}</Heading>
          <Subheading>{result['company_name']}</Subheading>
          <AddressLabel>Alamat</AddressLabel>
          <Address
            dangerouslySetInnerHTML={{
              __html: `${(result['alamat'] && result['alamat'].replace(/\\n/g, '<br/>')) ||
                'Alamat tidak ditemukan.'}`,
            }}
          />
        </>
      )}
    </Root>
  );
};

export default ResultCard;
