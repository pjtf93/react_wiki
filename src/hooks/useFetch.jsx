import { useState, useEffect } from 'react';

const useFetch = (API) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    fetch(API, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [API]);
  return data;
};

export default useFetch;
