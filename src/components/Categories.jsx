import React, { useState, useEffect } from 'react';
import { Flex, Heading } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const API = 'https://dry-beyond-85304.herokuapp.com/api/categorias';

const Categories = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(API, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <Flex justify='center' align='center' h={20} bg='black' color='white'>
      {data.map((item, id) => (
        <Heading
          as={ReactLink}
          to={{ pathname: `/post/${item.id}` }}
          mx={2}
          key={id}
          size='md'
        >
          {`#${item.name}`}
        </Heading>
      ))}
    </Flex>
  );
};

export default Categories;
