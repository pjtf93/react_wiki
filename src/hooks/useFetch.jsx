import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (API) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      let config = {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      };

      const result = await axios(API, config);

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, [API]);

  return [{ data, isLoading }];
};
export default useFetch;

/* useEffect(() => {
    setLoading(true);
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
    setLoading(false);
  }, [API]);
  return [{ data, isLoading }];
}; */
