import React from 'react';
import { Flex, Heading, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Categories = () => {
  const API = 'https://dry-beyond-85304.herokuapp.com/api/categorias';
  const [{ data, isLoading }] = useFetch(API);

  return (
    <Flex justify='center' align='center' h={20} bg='black' color='white'>
      {isLoading ? (
        <>
          <Spinner size='xl' />
        </>
      ) : (
        data.data &&
        data.data.map((item) => (
          <Heading
            as={ReactLink}
            to={{ pathname: `/categories/${item.id}` }}
            mx={2}
            key={item.id}
            size='md'
          >
            {`#${item.name}`}
          </Heading>
        ))
      )}
    </Flex>
  );
};

export default Categories;
