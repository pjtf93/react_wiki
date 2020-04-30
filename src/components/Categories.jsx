import React from 'react';
import { Flex, Link } from '@chakra-ui/core';

const Categories = () => {
  return (
    <Flex justify='center' align='center' h={20} bg='black' color='white'>
      <Link mx={2}>Categories</Link>
      <Link mx={2}>Categories</Link>
      <Link mx={2}>Categories</Link>
      <Link mx={2}>Categories</Link>
    </Flex>
  );
};

export default Categories;
