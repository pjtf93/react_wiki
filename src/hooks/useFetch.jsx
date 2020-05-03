import { useState, useEffect } from 'react';

const useFetch = (API) => {
  const [data, setData] = useState({
    data: [
      {
        id: '',
        title: '',
        content: '',
        created_at: '',
        updated_at: '',
        deleted_at: null,
        category: {
          id: '',
          name: '.',
          parent_id: null,
          created_at: '',
          updated_at: '',
          deleted_at: null,
        },
        comments: [
          {
            id: '',
            content: 'unde',
            created_at: '',
            updated_at: '',
            deleted_at: null,
          },
        ],
        tags: [
          {
            id: '',
            name: '',
            created_at: '',
            updated_at: '',
            deleted_at: null,
          },
        ],
        user: {
          id: '',
          first_name: '',
          last_name: '',
          email: '',
          email_verified_at: '',
          created_at: '',
          updated_at: '',
          deleted_at: null,
        },
      },
    ],
  });

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
