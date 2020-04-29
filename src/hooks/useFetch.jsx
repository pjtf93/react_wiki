import { useState, useEffect } from 'react';

const useFetch = (API) => {
  const [data, setData] = useState({
    data: [
      {
        id: '',
        title: '.',
        content: '',
        category_id: '',
        user_id: '',
        created_at: '',
        updated_at: '',
        deleted_at: null,
      },
    ],
  });

  useEffect(() => {
    fetch(API, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [API]);
  return data;
};

export default useFetch;
