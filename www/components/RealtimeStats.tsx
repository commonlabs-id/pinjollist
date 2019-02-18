import React from 'react';

interface FetchedData {
  [key: string]: any;
}

interface RealtimeStatsState {
  data: FetchedData;
  errors?: string;
}

const RealtimeStats: React.FC = () => {
  const [data, setData] = React.useState<RealtimeStatsState['data']>({});
  const [errors, setErrors] = React.useState<RealtimeStatsState['errors']>(undefined);

  const fetchData = async () => {
    try {
      const result = await fetch('https://pinjollist.now.sh/api/companies');
      const json = await result.json();
      console.log(json);

      setData(json);
    } catch (err) {
      setErrors(err.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  if (errors) {
    return <div>{errors}</div>;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default RealtimeStats;
