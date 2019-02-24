/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import styled from 'styled-components';

import { APIResponse, ErrorAPIResponse } from '../types/common';
import Spinner from './layout/Spinner';
import { colors, breakpoints } from '../styles/variables';
import RealtimeStatsCard from './RealtimeStatsCard';

interface RealtimeStateProps {
  data?: any[];
}

interface RealtimeStatsState {
  isLoading: boolean;
  errors?: string;
  data: any[];
}

const initialState: RealtimeStatsState = {
  isLoading: true,
  errors: undefined,
  data: [],
};

const RealtimeStats: React.FC<RealtimeStateProps> = ({ data }) => {
  const [state, setState] = React.useState<RealtimeStatsState>(initialState);

  const fetchData = async () => {
    if (data) {
      setState({
        ...state,
        isLoading: false,
        data,
      });
    } else {
      try {
        const res = await fetch(
          `${process.env.API_URL || 'https://pinjollist.now.sh'}/api/companies`,
        );
        const json: APIResponse<any[]> | ErrorAPIResponse = await res.json();

        if (json.status === 'ok') {
          setState({
            ...state,
            isLoading: false,
            data: json.data,
          });
        } else {
          if (json.status === 'error' && json.data.message) {
            throw new Error(json.data.message);
          }

          throw new Error('Failed to fetch data');
        }
      } catch (err) {
        setState({
          ...state,
          isLoading: false,
          errors: err.message,
        });
      }
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (state.isLoading) {
    return (
      <Root>
        <Spinner selfCenter />
      </Root>
    );
  }

  if (state.errors) {
    return (
      <Root>
        <ErrorText>{state.errors}</ErrorText>
      </Root>
    );
  }

  return (
    <Root>
      <RealtimeStatsCard number={state.data.length} text="Terdaftar" />
      <RealtimeStatsCard number={6} text="Dihapus" />
      <RealtimeStatsCard number={1} text="Terdaftar ulang" />
    </Root>
  );
};

export default RealtimeStats;

const Root = styled('div')`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 200px;
  margin-left: -0.75rem;
  margin-right: -0.75rem;

  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ErrorText = styled('p')`
  align-self: center;
  justify-self: center;
  width: 100%;
  margin: 0;
  color: ${colors.red};
  text-align: center;
`;
