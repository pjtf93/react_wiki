import React from 'react';
import { Flex, Heading, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <Flex justify='center' align='center' h={20} bg='black' color='white'>
      {!categories ? (
        <>
          <Spinner size='xl' />
        </>
      ) : (
        categories &&
        categories.map((item) => (
          <Heading
            as={ReactLink}
            to={{ pathname: `/categories/${item.id}` }}
            mx={2}
            key={item.id}
            size='md'
          >
            {`${item.name}`}
          </Heading>
        ))
      )}
    </Flex>
  );
};

export default Categories;
