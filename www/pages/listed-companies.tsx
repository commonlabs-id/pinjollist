/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import styled from 'styled-components';
import { NextFunctionComponent } from 'next';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import format from 'date-fns/format';

import Layout from '../components/Layout';
import Page from '../components/Page';
import SectionHeading from '../components/SectionHeading';
import { APIResponse, ErrorAPIResponse } from '../types/common';
import { colors, breakpoints } from '../styles/variables';

// @ts-ignore types for dynamic() loader broken - fix in progress:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/33163
const DynamicComponent = dynamic(() => import('../components/RealtimeStats'));

interface ListedCompaniesProps {
  data?: Record<string, any>[];
  errors?: string;
}

const renderData = (props: ListedCompaniesProps) => {
  const { errors, data } = props;

  if (errors) {
    return (
      <tr>
        <td colSpan={5}>
          <ErrorText>{errors}</ErrorText>
        </td>
      </tr>
    );
  }

  if (data) {
    return data.map(item => (
      <tr key={item.platform_name}>
        <td>{item.registration}</td>
        <td>
          <a href={item.website[0]} target="_blank" rel="noopener noreferrer">
            {item.platform_name}
          </a>
        </td>
        <td>{item.company_name}</td>
        <td>{format(new Date(item.registered_at.seconds), 'DD MMM YYYY')}</td>
        <td>{item.registration_type}</td>
      </tr>
    ));
  }

  return (
    <tr>
      <td colSpan={6}>
        <ErrorText>This should never happen</ErrorText>
      </td>
    </tr>
  );
};

const ListedCompanies: NextFunctionComponent<ListedCompaniesProps> = ({ errors, data }) => (
  <Layout>
    <Page>
      <section>
        <SectionHeading>Statistics</SectionHeading>
        <DynamicComponent />
      </section>

      <section>
        <SectionHeading>Listed Companies</SectionHeading>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th scope="row" style={{ width: '350px' }}>
                  Reg. No.
                </th>
                <th scope="row" style={{ width: '250px' }}>
                  Platform Name
                </th>
                <th scope="row" style={{ width: '450px' }}>
                  Company Name
                </th>
                <th scope="row">Reg. Date</th>
                <th scope="row">Reg. Status</th>
              </tr>
            </thead>
            <tbody>{renderData({ errors, data })}</tbody>
          </table>
        </TableWrapper>
      </section>
    </Page>
  </Layout>
);

ListedCompanies.getInitialProps = async () => {
  try {
    const result = await fetch('https://pinjollist.now.sh/api/companies');
    const json: APIResponse<any[]> | ErrorAPIResponse = await result.json();

    if (json.status === 'ok') {
      return {
        data: json.data,
      };
    }

    if (json.status === 'error' && json.data.message) {
      throw new Error(json.data.message);
    }

    throw new Error('Failed to fetch data');
  } catch (err) {
    return {
      errors: err.message,
    };
  }
};

export default ListedCompanies;

const ErrorText = styled('p')`
  width: 100%;
  margin: 1rem 0;
  color: ${colors.red};
  text-align: center;
`;

const TableWrapper = styled('div')`
  display: block;
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 8px 108px;
  overflow-x: auto;

  table {
    width: 100%;
    color: #212529;
    border-collapse: collapse;

    th {
      padding: 0.5rem 1rem;
      vertical-align: top;
      border-bottom: 1px solid #eee;
      text-align: left;
    }

    td {
      padding: 0.5rem 1rem;
      vertical-align: top;
      border-top: 1px solid #eee;
    }

    tbody tr:nth-of-type(odd) {
      background-color: #f8f8f8;
    }

    thead th {
      padding: 0.75rem 1rem;
      border-bottom: 2px solid #eee;
      font-weight: 400;
      font-size: 90%;
      text-transform: uppercase;
      vertical-align: bottom;
    }
  }
`;
