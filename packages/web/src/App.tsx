import { VOILA } from '@inab/common';
import { SERVER_URL } from 'config';
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState({
    data: 'Loading',
  });

  const fetchData = async () => {
    const res = await fetch(SERVER_URL).then(response => response.json());
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Hello INAB App 😊 - {VOILA}</h1>
      <h1>Hello Data- {data.data}</h1>
    </div>
  );
};

export default App;
