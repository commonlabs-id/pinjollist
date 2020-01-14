/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/variables';
import { ResponseObject } from '../../types/common';
import Spinner from '../ui/Spinner';
import RealtimeStatsCard from './RealtimeStatsCard';

interface RealtimeStateProps {
  data?: any[];
}

interface RealtimeStatsState {
  isLoading: boolean;
  errors?: string;
  data: any[];
  numBerizin: number;
  numSyariah: number;
}

const initialState: RealtimeStatsState = {
  isLoading: true,
  errors: undefined,
  data: [],
  numBerizin: 0,
  numSyariah: 0,
};

const ErrorText = styled('p')`
  align-self: center;
  justify-self: center;
  width: 100%;
  margin: 0;
  color: ${colors.red};
  text-align: center;
`;

const Root = styled('div')`
  height: 100%;
  background-color: ${colors.white};
`;

const RealtimeStats: React.FC<RealtimeStateProps> = ({ data }) => {
  const [state, setState] = React.useState<RealtimeStatsState>(initialState);

  const fetchData = async () => {
    if (data) {
      const numBerizin = data.filter(item => item.registration_type === 'Berizin').length;
      const numSyariah = data.filter(item => !!item.is_syariah === true).length;

      setState({
        ...state,
        isLoading: false,
        data,
        numBerizin,
        numSyariah,
      });
    } else {
      try {
        const res = await fetch(
          `${process.env.API_URL || 'https://pinjollist.now.sh'}/api/companies`,
        );
        const json: ResponseObject = await res.json();

        if (json.status === 'ok' && Array.isArray(json.data)) {
          const numBerizin = json.data.filter(item => item.registration_type === 'Berizin').length;
          const numSyariah = json.data.filter(item => !!item.is_syariah === true).length;

          setState({
            ...state,
            isLoading: false,
            data: json.data,
            numBerizin,
            numSyariah,
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
        <RealtimeStatsCard>
          <Spinner />
        </RealtimeStatsCard>
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
      <RealtimeStatsCard number={state.data.length} text="Jumlah Perusahaan Terdaftar" />
      <RealtimeStatsCard number={state.numBerizin} text="Berizin" />
      <RealtimeStatsCard number={state.numSyariah} text="Perusahaan Syariah" />
    </Root>
  );
};

export default RealtimeStats;
