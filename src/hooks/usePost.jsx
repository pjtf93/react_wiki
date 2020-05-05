import { useEffect } from 'react';

const usePost = (API, datos) => {
  useEffect(() => {
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    fetch(API, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [API, datos]);
  return console.log('Usuario creado exitosamente');
};

export default usePost;
